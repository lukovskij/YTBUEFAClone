import { atom, selector } from "recoil";
import { Player, Positions } from "../types";
import { myFormation } from "./Players";

export const myPlayersState = atom({
	key: 'MyPlayers',
	default: [] as Player[]
})

const positions: Array<Positions> = ['FWD', 'MID', 'DEF', 'GCK']

export const myPlayersByPosition = selector({
	key: 'myPlayersByPosition',
	get: ({get}) => {
		const players = get(myPlayersState)
		const formation = get(myFormation)

		const groupPlayers: {[key in  Positions]: Player[]} = {
			'FWD': [],
			'MID': [],
			'DEF': [],
			'GCK': [],
		}

		positions.forEach(position => {
			groupPlayers[position] = players.filter(p => p.position === position)
			if(groupPlayers[position].length < formation[position]){
				groupPlayers[position] = [...groupPlayers[position], ...new Array(formation[position] - groupPlayers[position].length).fill(undefined)]
			}
		})
		console.log(groupPlayers)
		return groupPlayers
	},
})

// const playersOnField = players.reduce((acc, item) => {
//   acc[item.position] = Array.isArray(acc[item.position]) ? [...acc[item.position], item] : [item];
//   return acc
// }, {})