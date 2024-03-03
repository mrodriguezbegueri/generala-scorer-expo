import { Player } from "@/context/GlobalContext";

export const checkPlayer = (players: Player[], name: string) => {
  return players.find((player: any) => player.name === name);
};
