import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, user } }) => {
	if (!user) {
		return redirect(302, '/');
	}

	const response = await supabase.from('drinks').select<'drinks', Drink>();

	return { drinks: response.data ?? [] };
};
