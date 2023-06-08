import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/aboutus/AboutUs";
import Feed from "./components/home/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import { Provider, useSelector } from "react-redux";
import store from './store';
import CardDetails from "./components/CardDetails";

function App() {
  // const cardData = useSelector((state) => state.posts.data);
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Sidebar />
   
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/card/:id" element={<CardDetails id={6}/>} />
        </Routes>
     
    </div>
    </Router>
    </Provider>
  );
}

export default App;
