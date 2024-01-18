import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { user }, url: { pathname } }) => {
	if (!user) {
		return redirect(302, '/');
	}

	if ('/profile' === pathname) {
		redirect(302, '/profile/add');
	}
};
