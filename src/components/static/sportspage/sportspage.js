
import { getEndpoint, getParam } from '../documentation'



const leagues = ["NFL", "NBA", "MLB", "NHL", "NCAAF", "NCAAB"];


export default {
	provider: "Sportspage Feeds",
	links: {
		homepage: "https://sportspagefeeds.com",
		documentation: "https://sportspagefeeds.com/documentation",
		terms: "https://sportspagefeeds.com/terms",
		rapid: "https://rapidapi.com/SportspageFeeds/api/sportspage-feeds",
		rapidApi: "https://sportspage-feeds.p.rapidapi.com/"
	},
	endpoints: [
		getEndpoint({
			name: "Conferences",
			description: "Returns a list of conferences and divisions within the specified league. Use this endpoint to obtain conference and division names to be used as parameters for other requests.",
			path: "/conferences",
			method: "GET",
			parameters: [
				getParam("league", "STRING", true, "A valid league code", leagues),
			]
		}),
		getEndpoint({
			name: "Teams",
			description: "Returns a list of teams within a specified league, conference, or division.",
			path: "/teams",
			method: "GET",
			parameters: [
				getParam("league", "STRING", true, "A valid league code", leagues),
				getParam("conference", "STRING", false, "A conference within the specified league"),
				getParam("division", "STRING", false, "A division within the specified conference")
			]
		}),
		getEndpoint({
			name: "Games",
			description: "Returns a list of games.",
			path: "/games",
			method: "GET",
			parameters: [
				getParam("date", "STRING", false, "One or two (comma-separated) YYYY-MM-DD- or ISO-formatted dates"),
				getParam("league", "STRING", false, "A valid league code", leagues),
				getParam("conference", "STRING", false, "A conference within the specified league"),
				getParam("division", "STRING", false, "A division within the specified conference"),
				getParam("status", "STRING", false, "A valid status game status", ["scheduled", "in progress", "final", "canceled", "delayed"]),
				getParam("odds", "STRING", false, "A comma-separated filter to select games with valid odds types", ["spread", "moneyline", "total", "any"]),
				getParam("skip", "INT", false, "The number of game results to skip, which is required to access results beyond the first 100")
			]
		}),
		getEndpoint({
			name: "Game By Id",
			description: "Returns a specific game based on its ID.",
			path: "/gameById",
			method: "GET",
			parameters: [
				getParam("gameId", "INT", true, "A unique game identifier"),
			]
		}),
		getEndpoint({
			name: "Odds",
			description: "Returns the odds history for a game by type.",
			path: "/odds",
			method: "GET",
			parameters: [
				getParam("gameId", "INT", true, "A unique game identifier"),
				getParam("type", "STRING", false, "A valid odds type", ["spread", "moneyline", "total", "any"])
			]
		})
	]
}



