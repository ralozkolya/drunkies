// See https://kit.svelte.dev/docs/types#app

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

	type Icon = 'wine-glass' | 'whiskey-glass' | 'martini-glass-citrus' | 'beer-mug-empty';
	interface Drink {
		id: string;
		name: string;
		alcohol: number;
		volume: number;
		user_id: string;
		icon: Icon;
	}
}

export {};
