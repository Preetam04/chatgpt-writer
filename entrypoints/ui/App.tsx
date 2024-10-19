import React from "react";
import Modal from "@/entrypoints/ui/components/Modal";

const App = ({ unmount }: { unmount: () => void }) => {
  const [modelOpen, setModelOpen] = useState(true);

  const onClose = () => {
    setModelOpen(false);
    unmount();
  };

  return <div>{modelOpen && <Modal isOpen={true} onClose={onClose} />}</div>;
};

export default App;
