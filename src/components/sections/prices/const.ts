export interface IPriceCard {
	text: string
	tech?: string
	time?: string
	price: string
}

export const consult: Array<IPriceCard> = [
	{
		text: 'Прием (осмотр, консультация) врача- косметолога первичный с диагностикой камерой Janus PRO Sunlike',
		time: '60',
		price: '2000'
	},
	{
		text: 'Прием (осмотр, консультация) врача-косметолога певичный без диагностики',
		time: '30',
		price: '1500'
	},
	{
		text: 'Прием (осмотр, консультация) врача- косметолога повторный с диагностикой камерой Janus PRO Sunlike',
		time: '30',
		price: '1000'
	},
	{
		text: 'Прием (осмотр, консультация) врача- косметолога повторный без диагностики камерой Janus PRO Sunlike',
		time: '30',
		price: '0'
	},
	{
		text: 'Генетическое тестирование по профилю Косметология',
		time: '30',
		price: '15000'
	},
	{
		text: 'Интерпретация генетического теста (консультация по результатам исследования)',
		time: '60',
		price: '3000'
	},
	{
		text: 'Печать книги дополнительно к исследованию',
		time: '',
		price: '1500'
	}
]

export const antiacneConcept: Array<IPriceCard> = [
	{
		text: 'AntiAcne Concept, фотодинамическая терапия Heleo4 AntiAcne (гель антиакне для ФДТ)',
		tech: 'Heleo4',
		time: '60',
		price: '6000'
	},
	{
		text: 'AntiAcne Concept, Affinity AntiAcne (раствор кислоты для Аффинити плюс маска противовосп кремовая)',
		tech: 'Affinity',
		time: '60',
		price: '5000'
	},
	{
		text: 'AntiAcne Concept, Jet Peel AntiAcne (Пилинг, барофорез Clear и маской противовосп)',
		tech: 'Jet Peel',
		time: '60',
		price: '6000'
	},
	{
		text: 'AntiAcne Concept, PROFACIAL AntiAcne (гель Антиакне вводится без RF)',
		tech: 'PROFACIAL',
		time: '60',
		price: '6000'
	},
	{
		text: 'AntiAcne Concept, микротоковая терапия AntiAcne (лифтинг и введение геля антиакне)',
		tech: 'BioUltimateGold',
		time: '60',
		price: '4000'
	}
]

export const clearConcept: Array<IPriceCard> = [
	{
		text: 'Clear Concept, PROFACIAL Clear Concept без RF- лифтинга (гель антиакне)',
		tech: 'PROFACIAL',
		time: '40',
		price: '6000'
	},
	{
		text: 'Clear Concept, PROFACIAL Clear Concept c RF- лифтингом (гель антиакне)',
		tech: 'PROFACIAL',
		time: '60',
		price: '7000'
	},
	{
		text: 'Clear Concept, Geneo Balance без RF-лифтинга',
		tech: 'Geneo+',
		time: '40',
		price: '7000'
	},
	{
		text: 'Clear Concept, Geneo Balance с RF-лифтингом',
		tech: 'Geneo+',
		time: '60',
		price: '8000'
	},
	{
		text: 'Clear Concept, Geneo Retouch без RF-лифтинга',
		tech: 'Retouche',
		time: '40',
		price: '7000'
	},
	{
		text: 'Clear Concept, Geneo Retouch c RF-лифтингом',
		tech: 'Retouche',
		time: '60',
		price: '8000'
	},
	{
		text: 'Clear Concept, Jet Peel Clear Concept (Программа Стимуляция -пилинг, барофорез с маской поросуживающей)',
		tech: 'Jet Peel',
		time: '60',
		price: '6000'
	},
	{
		text: 'Clear Concept, Affinity (лосьон с кислотой для Аффинити и маска поросуживающая)',
		tech: 'Affinity',
		time: '60',
		price: '5000'
	}
]

export const detoxConcept: Array<IPriceCard> = [
	{
		text: 'Detox Concept, фотодинамическая терапия Heleo4 Detox, лицо (Антиэйдж гель для ФДТ)',
		tech: 'Heleo4',
		time: '60',
		price: '6000'
	},
	{
		text: 'Detox Concept, фотодинамическая терапия Heleo4 Detox, лицо + шея (Антиэйдж гель для ФДТ)',
		tech: 'Heleo4',
		time: '60',
		price: '9000'
	},
	{
		text: 'Detox Concept, Geneo Detox без RF-лифтинга',
		tech: 'Geneo+',
		time: '40',
		price: '7000'
	},
	{
		text: 'Detox Concept, Geneo Detox c RF- лифтингом',
		tech: 'Geneo+',
		time: '60',
		price: '8000'
	},
	{
		text: 'Detox Concept, Jet Peel Detox (лимфодренаж, барофорез, маска)',
		tech: 'Jet Peel',
		time: '60',
		price: '6000'
	},
	{
		text: 'Detox Concept, микротоковый лимфодренаж Detox (микротоковый лимфодренаж в перчатках с введением геля от отеков)',
		tech: 'BioUltimateGold',
		time: '60',
		price: '4000'
	},
	{
		text: 'Detox Concept, PROFACIAL Detox без RF-лифтинга',
		tech: 'PROFACIAL',
		time: '40',
		price: '7000'
	},
	{
		text: 'Detox Concept, PROFACIAL Detox c RF-лифтингом',
		tech: 'PROFACIAL',
		time: '60',
		price: '8000'
	}
]

export const liftingConcept: Array<IPriceCard> = [
	{
		text: 'Lifting Concept, Geneo Revive',
		tech: 'Geneo+',
		time: '60',
		price: '7500'
	},
	{ text: 'Lifting Concept, Geneo Glam	Geneo+', time: '60', price: '7500' },
	{
		text: 'Lifting Concept, микротововый лифтинг (пробы, введение геля)',
		tech: 'BioUltimateGold',
		time: '60',
		price: '4000'
	},
	{
		text: 'Lifting Concept, TurboLift (с биомаской) - работа по лифтинговым мышцам, введение геля и биомаска',
		tech: 'BioUltimateGold',
		time: '60',
		price: '6000'
	},
	{
		text: 'Lifting Concept, RF-лифтинг (на Geneo)',
		tech: 'Geneo+',
		time: '40',
		price: '4000'
	},
	{
		text: 'Lifting Concept, Jet Peel Lifting (с 3D массажем и введением концентрата с аргирелином)',
		tech: 'Jet Peel',
		time: '60',
		price: '8000'
	},
	{
		text: 'Lifting Concept, Affinity Lifting (Аффинити и биореф с альгинатной маской)',
		tech: 'Affinity',
		time: '60',
		price: '6000'
	},
	{
		text: 'Lifting Concept, Jet Peel + Affinity (лимфодренаж Джет пил и программа Аффинити)',
		tech: 'Jet Peel + Affinity',
		time: '90',
		price: '9000'
	},
	{
		text: 'Lifting Concept, PROFACIAL lifting (введение концентрата с эластином под УЗ и микроток с RF-лифтингом )',
		tech: 'PROFACIAL',
		time: '60',
		price: '8000'
	}
]

export const brightConcept: Array<IPriceCard> = [
	{
		text: 'Bright Concept, Geneo Illuminate без RF-лифтинга',
		tech: 'Geneo+',
		time: '40',
		price: '7000'
	},
	{
		text: 'Bright Concept, Geneo Illuminate c RF-лифтингом',
		tech: 'Geneo+',
		time: '60',
		price: '8000'
	},
	{
		text: 'Bright Concept, Jet Peel Bright (пилинг, барофорез осветл конц и маска осветляющая)',
		tech: 'Jet Peel',
		time: '60',
		price: '6000'
	},
	{
		text: 'Bright Concept, Affinity Bright (гель осветляющий и маска осветляющая)',
		tech: 'Affinity',
		time: '60',
		price: '5000'
	},
	{
		text: 'Bright Concept, PROFACIAL Bright без RF-лифтинга с осветляющим гелем',
		tech: 'PROFACIAL',
		time: '40',
		price: '7000'
	},
	{
		text: 'Bright Concept, PROFACIAL Bright с RF-лифтингом с осветляющим гелем',
		tech: 'PROFACIAL',
		time: '60',
		price: '8000'
	},
	{
		text: 'Bright Concept, микротоковая терапия Bright с осветляющим гелем',
		tech: 'BioUltimateGold',
		time: '60',
		price: '4000'
	}
]

export const hydroConcept: Array<IPriceCard> = [
	{
		text: 'Geneo Hydro с RF- лифтингом',
		tech: 'Geneo+',
		time: '60',
		price: '8000'
	},
	{
		text: 'Geneo Hydro без RF-лифтинга',
		tech: 'Geneo+',
		time: '40',
		price: '7000'
	},
	{
		text: 'Jet Peel Hydro лимфодренаж и барофорез ГК, маска увлажняющая',
		tech: 'Jet Peel',
		time: '60',
		price: '6000'
	},
	{
		text: 'Affinity Hydro (гель увлажняющий и маска увлажняющая)',
		tech: 'Affinity',
		time: '60',
		price: '5000'
	},
	{
		text: 'PROFACIAL Hydro без RF-лифтинга (по увлажняющему гелю)',
		tech: 'PROFACIAL',
		time: '40',
		price: '7000'
	},
	{
		text: 'PROFACIAL Hydrо с RF-лифтингом (по увлажняющему гелю)',
		tech: 'PROFACIAL',
		time: '60',
		price: '8000'
	},
	{
		text: 'микротоковая терапия Hydro (введение увлажняющего геля)',
		tech: 'BioUltimateGold',
		time: '60',
		price: '4000'
	}
]

export const redConcept: Array<IPriceCard> = [
	{
		text: 'Red Concept, фотодинамическая терапия Heleo4 Red (гель Антиакне или Антиэйдж)',
		tech: 'Heleo4',
		time: '60',
		price: '6000'
	},
	{
		text: 'Red Concept, Affinity Red (гель успокаивающий и маска SOS от купероза)',
		tech: 'Affinity',
		time: '60',
		price: '5000'
	},
	{
		text: 'Red Concept, Jet Peel Red (лимфодренаж и маска SOS от купероза)',
		tech: 'Jet Peel',
		time: '60',
		price: '6000'
	},
	{
		text: 'Red Concept, микротоковая терапия Red (введение геля успокаивающего)',
		tech: 'BioUltimateGold',
		time: '60',
		price: '4000'
	}
]

export const personalConcept: Array<IPriceCard> = [
	{
		text: 'Personal Concept, Skin Retreat HELEO4 (массаж, фотобиомодуляция, маска)',
		tech: 'Heleo 4',
		time: '60',
		price: '6000'
	},

	{
		text: 'Personal Concept, ботулинотерапия, Миотокс 1 ед.',
		time: '30',
		price: '320'
	},

	{
		text: 'Personal Concept, Биоревитализация, Belotero Hydro, 1 мл.',
		time: '60',
		price: '15000'
	},
	{
		text: 'Personal Concept, Биоревитализация, Belotero Hydro, 2 мл.',
		time: '60',
		price: '19000'
	},
	{
		text: 'Personal Concept, Биоревитализация, Profhilo, 2 мл.',
		time: '60',
		price: '19800'
	},
	{
		text: 'Personal Concept, Биоревитализация, Bellarti Hydrate, 1 мл',
		time: '60',
		price: '13400'
	},
	{
		text: 'Personal Concept, Биоревитализация, Bellarti Hydrate, 2 мл',
		time: '60',
		price: '17000'
	},
	{
		text: 'Personal Concept, Биоревитализация, Bellarti Lift, 1 мл.',
		time: '60',
		price: '13400'
	},
	{
		text: 'Personal Concept, Биоревитализация, Bellarti Lift, 2 мл.',
		time: '60',
		price: '17000'
	},
	{
		text: 'Personal Concept, Биоревитализация, Viscoderm Skinko, 5 мл.',
		time: '60',
		price: '8200'
	},
	{
		text: 'Personal Concept, Биоревитализация, Viscoderm Skinko Е, 5 мл.',
		time: '60',
		price: '8900'
	},
	{
		text: 'Personal Concept, Биоревитализация, Curasen, 2 мл',
		time: '60',
		price: '7800'
	},
	{
		text: 'Personal Concept, контурная пластика, Belotero Soft, 1 мл',
		time: '60',
		price: '17500'
	},
	{
		text: 'Personal Concept, контурная пластика, Belotero Balance, 1 мл',
		time: '60',
		price: '18500'
	},
	{
		text: 'Personal Concept, контурная пластика, Belotero Intense, 1 мл',
		time: '60',
		price: '19500'
	},
	{
		text: 'Personal Concept, контурная пластика, Belotero Volume, 1 мл',
		time: '60',
		price: '20000'
	},
	{
		text: 'Personal Concept, контурная пластика, Belotero Volume, 2 мл',
		time: '60',
		price: '30000'
	},
	{
		text: 'Personal Concept, контурная пластика, Belotero Lips Contour 0,6 мл',
		time: '60',
		price: '15500'
	},
	{
		text: 'Personal Concept, контурная пластика, Belotero Lips Shape 0,6 мл',
		time: '60',
		price: '15500'
	},
	{
		text: 'Personal Concept, контурная пластика, Radiesse, 1,5 мл.',
		time: '60',
		price: '28000'
	},
	{
		text: 'Personal Concept, контурная пластика, Radiesse, 3 мл.',
		time: '60',
		price: '40000'
	},
	{
		text: 'Personal Concept, чистка лица механическая (гель разрыхляющий, чистка ручная, маска кремовая)',
		time: '60',
		price: '4500'
	},
	{
		text: 'Personal Concept, чистка лица комбинированная (гель разрыхляющий,Узпилинг, ручная чистка, маска )',
		time: '90',
		price: '5500'
	},

	{
		text: 'Personal Concept, PRX T33-терапия, 2 мл.',
		time: '45',
		price: '7000'
	}
]

export const allConcepts: Array<IPriceCard> = personalConcept
	.concat(redConcept)
	.concat(hydroConcept)
	.concat(brightConcept)
	.concat(liftingConcept)
	.concat(detoxConcept)
	.concat(clearConcept)
	.concat(antiacneConcept)
