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
