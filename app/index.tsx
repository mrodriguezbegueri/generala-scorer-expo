import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Player from '@/components/player/Player';
import PlayerDialog from '@/components/player/PlayerDialog';
import Score from '@/components/score/Score';
import SelectScore from '@/components/score/SelectScore';
import {
  Player as PlayerType,
  useGlobalContext,
} from '@/context/GlobalContext';
import { useState } from 'react';
import { View, XStack, Button, ScrollView } from 'tamagui';

import { PlusCircle } from '@tamagui/lucide-icons';
import { TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';

const Index = () => {
  const { state, dispatch } = useGlobalContext();
  const [openModal, setOpenModal] = useState(false);
  const [openSelectScoreDialog, setOpenSelectScoreDialog] = useState(false);
  const [index, setIndex] = useState(1);
  const [currentPlayerId, setCurrentPlayerId] = useState<string | null>(null);
  const [editPlayer, setEditPlayer] = useState<PlayerType | null>(null);

  const addPlayer = () => {
    setOpenModal(true);
  };

  const newGame = () => {
    dispatch({ type: 'NEW_GAME' });
  };

  const openEditPlayer = (player: PlayerType) => {
    setEditPlayer(player)
    setOpenModal(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <XStack gap={10}>
          <Button
            onPress={() => newGame()}
            variant="outlined"
            style={{ margin: hp('1'), flex: 1, backgroundColor: Colors.light.gameButtons}}
          >
            Nuevo Juego
          </Button>
        </XStack>
      </View>

      <View style={styles.main}>
        <ScrollView overScrollMode='auto' showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <XStack gap={10}>
            <Score />
            {state.players.map((player: PlayerType) => (
              <Player
              openEditPlayer = {openEditPlayer}
                setCurrentPlayerId={setCurrentPlayerId}
                setIndex={setIndex}
                setOpenSelectScoreModal={setOpenSelectScoreDialog}
                key={player.name}
                player={player}
              />
            ))}
          </XStack>
        </ScrollView>
        </ScrollView>
      </View>
      <View style={styles.footer}>
      <View style={styles.addButtonContainer}>
        <XStack>
          <TouchableOpacity
            onPress={() => addPlayer()}
            style={styles.addButton}
          >
            <PlusCircle size={wp('20')} color={'#B4CCFF'} />
          </TouchableOpacity>
        </XStack>
      </View>
        <SelectScore
          playerId={currentPlayerId}
          index={index}
          open={openSelectScoreDialog}
          setOpen={setOpenSelectScoreDialog}
        />
        <View>
      <PlayerDialog editPlayer={editPlayer} open={openModal} setOpen={setOpenModal} setEditPlayer={setEditPlayer} />
        </View>
      </View>
      
    </View>
  );
};

export default Index;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFACD',
  },
  header: {
    flex: 0,
    // backgroundColor: 'lightgrey',
  },
  main: {
    padding: hp('2'),
    flex: 10,
    // backgroundColor: 'lightgrey',
    display: 'flex',
    flexDirextion: 'row',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightgrey',
  },
  actionsButton: {
    // flex: 1,
    // backgroundColor: 'lightblue',
  },
  addButtonContainer: {
    // position: 'absolute',
    bottom: hp('5'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: hp('10'),
    height: hp('10'),
    borderRadius: 30,
    elevation: 100,
  }
};
