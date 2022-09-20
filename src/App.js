import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import "./App.css";

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      {/* <AnimatePresence exitBeforeEnter>
        <BrowserRouter location={location} key={location.key}> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/news">
              <News />
            </Route> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
