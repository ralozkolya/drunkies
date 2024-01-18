export const getDate = (date?: Date) => {
	date ??= new Date();

	const year = String(date.getUTCFullYear()).padStart(2, '0');
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const day = String(date.getUTCDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};
