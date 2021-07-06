import "./App.css";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Order from "./components/Order";
import NotFound from "./components/NotFound";
import Footer from "./components/footer";
import { useState } from "react";

function App() {

 const [savedItems, setSaveditems] = useState([])
 const [allitems, setAllitems] = useState();

 
 const addItem = (item) => savedItems.push(item);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Menu addItem={addItem}/>
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
          {/* <Route path="/order" component={Order} /> */}
          <Route path="/order">
            <Order getItem={savedItems}/>
          </Route>
          <Route component={NotFound} />
          
        </Switch>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
