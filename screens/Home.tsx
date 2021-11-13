import * as React from 'react';
import { StyleSheet, SafeAreaView, Text, Pressable } from 'react-native';

import {  RootTabScreenProps } from '../types';
import Field from '../components/Field';
import TeamStats from '../components/TeamStats';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import Filters from '../components/Filters';
import PlayersList from '../components/PlayersList';
import SuspenseContainer from '../components/SuspenceContainer';



export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  const playersBottomSheet = React.useRef<BottomSheet>(null)
  const filterBottomSheet = React.useRef<BottomSheet>(null)
  // variables
  const snapPoints = React.useMemo(() => [0, '50%'], []);
  
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const vewPlayers = () => {
    console.log('players')
    playersBottomSheet.current?.expand()
  }

  const viewFilters = () => {
    filterBottomSheet.current?.expand()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats/>
      <Field />
      <Pressable onPress={vewPlayers} style={styles.button}>
        <Text style={styles.buttonCaption}>
          View Players
        </Text>
      </Pressable>
      <BottomSheet
        ref={playersBottomSheet}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Pressable onPress={viewFilters} style={styles.button}>
          <Text style={styles.buttonCaption}>
            View Filters
          </Text>
        </Pressable>
        <SuspenseContainer>
          <PlayersList/>
        </SuspenseContainer>
      </BottomSheet>
      <BottomSheet
        ref={filterBottomSheet}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
       <Filters/>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#72CC5E'
  },
  button: {backgroundColor: 'red', padding: 10, borderRadius: 50, marginTop: 'auto'},
  buttonCaption: {color: '#fff', fontWeight: 'bold'},

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
