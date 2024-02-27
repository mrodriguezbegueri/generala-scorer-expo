import { Player } from '@/context/GlobalContext';
import { FC } from 'react';
import { Button, Text, YStack } from 'tamagui';

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
    <YStack gap={4} justifyContent="center">
      <Button backgroundColor="lightblue" width={90}>
        <Text>{player.name}</Text>
      </Button>
      {player.score.map((score, index) => (
        <Button
          onPress={() => openSelectScoreModal(index)}
          key={index}
          backgroundColor="lightblue"
          width={90}
        >
          <Text>{score}</Text>
        </Button>
      ))}
      <Button backgroundColor="lightblue" width={90}>
        <Text>{player.score.reduce((acc, score) => acc + score, 0)}</Text>
      </Button>
    </YStack>
  );
};

export default PlayerPage;
