import { useReducer } from "react";
import { AppContext, TAppState } from "./app-context";

interface IAppAction {
    type: string;
    payload?: any;
}

const initialState: TAppState = {
    loading: false,
    language: "en",
    setLoading: () => { },
    setLanguage: () => { },
};

const appReducer = (state: TAppState, action: IAppAction): TAppState => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
}


export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [state, dispatch] = useReducer(appReducer, initialState);


    return (
        <AppContext.Provider value={
            {
                loading: state.loading,
                language: state.language,
                setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", payload: loading }),
                setLanguage: (language: string) => dispatch({ type: "SET_LANGUAGE", payload: language }),        
            }
        }>
            {children}
        </AppContext.Provider>
    );
}

