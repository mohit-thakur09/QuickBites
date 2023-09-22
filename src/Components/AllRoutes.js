import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductItems from './ProductItems';
import ErrorPage from './ErrorPage';
import ItemPizzaDetail from './ItemPizzaDetail';
import React, { useEffect, useState } from 'react'
import UsersCart from './UsersCart'
import Contect from './Contect';
import Login from './Login';
import { Provider } from './context';

const AllRoutes = (props) => {
  let [cartData, setCartData] = useState([]);
  let loc = useLocation();

  useEffect(() => {
    if (props.usercart) {
      setCartData(props.usercart);
    }
  }, [props.usercart])

  useEffect(() => {
    if (props.userName && cartData.length > 0) {
      let userData = window.localStorage[props.userName];
      userData = JSON.parse(userData);
      if (userData.cart.length > 0) {
        setCartData(userData.cart)
      }
      window.localStorage.setItem(props.userName, JSON.stringify(userData));
    }
  }, [props.userName])

  useEffect(() => {
    if (props.userName && cartData.length > 0) {
      let userData = window.localStorage[props.userName];
      userData = JSON.parse(userData);
      userData.cart = cartData;
      window.localStorage.setItem(props.userName, JSON.stringify(userData));
    }
  }, [cartData])

  let itemSubRoutes = () => {
    if (loc.pathname.includes("p1")) {
      return <Provider value={{ cartData, setCartData }}>
        <ItemPizzaDetail />
      </Provider>
    }
  }

  return (
    <>
      <Routes>
        <Route path="/quick-bites" element={<Home />}></Route>
        <Route path="/products" element={<Provider value={{ cartData, setCartData }}><Products /></Provider>}></Route>
        <Route path="/products/:itemName/:ele" element={<Provider value={{ cartData, setCartData }}><ProductItems /></Provider>}></Route>
        <Route path="/products/:itemName/:ele/:item_id" element={itemSubRoutes()}></Route>
        <Route path="/contect" element={<Contect />}></Route>
        <Route path="/login" element={<Login isLogin={props.userName} cartData={cartData} />}> </Route>
        <Route path="/cart" element={<Provider value={{ cartData, setCartData }}><UsersCart /></Provider>}></Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default AllRoutes
