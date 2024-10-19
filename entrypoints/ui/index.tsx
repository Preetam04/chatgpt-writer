import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
let root = null;
const renderModal = (modalRoot: HTMLDivElement) => {
  const root = ReactDOM.createRoot(modalRoot);
  const unmount = () => {
    root.unmount();
  };

  root.render(<App unmount={unmount} />);
};

export default renderModal;
