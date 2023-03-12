import Home from "@src/pages/home";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/" element={<Home />} />
  </Routes>
);
export default AppRoutes;
