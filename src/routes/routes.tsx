import HomeController from "@src/pages/home/controller";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <Routes>
    <Route path="*" element={<Navigate to="/" />} />
    <Route path="/" element={<HomeController />} />
  </Routes>
);
export default AppRoutes;
