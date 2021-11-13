import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRecoilValue } from 'recoil'
import { numberOfPlayers, valueOfPlayers } from '../atoms/Players'

const TeamStats = () => {
	const numPlayers = useRecoilValue(numberOfPlayers)
	const playersSum = useRecoilValue(valueOfPlayers)
	return (
		<View style={styles.container}>
			<View style={styles.col}>
				<Text style={styles.label}>Players</Text>
				<Text style={styles.value}>{numPlayers} / 15</Text>
			</View>
			<View style={styles.col}>
				<Text style={styles.label}>Remaining</Text>
				<Text style={styles.value}>{playersSum}m</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: '90%',
		borderWidth: 4,
		borderRadius: 10,
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'space-around',
	},
	col: {
		
	},
	label: {
		color: '#333',
	},
	value: {
		fontSize: 18,
		fontWeight: 'bold',
	}
})

export default TeamStats
