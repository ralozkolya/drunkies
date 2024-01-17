import { SUPABASE_KEY, SUPABASE_URL } from '$env/static/private';
import { createServerClient } from '@supabase/ssr';

export const handle = async ({ event, resolve }) => {
	const supabase = createServerClient(SUPABASE_URL, SUPABASE_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, value, options) => {
				event.cookies.set(key, value, { ...options, path: options.path ?? '' });
			},
			remove: (key, options) => {
				event.cookies.delete(key, { ...options, path: options.path ?? '' });
			}
		},
		auth: {
			flowType: 'pkce'
		}
	});

	const user = await supabase.auth.getUser();

	event.locals = {
		supabase,
		user: user.data.user
	};

	return resolve(event);
};
