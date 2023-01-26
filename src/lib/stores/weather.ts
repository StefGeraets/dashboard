import { writable } from 'svelte/store';
import type { WeatherStore } from '../types/weatherAPI';

export const weatherData = writable<WeatherStore>();
