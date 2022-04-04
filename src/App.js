import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);

  function 따봉더하기() {
    따봉변경(따봉 + 1);
  }

  // function 모달창열고닫기() {
  //   if (modal === false) {
  //     modal변경(true);
  //   } else {
  //     modal변경(false);
  //   }
  // }

  const 모달창열고닫기 = () => {
    // modal === false ? modal변경(true) : modal변경(false);
    modal변경(!modal);
  };

  // function 제목바꾸기() {
  //   var newArray = [...글제목];
  //   newArray[0] = "여자코트 추천";
  //   글제목변경([newArray]);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]} <span onClick={따봉더하기}>👍</span>
          {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      <button onClick={모달창열고닫기}>버튼</button>

      {modal === true ? <Modal /> : null}
    </div>
  );
}

export default App;
