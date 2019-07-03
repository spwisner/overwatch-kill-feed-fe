import CryptoFreeze from '../components/svgs/CryptoFreeze'
import Icicle from '../components/svgs/Icicle'
import OrbOfDestruction from '../components/svgs/OrbOfDestruction'
import OrbOfDiscord from '../components/svgs/OrbOfDiscord'
import PrimalRange from '../components/svgs/PrimalRange'
import TeslaCannon from '../components/svgs/TeslaCannon'

export const PLAYER_IMAGE_MAP = {
	Mei: 'assets/mei-icon.png',
	Winston: 'assets/winston-icon.png',
	Zenyatta: 'assets/zenyatta-icon.png',
}

export const METHOD_COMPONENT_MAP = {
	'Cryo-Freeze': CryptoFreeze,
	Icicle: Icicle,
	'Orb of Destruction': OrbOfDestruction,
	'Orb of Discord': OrbOfDiscord,
	'Primal Rage': PrimalRange,
	'Tesla Cannon': TeslaCannon,
}

export const DAMAGE_THRESHOLD = {
	LIGHT: 0,
	MEDIUM: 25,
	HEAVY: 60,
}
