import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>{props.글제목[0].title}</h2>
      <p>날씨</p>
      <p>상세내용</p>
    </div>
  );
};

export default Modal;
