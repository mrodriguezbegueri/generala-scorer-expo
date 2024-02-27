import { useGlobalContext } from '@/context/GlobalContext';
import { X } from '@tamagui/lucide-icons';
import { FC } from 'react';
import { Button, Dialog, Input, Label, XStack, YStack } from 'tamagui';
import { useForm, Controller } from 'react-hook-form';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

type Inputs = {
  name: string;
};

const PlayerDialog: FC<Props> = ({ open, setOpen }) => {
  const { dispatch } = useGlobalContext();
  const { control, handleSubmit, reset } = useForm<Inputs>();

  const closeModal = () => {
    setOpen(false);
    reset()
  };

  const addPlayer = (data: Inputs) => {
    dispatch({ type: 'ADD_PLAYER', payload: data.name });
    setOpen(false)
    reset()
  };

  return (
    <Dialog open={open}>
      <Dialog.Portal>
        <Dialog.Content>
          <Dialog.Title>Agregar Jugador</Dialog.Title>
          <YStack style={styles.container}>
            <XStack style={styles.form}>
              <Label width={90} htmlFor="name">
                Nombre
              </Label>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                  autoFocus
                  id= 'name'
                    placeholder="Jugador x"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    flex={1}
                    width={100} 
                  />
                )}
              />
            </XStack>
            <XStack style={styles.addPlayer}>
              <Button
                onPress={handleSubmit(addPlayer)}
                variant="outlined"
                backgroundColor="lightblue"
              >
                Agregar Jugador
              </Button>
            </XStack>
          </YStack>
          <Dialog.Close asChild>
            <Button
              position="absolute"
              top="$3"
              right="$3"
              size="$2"
              circular
              icon={X}
              onPress={closeModal}
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

const styles = {
  container: {
    padding: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    minWidth: 300,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  addPlayer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default PlayerDialog;
