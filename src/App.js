import Navbar from "./layout/components/navbar/navbar";
import Homepage from "./layout/pages/homepage/homepage";
import Footer from "./layout/components/footer/footer";
import Cart from "./layout/pages/Cart/cart";
import About from "./layout/pages/about/about";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
    //  </BrowserRouter>
  );
}

export default App;
