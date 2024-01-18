import { REDIRECT } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const { error } = await locals.supabase.auth.signInWithOtp({
			email: email as string,
			options: {
				emailRedirectTo: REDIRECT
			}
		});

		if (error) {
			return fail(422, { error: error.message });
		}

		redirect(302, '/login');
	},
	logout: async (event) => {
		await event.locals.supabase.auth.signOut({ scope: 'local' });
		redirect(302, '/');
	}
};
