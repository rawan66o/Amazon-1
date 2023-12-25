import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { useAuth } from "./context/GlobalState";
import { auth } from "./firebase";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const App = () => {
  const { dispatch } = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((authUSer) => {
      if (authUSer) {
        dispatch({ type: "SET_USER", user: authUSer });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
                <Payment />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
