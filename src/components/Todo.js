import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [showModal, setShowMdal] = useState(false);

  const deleteHandler = () => {
    setShowMdal(true);
  };

  const closeHandler = () => {
    setShowMdal(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={closeHandler} onConfirm={closeHandler} />}
      {showModal && <Backdrop onClick={closeHandler} />}
    </div>
  );
};

export default Todo;
