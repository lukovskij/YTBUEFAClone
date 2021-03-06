import React from 'react'
import { View, Text } from 'react-native'
import {FontAwesome5} from '@expo/vector-icons'

type Props = {
	player: any
	position: string
}
const FieldPlayer = (props: Props) => {
	return (
		<View style={{alignItems: 'center'}}>
			<FontAwesome5 name='tshirt' size={35} color={props.player ? "#d170db" : '#5c5c5cbb'}/>
			<Text style={{
				backgroundColor: '#333333bb',
				color: 'white',
				fontWeight: 'bold',
				fontSize: 12,
				padding: 2,
				paddingHorizontal: 7,
			}}>
				{props.position}
			</Text>
		</View>
	)
}

export default FieldPlayer
