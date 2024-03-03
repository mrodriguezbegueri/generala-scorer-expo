import { Adapt, Button, Dialog, Sheet, Text, View } from 'tamagui';
import { FC } from 'react';
import { GAME_VALUES } from '@/constants/GameValues';
import { useGlobalContext } from '@/context/GlobalContext';
import Colors from '@/constants/Colors';


interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    index: number,
    playerId: string | null
}

const SelectScore: FC<Props> = ({ open, setOpen, index, playerId }) => {
    const { dispatch } = useGlobalContext();

    const closeModal = (open: boolean) => {
        setOpen(open);
    };
    
    const updateScore = (value: number) => {
        if (playerId) {
            dispatch({ type: 'ADD_SCORE', payload: { name: playerId, index, score: value } });
            setOpen(false);
        }
    }

  return (
    <View>
    <Dialog open={open} modal >
      <Adapt when="sm" platform="touch">
        <Sheet onOpenChange={(open: boolean) => closeModal(open)}  animation="quick" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$4" style={styles.container}>
            <Adapt.Contents />
          </Sheet.Frame>
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Content>
          <Dialog.Title>Seleccionar puntaje</Dialog.Title>
            {
                GAME_VALUES[`${index + 1}`].values.map((value) => {
                    return (
                        <Button key={value} onPress={() => updateScore(value)} variant="outlined" style={styles.playerButton}>
                            <Text>{value}</Text>
                        </Button>
                    )
                })
            }
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFACD',
  },
  playerButton: {
    backgroundColor: Colors.light.gameButtons,
  }
}

export default SelectScore;
