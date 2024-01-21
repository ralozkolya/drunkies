export const GET = async ({ locals: { supabase }, url: { searchParams } }) => {
	const page = parseInt(searchParams.get('page') as string) ?? 1;
	const perPage = 50;
	const offset = (page - 1) * perPage;

	const paginated = await supabase
		.from('detailed_log')
		.select<'detailed_log', Drink>()
		.range(offset, offset + perPage - 1);

	return Response.json({
		data: paginated.data,
		perPage: perPage
	});
};
