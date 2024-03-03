import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Player } from '@/context/GlobalContext';
import { FC } from 'react';
import { Button, SizableText, View, YStack } from 'tamagui';

import Colors from '@/constants/Colors';

interface Props {
  player: Player;
  setOpenSelectScoreModal: (open: boolean) => void;
  setIndex: (index: number) => void;
  setCurrentPlayerId: (id: string) => void;
  openEditPlayer: (player: Player) => void;
}

const PlayerPage: FC<Props> = ({
  player,
  setOpenSelectScoreModal,
  setIndex,
  setCurrentPlayerId,
  openEditPlayer
}) => {
  const openSelectScoreModal = (index: number) => {
    if (index === 11) return;
    setCurrentPlayerId(player.name);
    setIndex(index);
    setOpenSelectScoreModal(true);
  };

  const getScoreColor = (score: number | string) => {
    if (score === 0) return Colors.light.gameButtons;

    if (score === 'x') return 'lightcoral';

    return 'lightgreen';
  }

  const getTotalScore = () => {
      return player.score.reduce((acc, score) => {
        if (typeof score === 'string') {
          return acc + 0;
        }
        return acc + score;
      }, 0);
  }

  const testEdit = () => {
    openEditPlayer(player)
  }

  return (
    <YStack>
    <View style={styles.player}>
      <Button style={styles.button} onPress={testEdit}>
      <SizableText adjustsFontSizeToFit   style={styles.buttonText}>{player.name}</SizableText>
      </Button>
      {player.score.map((score, index) => (
        <Button
        style={[styles.button, {backgroundColor: getScoreColor(score)}]}
          onPress={() => openSelectScoreModal(index)}
          key={index}
        >
          <SizableText style={styles.buttonText} size={'$1'}>{score}</SizableText>
        </Button>
      ))}
      <Button style={styles.button}>
      <SizableText style={styles.buttonText} size={'$1'}>{getTotalScore()}</SizableText>
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
    height: hp('4.5'),
    width: wp('20%'),
  },
  buttonText: {
    fontSize: hp('1.5'),
  }
}

export default PlayerPage;
