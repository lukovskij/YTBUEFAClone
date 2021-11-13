import React from 'react'
import { ImageBackground, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import field from '../assets/images/field.jpg';
import { myPlayersByPosition } from '../atoms/MyTeam';
import { Positions } from '../types';
import FieldPlayer from './FieldPlayer';


type Props = {}
const Field = (props: Props) => {
	const players = useRecoilValue(myPlayersByPosition)
	return (
		<ImageBackground source={field} resizeMode='contain' style={{width: '100%', aspectRatio:2/3, alignItems: 'center', justifyContent: 'space-around',}}>
		{
			Object.keys(players).map((position) => (
				<View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
					{
						players[position as Positions].map(el => (<FieldPlayer player={el} position={position}/>))
					}
				</View>
			))
		}
	</ImageBackground>
	)
}

export default Field
