import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  // let [글제목, 글제목변경] = useState([
  //   "남자코트 추천",
  //   "강남 우동맛집",
  //   "파이썬 독학",
  // ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [글제목, 글제목변경] = useState([
    { id: 1, title: "남자코트 추천" },
    { id: 2, title: "강남 우동맛집" },
    { id: 3, title: "파이썬 독학" },
  ]);
  let [아이디, 아이디변경] = useState(4);
  let [modal, modal변경] = useState(false);
  var 배열 = [2, 3, 4];
  let [제목클릭, 제목클릭변경] = useState(0);
  let [입력값, 입력값변경] = useState("");

  function 게시글추가(e) {
    e.preventDefault();
    let 이전리스트 = [...글제목];
    let 이전따봉 = [...따봉];
    let 새로운리스트 = 이전리스트.concat({
      id: 아이디,
      title: 입력값,
    });
    let 새로운따봉 = 이전따봉.concat(0);

    입력값변경("");
    아이디변경(아이디 + 1);
    글제목변경(새로운리스트);
    따봉변경(새로운따봉);
  }

  function 따봉추가() {}

  var 곱하기배열 = 배열.map((arr) => arr * 2);

  //개별 좋아요
  function 따봉더하기(i) {
    let 복사본 = [...따봉];
    복사본[i]++;
    따봉변경(복사본);
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
          <h3 onClick={() => 제목클릭변경(i)}>
            {배열.title}
            <span onClick={() => 따봉더하기(i)}>👍</span>
            {따봉[i]}
          </h3>
          <p>2월 18일 발행</p>
          <hr />
        </div>
      ))}

      {/* <button
        onClick={() => {
          제목클릭변경(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          제목클릭변경(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          제목클릭변경(2);
        }}
      >
        버튼3
      </button> */}

      {/* <input onChange={(e) => 입력값변경(e.target.value)} /> */}
      <div className="publish">
        <input value={입력값} onChange={(e) => 입력값변경(e.target.value)} />
        <button onClick={게시글추가}>저장</button>
      </div>

      <button onClick={모달창열고닫기}>버튼</button>

      {modal === true ? <Modal 글제목={글제목} 제목클릭={제목클릭} /> : null}
    </div>
  );
}

export default App;
