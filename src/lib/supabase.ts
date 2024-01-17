import { SUPABASE_KEY, SUPABASE_URL } from '$env/static/private';
import { createServerClient } from '@supabase/ssr';

export const supabase = createServerClient(SUPABASE_URL, SUPABASE_KEY, {
	cookies: {}
});
