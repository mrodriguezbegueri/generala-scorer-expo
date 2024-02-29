import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Player } from '@/context/GlobalContext';
import { FC } from 'react';
import { Button, Text, View, YStack } from 'tamagui';

interface Props {
  player: Player;
  setOpenSelectScoreModal: (open: boolean) => void;
  setIndex: (index: number) => void;
  setCurrentPlayerId: (id: string) => void;
}

const PlayerPage: FC<Props> = ({
  player,
  setOpenSelectScoreModal,
  setIndex,
  setCurrentPlayerId,
}) => {
  const openSelectScoreModal = (index: number) => {
    if (index === 11) return;
    setCurrentPlayerId(player.name);
    setIndex(index);
    setOpenSelectScoreModal(true);
  };

  return (
    <View>
      <Button style={styles.button} backgroundColor="lightblue" width={90}>
        <Text>{player.name}</Text>
      </Button>
      {player.score.map((score, index) => (
        <Button
        style={styles.button}
          onPress={() => openSelectScoreModal(index)}
          key={index}
          backgroundColor="lightblue"
          width={90}
        >
          <Text>{score}</Text>
        </Button>
      ))}
      <Button style={styles.button} backgroundColor="lightblue" width={90}>
        <Text>{player.score.reduce((acc, score) => acc + score, 0)}</Text>
      </Button>
      </View>
  );
};

const styles = {
  button: {
    backgroundColor: 'grey',
    height: hp('4.5'),
    width: wp('25%'),
    fontSize: hp('1.5'),
  }
}

export default PlayerPage;
