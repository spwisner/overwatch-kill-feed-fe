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
