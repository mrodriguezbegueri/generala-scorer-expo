import { createContext, useContext, useMemo, useReducer } from "react";

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
    players: []
};

const playersReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_PLAYER":
            return {
                ...state,
                players: [...state.players, action.payload]
            };
        case "REMOVE_PLAYER":
            return {
                ...state,
                players: state.players.filter(
                    (player: any) => player.name !== action.payload
                )
            };
        default:
            return state;
    }
}


export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(playersReducer, initialState);

    const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext= () => useContext(GlobalContext);