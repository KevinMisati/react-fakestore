
import './App.css';
import Header from "./Components/Header"
import AllProducts from "./Components/AllProducts"
import { GlobalProvider } from "./context/GlobalProvider"
import DisplayProducts from "./Components/DispalyProducts"
import Footer from "./Components/Footer"

function App() {
  return (
    <GlobalProvider>
    <div className="App">
     <Header />
        <AllProducts />
        <DisplayProducts />
        <Footer />
      </div>
    </GlobalProvider>
  )
}

export default App;
