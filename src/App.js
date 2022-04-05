import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  // let [글제목, 글제목변경] = useState([
  //   "남자코트 추천",
  //   "강남 우동맛집",
  //   "파이썬 독학",
  // ]);
  let [따봉, 따봉변경] = useState(0);

  let [글제목, 글제목변경] = useState([
    { id: 1, title: "남자코트 추천", count: 0 },
    { id: 2, title: "강남 우동맛집", count: 0 },
    { id: 3, title: "파이썬 독학", count: 0 },
  ]);

  let [modal, modal변경] = useState(false);

  var 배열 = [2, 3, 4];

  var 곱하기배열 = 배열.map((arr) => arr * 2);

  const 따봉카운트 = (i) => {
    let copy = [...글제목];
    copy[i].count++;
    글제목변경(copy);
  };
  //개별 좋아요 고민중
  function 따봉더하기() {
    따봉변경(따봉 + 1);
  }

  // function 반복된UI() {
  //   var 어레이 = [];
  //   for (var i = 0; i < 3; i++) {
  //     어레이.push(<div>안녕</div>);
  //   }
  //   return 어레이;
  // }

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
      {/* <div className="list">
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
        <p>{곱하기배열}</p>
        <hr />
      </div> */}

      {글제목.map((배열, i) => (
        <div className="list" key={배열.id}>
          <h3>
            {배열.title}
            <span
              onClick={(i) => {
                let copy = [...글제목];
                copy.count[i]++;
                글제목변경(copy);
              }}
            >
              👍
            </span>
            {배열.count}
          </h3>
          <p>2월 18일 발행</p>
          <hr />
        </div>
      ))}

      <button onClick={모달창열고닫기}>버튼</button>

      {modal === true ? <Modal 글제목={글제목} /> : null}
    </div>
  );
}

export default App;
