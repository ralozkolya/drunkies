export const load = async ({ locals: { supabase } }) => {
	const response = await supabase.from('drinks').select<'drinks', Drink>();

	return { drinks: response.data ?? [] };
};
