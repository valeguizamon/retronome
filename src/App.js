import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import About from "./pages/About";
import Error404 from "./pages/Error404";
import Cart from "./pages/Cart";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

import CartContextProvider from "./context/CartContext";

const App = () => {

  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/home" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );

}

export default App;
