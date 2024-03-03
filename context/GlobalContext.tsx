import { createContext, useContext, useMemo, useReducer } from 'react';

interface GlobalContextProps {
  state: any;
  dispatch: any;
}

export interface Player {
  name: string;
  score: number[];
  id: number;
}

interface GameState {
  players: Player[];
}

const GlobalContext = createContext({} as GlobalContextProps);

const initialState: GameState = {
  players: [],
};

const playersReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_PLAYER': {
      const player = {
        name: action.payload,
        score: new Array(11).fill(0),
        id: Math.random(),
      };
      return {
        ...state,
        players: [...state.players, player],
      };
    }
    case 'ADD_SCORE': {
      const { name, index, score } = action.payload;
      const players = state.players.map((player: any) => {
        if (player.name === name) {
          player.score[index] = score;
        }
        return player;
      });
      return {
        ...state,
        players,
      };
    }
    case 'REMOVE_PLAYER':
      return {
        ...state,
        players: state.players.filter(
          (player: any) => player.name !== action.payload
        ),
      };
      case 'NEW_GAME':
        return {
          ...state,
          players: []
        };
        case 'EDIT_PLAYER': {
          const { name, newName } = action.payload;
          const players = state.players.map((player: any) => {
            if (player.name === name) {
              player.name = newName;
            }
            return player;
          });
          return {
            ...state,
            players,
          };
        }
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(playersReducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
