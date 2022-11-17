import { useReducer, createContext, useContext, useRef, useCallback, useEffect } from 'react';
import issueAPI from '../server/api';

const IssueContext = createContext();

const initialState = {
  issues: [],
  page: 1,
  loading: false,
  hasMore: false,
};

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ISSUES':
      return {
        ...state,
        issues: action.issues,
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.loading,
      };
    case 'SET_HAS_MORE':
      return {
        ...state,
        hasMore: action.hasMore,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const IssueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);
  const observer = useRef();

  const lastIssueElementRef = useCallback(
    (node) => {
      if (state.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && state.hasMore) {
          dispatch({ type: 'SET_PAGE', page: state.page + 1 });
        }
      });
      if (node) observer.current.observe(node);
    },
    [state.loading, state.hasMore]
  );

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', loading: true });
    issueAPI
      .getIssues(state.page)
      .then((res) => {
        if (res.data.length === 0) {
          dispatch({ type: 'SET_HAS_MORE', hasMore: false });
          return;
        }
        dispatch({ type: 'SET_ISSUES', issues: [...new Set([...state.issues, ...res.data])] });
        dispatch({ type: 'SET_HAS_MORE', hasMore: true });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: 'SET_LOADING', loading: false });
      });
  }, [state.page]);

  return <IssueContext.Provider value={{ state, dispatch, lastIssueElementRef }}>{children}</IssueContext.Provider>;
};

export const useIssue = () => {
  const context = useContext(IssueContext);
  if (!context) {
    throw new Error('Cannot find IssueProvider');
  }
  return context;
};
