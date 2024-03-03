import { useGlobalContext } from '@/context/GlobalContext';
import { X } from '@tamagui/lucide-icons';
import { FC, useEffect, useState } from 'react';
import { Button, Dialog, Input, Label, SizableText, Text, XStack, YStack } from 'tamagui';
import { useForm, Controller } from 'react-hook-form';

import Colors from '@/constants/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useKeyboard } from '@/hooks/getKeyBoardHeight';
import { checkPlayer } from '@/utils/players';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

type Inputs = {
  name: string;
};

const PlayerDialog: FC<Props> = ({ open, setOpen }) => {
  const { dispatch, state } = useGlobalContext();
  const { control, handleSubmit, reset, formState: { errors } } = useForm<Inputs>()
  const [dialogTop, setDialogTop] = useState(heightPercentageToDP('30'));
  const keyboardHeight = useKeyboard()

  const closeModal = () => {
    setOpen(false);
    reset()
  };

  const addPlayer = (data: Inputs) => {
    const existsPlayer = checkPlayer(state.players, data.name)

    if (existsPlayer !== undefined) {
      alert('El jugador ya existe')
      return
    }

    dispatch({ type: 'ADD_PLAYER', payload: data.name });
    setOpen(false)
    reset()
  };

  useEffect(() => {
    if (keyboardHeight > 0) {
      setDialogTop(dialogTop - (keyboardHeight * 0.1))
    } else {
      setDialogTop(heightPercentageToDP('30'))
    }
  }
  , [])


  return (
    <Dialog open={open}>
      <Dialog.Portal>
        <Dialog.Content style={[styles.dialogContent, {top: dialogTop, position: 'absolute'} ]}>
          <Dialog.Title>Agregar Jugador</Dialog.Title>
          <YStack style={styles.container}>
            <XStack style={styles.form}>
              <Label style={{ marginRight: widthPercentageToDP('5') }} htmlFor="name">
                Nombre
              </Label>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                  id= 'name'
                    placeholder="Jugador x"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    flex={1}
                    backgroundColor={'#FFFACD'}
                  />
                )}
              />
            </XStack>
              {errors.name && <SizableText size={'$2'} style={{ alignSelf: 'center' }} color="red"> </SizableText>}
            <XStack style={styles.addPlayer}>
              <Button
                onPress={handleSubmit(addPlayer)}
                variant="outlined"
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
              size="$3"
              circular
              icon={X}
              onPress={closeModal}
              backgroundColor={Colors.light.gameButtons}
            />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

const styles = {
  dialogContent: {
    backgroundColor: '#FFFACD',
  },
  container: {
    padding: heightPercentageToDP('2'),
    marginTop: heightPercentageToDP('5'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    minWidth: widthPercentageToDP('75'),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  addPlayer: {
    marginTop: heightPercentageToDP('4'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.gameButtons,
  },
};

export default PlayerDialog;
