import { useRef, useState } from "react";
import "./UserCreate.css";

const User = ({ user, onRemove }) => {
  return (
    <div>
      {user.name} : {user.email}
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

export default function UserRefCreate() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const nameInput = useRef();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
    },
  ]);

  const { name, email } = inputs;
  const nextId = useRef(4);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    const user = {
      id: nextId.current,
      name,
      email,
    };
    setUsers(users.concat(user));
    setInputs({
      name: "",
      email: "",
    });
    nameInput.current.focus();
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name}
        placeholder="이름을 입력"
        ref={nameInput}
      />
      <input
        name="email"
        onChange={onChange}
        value={email}
        placeholder="이메일을 입력"
      />
      <button onClick={onCreate}>등록</button>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
