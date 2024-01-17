import { redirect } from '@sveltejs/kit';

const unauthUrls = new Set(['/', '/login']);

export const load = ({ locals: { user }, url }) => {
	if (user && unauthUrls.has(url.pathname)) {
		return redirect(302, '/profile/add');
	}

	return { user };
};
