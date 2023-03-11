import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Routes;
