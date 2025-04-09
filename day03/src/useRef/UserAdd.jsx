import { useRef, useState } from "react";
import "./style.css";
export default function UseRefAdd() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  }); 
  const { name, email } = inputs;
  // const [users, setUsers] = useState([
  //     {
  //       id: 1,
  //       name: '강민지',
  //       email: 'strongminji@gmail.com'
  //     },
  //     {
  //       id: 2,
  //       name: '정소울',
  //       email: 'soulright@bssm.hs.kr'
  //     },
  //     {
  //       id: 3,
  //       name: '이승현',
  //       email: 'victorynow@example.com'
  //     }
  // ]);
  const nextId = useRef(4); //useRef로 4 설정
  const inputRef = useRef(); //useRef로 설정
  // nextId값 1 증가
  nextId.current += 1;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }; //input값이 변경될때 iputs useState에 반영되도록 수정
  return (
    <div>
      {/* //useRef로 저장 */}
      <input
        name="name"
        onChange={onChange}
        value={name}
        ref={inputRef}
        placeholder="이름을 입력"
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={() => alert(inputRef.current.value)}>확인</button>
      {/* //useRef로 값 확인 */}
      <button
        onClick={() => {
          setInputs({ name: "", email: "" });
          inputRef.current.focus();
        }}
      >
        초기화
      </button>
      {/* //inputRef에 focus */}
    </div>
  );
}
