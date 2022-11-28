import { createContext, useReducer } from "react";
import { PlacesInfo } from "../@types/app.types";

type ReducersTypes = { state: State; dispatch: Dispatch };

export const Reducers = createContext<ReducersTypes | undefined>(undefined);

export type State = typeof initState | any;
export type Dispatch = (action: Action) => void;

const initState = {
  places: [],
  // childClicked: "",
};

export type Action = {
  type: "SET_PLACES";
  // | "CHILD_CHANGED";
  payload: PlacesInfo | string;
};

const reducerFunc = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_PLACES":
      return {
        ...state,
        places: action.payload,
      };
    // case "CHILD_CHANGED":
    //   return { ...state, childClicked: action.payload };
    default:
      return initState;
  }
};

type ReducersProviderProps = {
  children: React.ReactNode;
};

export const ReducersProvider = ({ children }: ReducersProviderProps) => {
  const [state, dispatch] = useReducer(reducerFunc, initState);

  return (
    <Reducers.Provider value={{ state, dispatch }}>
      {children}
    </Reducers.Provider>
  );
};
