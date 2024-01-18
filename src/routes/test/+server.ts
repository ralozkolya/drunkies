export const GET = async () => {
	const res = await fetch('https://ifconfig.me', { headers: { 'user-agent': 'curl' } });
	return Response.json(await res.text());
};
