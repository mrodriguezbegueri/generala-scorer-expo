import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import React from 'react';
import { Button, SizableText, View, YStack } from 'tamagui';
import Colors from '@/constants/Colors';

const Score = () => {
  return (
    <YStack>
    <View style={styles.score}> 
      <Button style={styles.button}>
      <SizableText size={'$1'}>{'Juegos'}</SizableText>
      </Button>
      <Button style={styles.button}>
        <SizableText size={'$1'}>1</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>2</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>3</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>4</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>5</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>6</SizableText>
      </Button>
      <Button style={styles.button}>
        <SizableText size={'$1'}>Escalera</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>Full</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>Poker</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>Generala</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>Doble</SizableText>
      </Button>
      <Button style={styles.button}>
      <SizableText size={'$1'}>Total</SizableText>
      </Button>  
    </View>
    </YStack>
  );
};

const styles = {
  score: {
    flex: 1,
    gap: 5
  },
  button: {
    backgroundColor: Colors.light.gameButtons,
    height: hp('4.5'),
    width: wp('22%'),
    fontSize: hp('1.5'),
  }
}


export default Score;
