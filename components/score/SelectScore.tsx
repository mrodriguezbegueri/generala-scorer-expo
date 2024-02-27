import { Adapt, Button, Dialog, Sheet, Text } from 'tamagui';
import { FC } from 'react';
import { GAME_VALUES } from '@/constants/GameValues';
import { useGlobalContext } from '@/context/GlobalContext';


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
        console.log('value selectScore', value)
        console.log('playerId selectScore', playerId)
        if (playerId) {
            dispatch({ type: 'ADD_SCORE', payload: { name: playerId, index, score: value } });
            setOpen(false);
        }
    }

  return (
    <Dialog open={open} modal>
      <Adapt when="sm" platform="touch">
        <Sheet onOpenChange={(open: boolean) => closeModal(open)}  animation="quick" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$4">
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
                        <Button key={value} onPress={() => updateScore(value)} variant="outlined" backgroundColor="lightblue">
                            <Text>{value}</Text>
                        </Button>
                    )
                })
            }
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

export default SelectScore;
