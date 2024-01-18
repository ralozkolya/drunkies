export const GET = async ({ locals: { supabase } }) => {
	const log = await supabase.from('detailed_log').select<'detailed_log', Drink>();
	return Response.json(log.data);
};
