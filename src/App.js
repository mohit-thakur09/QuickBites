import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import React, { useEffect, useState } from 'react'
import { Provider } from '../src/Components/context';
import './App.css';

function App() {
  let [userName, setUserName] = useState('');
  let [userCart, setuserCart] = useState([]);

  useEffect(() => {
    for (let i = 0; i < window.localStorage.length; i++) {
      let user = JSON.parse(window.localStorage[window.localStorage.key(i)]);
      if (user.status === 'Login') {
        setUserName(user.uname);
        if (user.cart) {
          setuserCart(user.cart)
        }
      }
    }
  }, [userName])

  return (
    <div className="App">
      <header className="App-header">
        <Provider value={{ userName }}>
          <Navbar />
        </Provider>
      </header>

      <main>
        <Provider value={{ setUserName, setuserCart }}>
          <AllRoutes usercart={userCart} userName={userName} />
        </Provider>
      </main>

      <Footer />
    </div>
  );
}

export default App;
