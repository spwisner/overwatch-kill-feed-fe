const BREAKPOINTS = [['XS', 380], ['S', 569], ['M', 768], ['L', 992], ['XL', 1200], ['MAX', 1366], ['MMAX', 1800]]

// sample return size val => (min-width: 768px)
export const MATCH_MEDIA = BREAKPOINTS.reduce(
	(acc, bp) => ({
		...acc,
		[bp[0]]: `(min-width: ${bp[1]}px)`,
	}),
	{}
)

// sample return size val => @media (min-width: 768px)
export const MQ = BREAKPOINTS.reduce(
	(acc, bp) => ({
		...acc,
		[bp[0]]: `@media ${MATCH_MEDIA[bp[0]]}`,
	}),
	{}
)

export const COLORS = {
	BORDER_GRAY: '#e5e3dc',
	DARK_GRAY: '#353c42',
	LIGHT_GRAY: '#F2F1ED',
	GRAY: '#3B464A',
	TEXT_GRAY: '#4b535d',
	YELLOW: '#ff9c00',
	YELLOW_HOVER: '#ffb033',
	WHITE: '#fff',
}
