import moment from "moment";

export const handleAlert = async (message: string) => {
  const component = document.getElementById("toastNotification");
  const text = document.getElementById("toastMessage");

  if (!component || !text) {
    return;
  }
  component.style.display = "flex";

  text.innerHTML = message;

  setTimeout(function () {
    component.style.display = "none";
  }, 3000);
};

export const smoothScroll = (e: any, path: string) => {
  let scroll = document.getElementById(path);
  e.preventDefault();
  scroll && scroll.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const ageCalc = () => {
  let bday = moment("2001-10-09", "YYYY-MM-DD");
  return moment().diff(bday, "years");
};

export const changeAppLanguage = (lng: string) => {
  localStorage.setItem("i18nextLng", lng);
};
