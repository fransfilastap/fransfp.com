import { useReducer } from "react";
import { AppContext, TAppState } from "./app-context";

interface IAppAction {
    type: string;
    payload?: any;
}

const initialState: TAppState = {
    loading: false,
    menuOpen: false,
    language: "en",
    setLoading: () => { },
    setLanguage: () => { },
    toggleMenu: () => { },
};

const fixBodyScroll = (open: boolean) => {
    if (open) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

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
        case "TOGGLE_MENU":
            fixBodyScroll(!state.menuOpen);
            return {
                ...state,
                menuOpen: !state.menuOpen,
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
                menuOpen: state.menuOpen,
                language: state.language,
                setLoading: (loading: boolean) => dispatch({ type: "SET_LOADING", payload: loading }),
                setLanguage: (language: string) => dispatch({ type: "SET_LANGUAGE", payload: language }), 
                toggleMenu: () => dispatch({ type: "TOGGLE_MENU" }),
            }
        }>
            {children}
        </AppContext.Provider>
    );
}

