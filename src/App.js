import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/aboutus/AboutUs";
import Feed from "./components/home/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import { Provider } from "react-redux";
import store from './store';
import CardDetails from "./components/CardDetails";

function App() {
 
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Sidebar />
   
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/card/:id" element={<CardDetails/>} />
        </Routes>
     
    </div>
    </Router>
    </Provider>
  );
}

export default App;
