import React, { createContext, ReactNode, useCallback, useContext, useReducer } from 'react';
import { contextReducer, InFoViewActions } from './InfoViewReducer';

export type InfoViewData = {
  error: string;
  displayMessage: string;
  loading: boolean;
};

export type InfoViewActions = {
  fetchStart: () => void;
  fetchSuccess: () => void;
  fetchError: (error: string) => void;
  showMessage: (displayMessage: string) => void;
  clearInfoView: () => void;
};

export const ContextState: InfoViewData = {
  loading: false,
  error: '',
  displayMessage: '',
};

const InfoViewContext = createContext<InfoViewData>(ContextState);
const InfoViewActionsContext = createContext<InfoViewActions>({
  fetchStart: () => {},
  fetchSuccess: () => {},
  fetchError: () => {},
  showMessage: () => {},
  clearInfoView: () => {},
});

export const useInfoViewContext = () => useContext(InfoViewContext);
export const useInfoViewActionsContext = () => useContext(InfoViewActionsContext);

type InfoViewContextProviderProps = {
  children: ReactNode;
};
const InfoViewContextProvider: React.FC<InfoViewContextProviderProps> = (props) => {
  const [state, dispatch] = useReducer(contextReducer, ContextState, () => ContextState);

  const fetchStart = useCallback(() => {
    dispatch({ type: InFoViewActions.FETCH_STARTS });
  }, []);

  const fetchSuccess = useCallback(() => {
    dispatch({ type: InFoViewActions.FETCH_SUCCESS });
  }, []);

  const fetchError = (error: string) => {
    dispatch({ type: InFoViewActions.SET_ERROR, payload: error });
  };

  const showMessage = (displayMessage: string) => {
    dispatch({ type: InFoViewActions.SET_MESSAGE, payload: displayMessage });
  };

  const clearInfoView = () => {
    dispatch({ type: InFoViewActions.CLEAR_INFOVIEW });
  };

  return (
    <InfoViewContext.Provider value={state}>
      <InfoViewActionsContext.Provider
        value={{
          fetchStart,
          fetchSuccess,
          fetchError,
          showMessage,
          clearInfoView,
        }}
      >
        {props.children}
      </InfoViewActionsContext.Provider>
    </InfoViewContext.Provider>
  );
};

export default InfoViewContextProvider;
