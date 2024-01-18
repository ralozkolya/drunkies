export const load = async ({ locals: { supabase, user } }) => {
	const { data } = await supabase.from('grouped_log').select();

	return { log: data?.sort((a) => (a.user_id === user?.id ? -1 : 1)) };
};
