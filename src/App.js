import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import LeftOffset from "./components/LeftOffset/LeftOffset";
import Assignments from "./pages/assignments/Assignments";
import Classes from "./pages/classes/Classes";
import Exam from "./pages/exam/Exam";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <LeftOffset>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/class" element={<Classes />} />
                  <Route path="/exams" element={<Exam />} />
                  <Route path="/tasks" element={<Assignments />} />
              </Routes>
          </LeftOffset>
      </BrowserRouter>
    </div>
  );
}

export default App;
