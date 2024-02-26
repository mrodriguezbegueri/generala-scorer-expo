import { useGlobalContext } from '@/context/GlobalContext';
import { View, Text, XStack, Button, YStack, Label, ScrollView } from 'tamagui';

const Index = () => {
  const { state, dispatch } = useGlobalContext();

  const addPlayer = (name: string) => {
    dispatch({ type: 'ADD_PLAYER', payload: name });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <XStack  gap={10} >
          <YStack gap={4} justifyContent="center">
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
              Doble Generala
            </Button>
          </YStack>
          <YStack gap={4} justifyContent="center">
            <Button backgroundColor="lightblue" width={90}>
              Player 1
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
              20
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              30
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              40
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
          </YStack>
          <YStack gap={4} justifyContent="center">
            <Button backgroundColor="lightblue" width={90}>
              Player 2
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
              20
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              30
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              40
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
          </YStack>
          <YStack gap={4} justifyContent="center">
            <Button backgroundColor="lightblue" width={90}>
              Player 2
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
              20
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              30
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              40
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
          </YStack>
          <YStack gap={4} justifyContent="center">
            <Button backgroundColor="lightblue" width={90}>
              Player 2
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
              20
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              30
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              40
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
          </YStack>
          <YStack gap={4} justifyContent="center">
            <Button backgroundColor="lightblue" width={90}>
              Player 2
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
              20
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              30
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              40
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
            <Button backgroundColor="lightblue" width={90}>
              x
            </Button>
          </YStack>
        </XStack>
      </ScrollView>
      <XStack>
        <Button backgroundColor="lightblue" width={'100%'} onPress={() => addPlayer('Matias')}>
          Agregar Jugador
        </Button>
      </XStack>
    </View>
  );
};

export default Index;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
}


