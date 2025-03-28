import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";
const API = "http://localhost:3000/mentors";
console.log()

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
// getSingleProduct, isSingleLoading, singleProduct

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // const getMentors = async (url) => {
  //   dispatch({ type: "SET_LOADING" });
  //   try {
  //     const res = await axios.get(url);
  //     const products = await res.data;
  //     console.log(products);
  //     dispatch({ type: "SET_API_DATA", payload: products });
  //   } catch (error) {
  //     dispatch({ type: "API_ERROR" });
  //   }
  // };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    console.log("YOYOYOYO", url);
    // dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      console.log("555555555555555555",res);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    console.log("BBBAAAAPPPPPP");
    getProducts(API);
    getSingleProduct(API);
    // getMentors(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };