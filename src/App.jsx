import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Voting from "./components/voting";
import Login from "./components/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </Router>
  );
};

export default App;
