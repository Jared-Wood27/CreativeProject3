import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Chinese from "./pages/Chinese";
import Hispanic from "./pages/Hispanic";
import Italian from './pages/Italian';
import FoodAPI from './pages/FoodAPI';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Chinese food" element={<Chinese />} />
          <Route path="Hispanic food" element={<Hispanic />} />
          <Route path="Italian food" element={<Italian />} />
          <Route path="Food Search" element={<FoodAPI />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}