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

import { Menu, PlusCircle } from '@tamagui/lucide-icons';
import { TouchableOpacity } from 'react-native';

const Index = () => {
  const { state, dispatch } = useGlobalContext();
  const [openModal, setOpenModal] = useState(false);
  const [openSelectScoreDialog, setOpenSelectScoreDialog] = useState(false);
  const [index, setIndex] = useState(1);
  const [currentPlayerId, setCurrentPlayerId] = useState<string | null>(null);

  const addPlayer = () => {
    setOpenModal(true);
  };

  const newGame = () => {
    dispatch({ type: 'NEW_GAME' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <XStack gap={10}>
          <Button
            backgroundColor={'$colorTransparent'}
            icon={Menu}
            size={hp('8')}
            style={{ margin: hp('1') }}
          ></Button>
          <Button
            onPress={() => newGame()}
            variant="outlined"
            style={{ margin: hp('1'), flex: 1, backgroundColor: '#666'}}
          >
            Nuevo Juego
          </Button>
        </XStack>
      </View>

      <View style={styles.main}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <XStack gap={10}>
            <Score />
            {state.players.map((player: PlayerType) => (
              <Player
                setCurrentPlayerId={setCurrentPlayerId}
                setIndex={setIndex}
                setOpenSelectScoreModal={setOpenSelectScoreDialog}
                key={player.name}
                player={player}
              />
            ))}
          </XStack>
        </ScrollView>
      </View>
      <View style={styles.footer}>
      <View style={styles.addButtonContainer}>
        <XStack>
          <TouchableOpacity
            onPress={() => addPlayer()}
            style={styles.addButton}
          >
            <PlusCircle size={wp('20')} color="#666" />
          </TouchableOpacity>
        </XStack>
      </View>
        <PlayerDialog open={openModal} setOpen={setOpenModal} />
        <SelectScore
          playerId={currentPlayerId}
          index={index}
          open={openSelectScoreDialog}
          setOpen={setOpenSelectScoreDialog}
        />
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
