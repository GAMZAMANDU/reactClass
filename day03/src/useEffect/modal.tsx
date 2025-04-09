import React, { useState, useRef, useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    return () => {
      alert("Modal 컴포넌트 언마운트");
    };
  }, []);

  return <div>useEffect 실습입니다.</div>;
};

export default function UseEffect1() {
  const [depname, setDepname] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    setShowModal(true);
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("현재 이름값: ", depname);

    return () => {
      console.log("이전 이름값 : ", depname);
    };
  }, [depname]);

  return (
    <div>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <button onClick={() => setDepname(name)}>이름 출력</button>
      </div>

      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
        {showModal && <Modal />}
      </div>
    </div>
  );
}
