import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import React from 'react';
import { Button, View, YStack } from 'tamagui';

const Score = () => {
  return (
    <YStack>
    <View style={styles.score}> 
      <Button style={styles.button}>
        Juegos
      </Button>
      <Button style={styles.button}>
        1
      </Button>
      <Button style={styles.button}>
        2
      </Button>
      <Button style={styles.button}>
        3
      </Button>
      <Button style={styles.button}>
        4
      </Button>
      <Button style={styles.button}>
        5
      </Button>
      <Button style={styles.button}>
        6
      </Button>
      <Button style={styles.button}>
        Escalera
      </Button>
      <Button style={styles.button}>
        Full
      </Button>
      <Button style={styles.button}>
        Poker
      </Button>
      <Button style={styles.button}>
        Generala
      </Button>
      <Button style={styles.button}>
        Doble
      </Button>
      <Button style={styles.button}>
        Total
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
    backgroundColor: '#666',
    height: hp('4.5'),
    width: wp('25%'),
    fontSize: hp('1.5'),
  }
}


export default Score;
