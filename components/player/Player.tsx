import { Player } from '@/context/GlobalContext';
import { FC } from 'react';
import { Button, Text, YStack } from 'tamagui';

interface Props {
    player: Player;
  }

const PlayerPage: FC<Props> = ({ player }) => {
  return (
    <YStack gap={4} justifyContent="center">
      <Button backgroundColor="lightblue" width={90}>
        <Text>{player.name}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        <Text>{player.score[0]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        <Text>{player.score[1]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[2]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[3]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[4]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[5]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[6]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[7]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[8]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[9]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[10]}</Text>
      </Button>
      <Button backgroundColor="lightblue" width={90}>
      <Text>{player.score[player.score.length - 1]}</Text>
      </Button>
    </YStack>
  );
};

export default PlayerPage;
