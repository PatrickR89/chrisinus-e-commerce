import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../reducers/reviews_reducer";

import {
  SET_BOOK_IDS,
  SET_BOOK_LIST,
  LOADING_START,
  LOADING_END,
  SET_CURRENT_BOOK,
  SET_REVIEWS_PER_BOOK,
  SET_CURRENT_BOOK_OBJ,
  SET_ERROR
} from "../actions/reviews_actions";

import { useItemsContext } from "../contexts/items_context";
import { useAuthenticationContext } from "../contexts/authentication_context";
import { useErrorReport } from "../hooks/useErrorReport";

const initialState = {
  bookIds: [],
  bookList: [],
  reviewsPerBook: [],
  currentBook: 0,
  currentBookObject: {},
  isLoading: true,
  isError: false,
  reviewsList: []
};

const ReviewsContext = React.createContext();

export const ReviewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { books } = useItemsContext();
  const { clientEngaged } = useAuthenticationContext();
  const errorReport = useErrorReport();

  const fetchReviews = () => {
    const url = "/api/public/reviews";
    const method = "get";
    axios({
      url: url,
      method: method
    })
      .then((resp) => {
        dispatch({ type: SET_BOOK_IDS, payload: resp.data });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR });

        errorReport(error, url, window.location.pathname, method);
      });
  };

  useEffect(() => {
    if (clientEngaged === true) {
      fetchReviews();
    }
  }, [clientEngaged]);

  useEffect(() => {
    dispatch({ type: SET_BOOK_LIST, payload: [state.bookIds, books] });
  }, [state.bookIds, books]);

  const switchBook = (id) => {
    dispatch({ type: LOADING_START });
    dispatch({ type: SET_CURRENT_BOOK, payload: id });
  };

  const bookReviews = (id) => {
    return state.reviewsList.filter((review) => review.book_id === id);
  };
  const getTitle = (id) => {
    return books.find((book) => book.id === id);
  };

  useEffect(() => {
    const findReviews = bookReviews(state.currentBook);
    const chosen = getTitle(state.currentBook);
    dispatch({ type: SET_REVIEWS_PER_BOOK, payload: findReviews });
    dispatch({ type: SET_CURRENT_BOOK_OBJ, payload: chosen });
    setTimeout(() => {
      dispatch({ type: LOADING_END });
    }, 300);
  }, [state.currentBook]);

  return (
    <ReviewsContext.Provider value={{ ...state, switchBook }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviewsContext = () => {
  return useContext(ReviewsContext);
};
