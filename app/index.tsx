import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import Player from "@/components/player/Player";
import PlayerDialog from "@/components/player/PlayerDialog";
import Score from "@/components/score/Score";
import SelectScore from "@/components/score/SelectScore";
import { Player as PlayerType, useGlobalContext } from "@/context/GlobalContext";
import { useState } from "react";
import { View, XStack, Button, ScrollView, YStack } from "tamagui";

const Index = () => {
  const { state, dispatch } = useGlobalContext();
  const [openModal, setOpenModal] = useState(false);
  const [openSelectScoreDialog, setOpenSelectScoreDialog] = useState(false);
  const [index, setIndex] = useState(1);
  const [currentPlayerId, setCurrentPlayerId] = useState<string | null>(null);

  const addPlayer = () => {
    setOpenModal(true);
  };

  const newGame = () => {
    console.log("new game");
    dispatch({ type: "NEW_GAME" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.main}>
          <XStack>
            <YStack>
            <Score />
            </YStack>
            {state.players.map((player: PlayerType) => (
              <Player
                setCurrentPlayerId={setCurrentPlayerId}
                setIndex={setIndex}
                setOpenSelectScoreModal={setOpenSelectScoreDialog}
                key={player.name}
                player={player}
              />
            ))}
          </XStack>
      </View>
      <View style={styles.footer}>
        <PlayerDialog open={openModal} setOpen={setOpenModal} />
        <Button backgroundColor="lightblue" width={"50%"} onPress={() => addPlayer()} variant="outlined">
            Agregar Jugador
          </Button>
      </View>
    </View>
    // {/* <ScrollView horizontal>
    //     <XStack gap={10}>
    //       {state.players.map((player: PlayerType) => (
    //         <Player
    //           setCurrentPlayerId={setCurrentPlayerId}
    //           setIndex={setIndex}
    //           setOpenSelectScoreModal={setOpenSelectScoreDialog}
    //           key={player.name}
    //           player={player}
    //         />
    //       ))}
    //     </XStack>
    //   </ScrollView> */}
    // {/* <YStack>
    //     <XStack style={styles.addPlayerButton}>
    //       <Button
    //         backgroundColor="lightblue"
    //         width={'50%'}
    //         onPress={() => addPlayer()}
    //         variant="outlined"
    //       >
    //         Agregar Jugador
    //       </Button>
    //       <Button
    //         backgroundColor="lightblue"
    //         width={'50%'}
    //         onPress={() => newGame()}
    //         variant="outlined"
    //       >
    //         Nuevo Juego
    //       </Button>
    //     </XStack>
    //   </YStack>
    //   <PlayerDialog open={openModal} setOpen={setOpenModal} /> */}
    // {/* <View>
    //   <SelectScore
    //     playerId={currentPlayerId}
    //     index={index}
    //     open={openSelectScoreDialog}
    //     setOpen={setOpenSelectScoreDialog}
    //   />
    // </View> */}
  );
};

export default Index;

const styles = {
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "tomato",
  },
  main: {
    flex: 8,
    backgroundColor: "lightgreen",
    display: "flex",
    flexDirextion: "row",
  },
  footer: {
    flex: 1,
    backgroundColor: "lightblue",
  },
};
