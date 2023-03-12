import { colors } from "@src/shared/themes/colors";
import { fontSize } from "@src/shared/themes/fonts";
import styled, { keyframes } from "styled-components";

export const ToastNotification = () => {
  return (
    <Container id="toastNotification">
      <ToastArea id="toastMessage"></ToastArea>
    </Container>
  );
};

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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  transition: 1s;
  z-index: 10;

  display: none;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 2s linear normal;
`;

const ToastArea = styled.div`
  display: flex;
  width: auto;
  padding: 15px 60px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  cursor: pointer;
  color: ${colors.white};
  font-size: ${fontSize.small}px;
`;
