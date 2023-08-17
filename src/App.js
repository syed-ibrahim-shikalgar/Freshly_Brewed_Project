import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import MyLearning from "./components/MyLearning/MyLearning";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="my-learning" element={<MyLearning />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
