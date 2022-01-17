import data from "./components/Data/Data";
import Cart from "./components/Cart/Cart";
import "./App.css";
import Products from "./components/Products/Products";
import { CartProvider } from "react-use-cart";
import Header from "./components/Header/Header";

function App() {
  const { productList } = data;

  return (
    <div>
      <Header />
      <CartProvider>
        <div className="main-content-wrapper">
        <Products productList={productList} />
        <Cart />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
