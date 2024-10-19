import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
const renderModal = (button: HTMLButtonElement) => {
  const modalRoot = document.getElementById("react-modal-root");
  const root = ReactDOM.createRoot(modalRoot);
  const unmount = () => {
    root.unmount();
    button.style.display = "block";
  };

  root.render(<App unmount={unmount} />);
};

export default renderModal;
