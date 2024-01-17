export const load = async ({ locals: { supabase } }) => {
	const { data } = await supabase.from('grouped_log').select();
	console.log(data);
	return { log: data };
};
