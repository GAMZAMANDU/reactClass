import { useRef, useState } from "react";
import "./UserCreate.css";

const User = ({ user, onRemove, onToggle, onModify }) => {
  return (
    <tr>
      <td onClick={() => onToggle(user.id)}>{user.selected ? "✅" : "❌"}</td>
      <td onClick={() => onToggle(user.id)}>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button onClick={() => onRemove(user.id)}>삭제</button>
        <button onClick={() => onModify(user.id)}>수정</button>
      </td>
    </tr>
  );
};

export default function UserRefModify() {
  const [inputs, setInputs] = useState({
    name: null,
    email: null,
  });
  const nameInput = useRef();
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "강민지",
      email: "strongminji@gmail.com",
      selected: false,
    },
    {
      id: 2,
      name: "정소울",
      email: "soulright@bssm.hs.kr",
      selected: false,
    },
    {
      id: 3,
      name: "이승현",
      email: "victorynow@example.com",
      selected: false,
    },
  ]);

  const { name, email } = inputs;
  const nextId = useRef(4);

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, selected: !user.selected } : user
      )
    );
  };

  const onModify = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, name: inputs.name ?? user.name, email: inputs.email ?? user.email }
          : user
      )
    );

    setInputs({
      name: null,
      email: null,
    });
    nameInput.current.focus();
  };

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
      selected: false,
    };
    setUsers(users.concat(user));
    setInputs({
      name: null,
      email: null,
    });
    nameInput.current.focus();
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const UserList = () => {
    return (
      <table>
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
            onRemove={onRemove}
            onToggle={onToggle}
            onModify={onModify}
          />
        ))}
      </table>
    );
  };

  return (
    <div>
      <input
        name="name"
        onChange={onChange}
        value={name ?? ""}
        placeholder="이름을 입력"
        ref={nameInput}
      />
      <input
        name="email"
        onChange={onChange}
        value={email ?? ""}
        placeholder="이메일을 입력"
      />
      <button onClick={onCreate}>등록</button>
      <UserList />
    </div>
  );
}
