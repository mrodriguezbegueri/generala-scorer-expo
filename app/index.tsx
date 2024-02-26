import Player from '@/components/player/Player';
import PlayerDialog from '@/components/player/PlayerDialog';
import Score from '@/components/score/Score';
import { useGlobalContext } from '@/context/GlobalContext';
import { useState } from 'react';
import { View, XStack, Button, ScrollView } from 'tamagui';

const Index = () => {
  const { state, dispatch } = useGlobalContext();
  const [openModal, setOpenModal] = useState(false);

  const addPlayer = (name: string) => {
    setOpenModal(true);
    // dispatch({
    //   type: 'ADD_PLAYER',
    //   payload: {
    //     name: 'Matias',
    //     score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     id: Math.random(),
    //   },
    // });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <XStack gap={10}>
          <Score />
          {state.players.map((player: any, index: number) => (
            <Player key={index} player={player} />
          ))}
        </XStack>
      </ScrollView>
      <XStack>
          <Button
            backgroundColor="lightblue"
            width={'100%'}
            onPress={() => addPlayer('Matias')}
          >
            Agregar Jugador
          </Button>
      </XStack>
      <PlayerDialog  open={openModal} setOpen={setOpenModal}/>
    </View>
  );
};

export default Index;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
};
