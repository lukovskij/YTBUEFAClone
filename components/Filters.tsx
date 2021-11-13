import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRecoilState } from 'recoil'
import { positionFilterState } from '../atoms/Players'

const positions = ['FWD', 'MID', 'DEF', 'GCK']

const Filters = () => {
	const [positionState, setPositionState] = useRecoilState(positionFilterState)
	
	console.log(positionState)
	const onFilterPosition = (position: string) => {
		console.log(position)
		setPositionState((curr) => {
			let existIndx = curr.indexOf(position)
			if(existIndx !== -1) {
				return curr.filter(el => el !== position)
			}
			return [...curr, position]
		})
	}
	return (
		<View style={styles.root}>
			{
				positions.map(el => (
					<Pressable key={el} style={[styles.filterButton, positionState.includes(el) ? {backgroundColor:'yellow'} : null]} onPress={() => onFilterPosition(el)}>
						<Text style={styles.text}>{el}</Text>
					</Pressable>
				))
			}
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	text: {
		fontWeight: 'bold',
	},
	filterButton: {
		backgroundColor: '#ddd',
		width: 50,
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent:'center',
	}
})

export default Filters
