import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get('code');
	try {
		const { error } = await supabase.auth.exchangeCodeForSession(code ?? '');
		redirect(302, error ? '/' : '/profile/add');
	} catch (error) {
		redirect(302, '/');
	}
};
