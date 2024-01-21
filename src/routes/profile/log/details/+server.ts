import { z } from 'zod';

export const GET = async ({ locals: { supabase }, url: { searchParams } }) => {
	const complete = searchParams.get('complete');

	const page = parseInt(searchParams.get('page') as string) ?? 1;
	const perPage = 50;
	const offset = (page - 1) * perPage;

	const paginated = await supabase
		.from('detailed_log')
		.select<'detailed_log', Drink>()
		.range(complete ? 0 : offset, offset + perPage - 1);

	return Response.json({
		data: paginated.data,
		perPage: complete ? paginated.data?.length ?? 0 : perPage
	});
};

export const DELETE = async ({ request, locals: { supabase } }) => {
	const { id } = await request.json();

	try {
		z.number().positive().parse(id);

		const { error } = await supabase.from('log').delete().eq('id', id);

		if (error) {
			throw error;
		}
	} catch (error) {
		return new Response((error as Error).message, { status: 422 });
	}

	return new Response(null, { status: 204 });
};
