// See https://kit.svelte.dev/docs/types#app

/// <reference types="vite-plugin-pwa/info" />

import type { SupabaseClient, User } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient;
			user: User | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type Icon =
		| 'wine-glass'
		| 'whiskey-glass'
		| 'martini-glass-citrus'
		| 'beer-mug-empty'
		| 'glass-water'
		| 'bottle-droplet';
	interface Drink {
		id: number;
		name: string;
		alcohol: number;
		volume: number;
		user_id: string;
		created_at: string;
		icon: Icon;
	}

	interface Entry {
		name: string;
		volume: number;
		alcohol: number;
	}
}

export {};
