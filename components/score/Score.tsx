import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { GAME_VALUES } from '@/constants/GameValues';
import React from 'react';
import { Button, Text, View, YStack } from 'tamagui';

const Score = () => {
  return (
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
  );
};

const styles = {
  score: {
    padding: 20,
    flex: 1,
    gap: 5
  },
  button: {
    backgroundColor: 'grey',
    height: hp('4.5'),
    width: wp('25%'),
    fontSize: hp('1.5'),
  }
}


export default Score;
