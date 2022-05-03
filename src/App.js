import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import MidtermInfoContainer from "./components/MidtermInfoContainer"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MidtermInfoContainer/>}/>
      </Routes>
    </Router>
  );
}