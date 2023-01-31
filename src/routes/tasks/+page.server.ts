import prisma from '$lib/prisma';
import type { PageServerLoad, Actions } from './$types';

export const load = (async () => {
	const todos = await prisma.todo.findMany({
		where: { completed: false },
		orderBy: { createdAt: 'desc' },
		include: { tags: true }
	});
	const completedTodos = await prisma.todo.findMany({
		where: { completed: true },
		orderBy: { updatedAt: 'asc' },
		include: { tags: true }
	});

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
	},
	create: async ({ request }) => {
		const data = await request.formData();
		const title = String(data.get('title'));
		if (title.length === 0) {
			return { error: true };
		}

		const tags = title.match(/#[a-zA-Z0-9_]+/g)?.map((word) => word.slice(1));
		console.log(tags);

		if (tags === undefined) {
			await prisma.todo.create({
				data: {
					title
				}
			});
		} else {
			await prisma.todo.create({
				data: {
					title,
					tags: {
						createMany: {
							data: tags.map((tag) => ({ name: tag.split('_').join(' '), type: 'personal' }))
						}
					}
				},
				include: { tags: true }
			});
		}

		return { title, success: true };
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('todoId'));

		await prisma.todo.delete({ where: { id } });
	},
	edit: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('todoId'));
		const title = String(data.get('todoTitle'));

		if (title.length === 0) {
			return { error: true };
		}

		await prisma.todo.update({ where: { id }, data: { title } });
	}
} satisfies Actions;
