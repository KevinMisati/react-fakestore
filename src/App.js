
import './App.css';
import Header from "./Components/Header"
import Home from "./Pages/Home"
import { GlobalProvider } from "./context/GlobalProvider"
import Footer from "./Components/Footer"
import Cart from "./Pages/Cart"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App () {

  const showProductsInCart = (products) => {
    const length = products.length
  }
  return (
    <GlobalProvider>
    <div className="App">
        <Header />
        <Switch>
          
          <Route path='/cart' component={Cart} />
          <Route path='/' component={Home} />
        </Switch>
        
       
        <Footer />
      </div>
    </GlobalProvider>
  )
}

export default App;
