import { GAME_VALUES } from '@/constants/GameValues';
import React from 'react';
import { Button, Text, YStack } from 'tamagui';

const Score = () => {
  return (
    <YStack gap={4} justifyContent="center">
      {/* {
        Object.keys(GAME_VALUES).map((key) => {
          return (
            <Button key={key} backgroundColor="lightblue" width={90}>
              <Text>{GAME_VALUES[key].label}</Text>
            </Button>
          );
        })
      } */}
      <Button backgroundColor="lightblue" width={90}>
        Juegos
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        1
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        2
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        3
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        4
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        5
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        6
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        Escalera
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        Full
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        Poker
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        Generala
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        Doble
      </Button>
      <Button backgroundColor="lightblue" width={90}>
        Total
      </Button>
    </YStack>
  );
};


export default Score;
