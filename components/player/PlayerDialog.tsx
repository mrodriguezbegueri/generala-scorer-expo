import { X } from '@tamagui/lucide-icons'
import { FC } from 'react';
import {
  Button,
  Dialog,
  Form,
  Input,
  Label,
  XStack,
  YStack,
} from 'tamagui';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PlayerDialog: FC<Props> = ({ open, setOpen }) => {
  const closeModal = () => {
    setOpen(false)
  };

  return (
    <Dialog open={open}>
      <Dialog.Portal>
        <Dialog.Content >
          <Dialog.Title>Agregar Jugador</Dialog.Title>
          <YStack style={styles.container}>
            <Form onSubmit={()=> console.log('add')}>
              <XStack style={styles.form}>
                <Label width={90} htmlFor="name">
                  Nombre
                </Label>
                <Input flex={1} id="name" width={100} />
              </XStack>
              <XStack style={styles.addPlayer}>
                <Button backgroundColor="lightblue">Agregar Jugador</Button>
              </XStack>
            </Form>
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
