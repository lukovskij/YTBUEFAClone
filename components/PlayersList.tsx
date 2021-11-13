import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Player } from '../types'
import PlayerListItem from './PlayerListItem'
import { useRecoilValue} from 'recoil'
import { filterSelector } from '../atoms/Players'


const PlayersList = () => {
	const players = useRecoilValue(filterSelector)

	return (<BottomSheetFlatList data={players} renderItem={({item}) => <PlayerListItem player={item as Player}/>}/>)
}

export default PlayersList
