
import optionsAnalyzerDocs from './options-analyzer/options-analyzer'
import sportspageDocs from './sportspage/sportspage'


const cards = {
	"options-analyzer":{
		name: "Options Analyzer Pro",
		src: "https://cdn.pixabay.com/photo/2015/05/19/20/39/logo-774286__480.png",
		path: "/options-analyzer",
		description: "Analysis and visualization tools for options trading",
		bullets: [
			"Options greeks, implied volatility, and probabilities",
			"Trade evolution analysis",
			"Options market data",
			"Volatility skew, term structure, and volatility surface",
			"Interactive options charts"
		]
	},
	"sportspage": {
	    name: "Sportspage Feeds",
	    src: "https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/78/17cad031a911e9af09b5794b271614/168ff1ee535dc9621e11a4f4757e17a3.png",
	    path: "/sportspage-feeds",
	    description: "Affordable sports data for web and mobile apps",
	    bullets: [
	    	"NFL, NBA, MLB, NHL, NCAAF, and NCAAB",
			"Full league schedules",
			"Real-time scores",
			"Current and opening betting odds",
			"Full odds movement history"
	    ]
	  }
};


const pages = {
	"options-analyzer": {
		...cards["options-analyzer"],
		url: undefined,
		rapidUrl: "https://rapidapi.com/",
		documentationUrl: "https://www.hummingbirdapis.com/options-analyzer/documentation",
		documentation: optionsAnalyzerDocs,
		termsUrl: "https://www.hummingbirdapis.com/options-analyzer/terms",
		endpointGroups: {
			basic: [
				"/teams",
				"/conferences",
				"/games",
				"/gameById",
				"/odds",
			],
			intermediate: [
				"/teams",
				"/conferences",
				"/games",
				"/gameById",
				"/odds",
			],
			advanced: [
				"/teams",
				"/conferences",
				"/games",
				"/gameById",
				"/odds",
			],
		},
		pricing: {
			features: {

			},
			plans: [{
				plan: "Basic",
				price: 0,
				calls: {
					basic: {
						calls: 100,
						excluded: [],
					},
					intermediate: {
						calls: 100,
						excluded: [],
					},
					advanced: {
						calls: 100,
						excluded: [],
					}
				},
				period: "monthly"
			}, 
			{
				plan: "Pro",
				price: 29,
				calls: {
					basic: {
						calls: 1000,
						excluded: [],
					},
					intermediate: {
						calls: 100,
						excluded: [],
					},
					advanced: {
						calls: 100,
						excluded: [],
					}
				},
				period: "daily"
			}, {
				plan: "Ultra",
				price: 99,
				calls: {
					basic: {
						calls: 100,
						excluded: [],
					},
					intermediate: {
						calls: 100,
						excluded: [],
					},
					advanced: {
						calls: 100,
						excluded: [],
					}
				},
				period: "daily"
			}
			]
		}
	},

	"sportspage": {
		...cards["sportspage"],
		url: "https://sportspagefeeds.com/",
		rapidUrl: "https://rapidapi.com/SportspageFeeds/api/sportspage-feeds/pricing",
		documentationUrl: "https://sportspagefeeds.com/documentation",
		documentation: sportspageDocs,
		termsUrl: "https://sportspagefeeds.com/terms",
		endpointGroups: {
			all: [
				"/teams",
				"/conferences",
				"/games",
				"/gameById",
				"/odds",
			]
		},
		pricing: {
			features: {

			},
			plans: [{
				plan: "Pro",
				price: 39,
				calls: {
					all: {
						calls: 150,
						excluded: ["/odds"]
					}
				},
				period: "daily"
			}, {
				plan: "Ultra",
				price: 69,
				calls: {
					all: {
						calls: 3000,
						excluded: []
					}
				},
				period: "daily"
			}, {
				plan: "Mega",
				price: 139,
				calls: {
					all: {
						calls: 30000,
						excluded: []
					}
				},
				period: "daily"
			}]
		}
	}
}



export { cards, pages }

