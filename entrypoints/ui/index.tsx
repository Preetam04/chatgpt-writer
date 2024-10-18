import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const renderModal = (modalRoot: HTMLDivElement) => {
  const root = ReactDOM.createRoot(modalRoot); // Create a root for React to render to

  root.render(<App />);
};

export default renderModal;
