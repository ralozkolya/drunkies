export const load = async ({ locals: { supabase } }) => {
	const { data } = await supabase.from('grouped_log').select();
	return { log: data };
};
