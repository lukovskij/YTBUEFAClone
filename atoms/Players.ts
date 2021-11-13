import { atom, selector } from "recoil";
import { Player, Positions } from "../types";
import { myPlayersState } from "./MyTeam";

export const myFormation = atom({
	key: 'myFormation',
	default: {
		FWD: 3,
		MID: 3,
		DEF: 4,
		GCK: 1,
	} as {[key in Positions]: number}
})

export const allPlayersState = selector({
	key: 'allPlayersState',
	get: async () => {
		try {
		const resp = await fetch('https://1501-213-111-122-87.ngrok.io/data')
		const re = await resp.json()
		console.log(re)
		return re as Player[]
		}catch(err) {
			console.log(err)
			throw err
		}
	}
})

export const positionFilterState = atom({
	key: 'positionFilterState',
	default: [] as string[]
})

export const filterSelector = selector({
	key: 'filterSelector',
	get: ({get}) => {
		const players = get(allPlayersState)
		const filters = get(positionFilterState)
		if(!filters.length){
			return players
		}
		return players.filter((player) => filters.includes(player.position))
	}
})

export const numberOfPlayers = selector({
	key: 'numberOfPlayers',
	get: ({get}) => {
		return get(myPlayersState)?.length
	}
})

export const valueOfPlayers = selector({
	key: 'valueOfPlayers',
	get: ({get}) => {
		return get(myPlayersState).reduce((acc, item) => (acc += item.price), 0)/1000000
	}
})