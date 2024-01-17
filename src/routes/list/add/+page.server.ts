import { fail, redirect } from '@sveltejs/kit';
import { ZodError, z } from 'zod';

export const load = async ({ parent, url: { searchParams } }) => {
	const { drinks }: { drinks: Drink[] } = await parent();

	return {
		drink: drinks.find((drink) => String(drink.id) === searchParams.get('drink')) ?? null
	};
};

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();

		const data = {
			name: String(formData.get('name')),
			alcohol: Number(formData.get('alcohol')),
			volume: Number(formData.get('volume')),
			icon: String(formData.get('icon'))
		};

		try {
			z.object({
				name: z.string().max(256),
				alcohol: z.number().positive().max(100),
				volume: z.number().positive().max(10000),
				icon: z.enum(['wine-glass', 'whiskey-glass', 'martini-glass-citrus', 'beer-mug-empty'])
			}).parse(data);
		} catch (error) {
			type Map = { [key: string]: string };

			const errors = (error as ZodError).errors.reduce((map: Map, error) => {
				const path = error.path[0] as string;
				map[path] = error.message;
				return map;
			}, {});

			return fail<{ data: typeof data; errors: Map }>(422, { data, errors });
		}

		await supabase.from('log').insert(data);

		const save = formData.get('save');

		if (save) {
			await supabase.from('drinks').insert(data);
		}

		redirect(302, '/list');
	}
};
