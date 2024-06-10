import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Expenses, Home, Reports, Saving } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/saving" element={<Saving />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
