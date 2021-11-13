import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useRecoilState, useRecoilValue } from 'recoil'
import { myPlayersState } from '../atoms/MyTeam'
import { myFormation } from '../atoms/Players'
import { Player, Positions } from '../types'

type Props = {
	player: Player
}
const PlayerListItem = ({player}: Props) => {
	const [myPlayers, setMyPlayers] = useRecoilState(myPlayersState)
	const formationState = useRecoilValue(myFormation)
	const activePlayer = myPlayers.find(el =>el?.id === player.id)

	const numberOfPlayersOnPos = (pos: Positions) => {
		return myPlayers.filter(p => p.position === pos).length
	}
	

	const addPlayerToTeam = () => {
		setMyPlayers((currArr) => {
			if(currArr.find(el => el.id === player.id)){
				return currArr.filter(e => e.id !== player.id)
			}
			if(numberOfPlayersOnPos(player.position) < formationState[player.position]){
				return [...currArr, player]
			}
			return currArr
		})
	}

	return (
		<Pressable style={[styles.root, activePlayer && {backgroundColor: '#fefeaa'}]} onPress={addPlayerToTeam}>
			<Image source={{uri: `https://media.api-sports.io/football/players/${player.id}.png`}} style={styles.image}/>
			<View style={{flexGrow: 1}}>
				<Text style={styles.name}>{player.name}</Text>
				<Text>{player.match}</Text>
			</View>
			<View style={{marginHorizontal: 10, justifyContent: 'flex-end'}}>
				<Text style={styles.name}>${(player.price/1_000_000).toFixed(1)}m</Text>
				<Text>{player.position}</Text>
			</View>
			<Text style={styles.points}>{player.totalPoints}</Text>
		</Pressable>
	)
}
const styles = StyleSheet.create({
	root: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 5,
		alignItems: 'center',
		borderBottomColor: '#eee',
		borderBottomWidth: 1,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 50,
		borderWidth: 1,
		marginRight: 8,
		borderColor: '#eee',
	},
	name: {
		fontWeight: 'bold',

	},
	points: {
		fontWeight: 'bold',
		fontSize: 18
	},
})
export default PlayerListItem
