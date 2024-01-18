import { uniqueNamesGenerator, type Config, adjectives, animals } from 'unique-names-generator';

export const getName = (seed: string) => {
	const config: Config = {
		dictionaries: [adjectives, animals],
		length: 2,
		separator: ' ',
		seed
	};
	return uniqueNamesGenerator(config);
};
