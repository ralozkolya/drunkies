import { type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const { error } = await locals.supabase.auth.signInWithOtp({
			email: email as string,
			options: {
				emailRedirectTo: 'http://localhost:5173/callback'
			}
		});

		if (error) {
			return { error: error.message };
		}
	}
} satisfies Actions;
