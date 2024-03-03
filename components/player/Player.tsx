import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Player } from '@/context/GlobalContext';
import { FC } from 'react';
import { Button, Text, View, YStack } from 'tamagui';

import Colors from '@/constants/Colors';

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
    <YStack>
    <View style={styles.player}>
      <Button style={styles.button}>
        <Text>{player.name}</Text>
      </Button>
      {player.score.map((score, index) => (
        <Button
        style={styles.button}
          onPress={() => openSelectScoreModal(index)}
          key={index}
        >
          <Text>{score}</Text>
        </Button>
      ))}
      <Button style={styles.button}>
        <Text>{player.score.reduce((acc, score) => acc + score, 0)}</Text>
      </Button>
      </View>
      </YStack>
  );
};


const styles = {
  player: {
    flex: 1,
    gap: 5
  },
  button: {
    backgroundColor: Colors.light.gameButtons,
    height: hp('4.5'),
    width: wp('25%'),
    fontSize: hp('1.5'),
  }
}

// const styles = {
//   button: {
//     backgroundColor: 'grey',
//     height: hp('4.5'),
//     width: wp('25%'),
//     fontSize: hp('1.5'),
//   }
// }

export default PlayerPage;
