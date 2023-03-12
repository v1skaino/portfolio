import "@themes/global.styles.css";
import { ToastNotification } from "./components/toastNotification";
import Routes from "./routes";

function App() {
  return (
    <>
      <Routes />
      <ToastNotification />
    </>
  );
}

export default App;
