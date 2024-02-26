import { createContext, useContext, useMemo, useReducer } from "react";

interface GlobalContextProps {
    state: any;
    dispatch: any;
  }

const GlobalContext = createContext({} as GlobalContextProps);

const initialState = {
    players: []
    };

const playersReducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_PLAYER":
            console.log('ADD_PLAYER', action.payload)
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