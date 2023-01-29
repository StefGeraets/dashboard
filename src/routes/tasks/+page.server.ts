import prisma from '$lib/prisma';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	const todos = await prisma.todo.findMany({ where: { completed: false } });
	const completedTodos = await prisma.todo.findMany({ where: { completed: true } });

	return { todos, completedTodos };
}) satisfies PageServerLoad;

export const actions = {
	toggleTodo: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('todoId'));
		const checked = await prisma.todo.findFirst({ where: { id } });

		await prisma.todo.update({
			where: { id },
			data: {
				completed: !checked?.completed
			}
		});
	}
} satisfies Actions;
