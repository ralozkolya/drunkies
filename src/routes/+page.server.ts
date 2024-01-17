import { redirect } from '@sveltejs/kit';

export const actions = {
	logout: async (event) => {
		await event.locals.supabase.auth.signOut();
		redirect(302, '/');
	}
};
