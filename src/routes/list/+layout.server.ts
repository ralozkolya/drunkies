export async function load({ locals: { user, supabase } }) {
	const { data: drinks = [] } = await supabase.from('drinks').select();

	return {
		drinks,
		user
	};
}
