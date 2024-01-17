export type Drink = {
	id: string;
	name: string;
	alcohol: number;
	volume: number;
	user_id: string;
	icon: 'wine-glass' | 'whiskey-glass' | 'martini-glass-citrus' | 'beer-mug-empty';
};

export const load = async ({ locals: { supabase } }) => {
	const response = await supabase.from('drinks').select<'drinks', Drink>();

	return { drinks: response.data ?? [] };
};
