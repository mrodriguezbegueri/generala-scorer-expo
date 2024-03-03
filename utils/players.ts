import { Player } from "@/context/GlobalContext";

export const checkPlayer = (players: Player[], name: string) => {
  return players.find((player: Player) => {
    const newPlayerName = name.replace(/\s/g, '').toLowerCase();
    const playerName = player.name.replace(/\s/g, '').toLowerCase();
    return playerName === newPlayerName;
  });
};