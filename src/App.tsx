import "@themes/global.styles.css";
import { useTranslation } from "react-i18next";
import { ToastNotification } from "./components/toastNotification";
import Routes from "./routes";

function App() {
  const { t } = useTranslation();
  var pageTitle = "Dev | Lucas Viscaino";
  var attentionMessage = t("home:bye");

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      document.title = attentionMessage;
    } else {
      document.title = pageTitle;
    }
  });

  return (
    <>
      <Routes />
      <ToastNotification />
    </>
  );
}

export default App;
