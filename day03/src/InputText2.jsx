import { useEffect, useState } from "react";

export default function InputTest2() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>로그인</h1>
        <li>
          이름
          <input
            type="text"
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            value={newUser.name}
          />
        </li>
        <li>
          이메일
          <input
            type="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            value={newUser.email}
          />
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setUsers([...users, { ...newUser }]);
              setNewUser({ id: "", name: "", email: "" });
            }}
          >
            확인
          </button>
          <button
            onClick={() =>
              setUsers(
                users.map((user, index) =>
                  index === 0 ? { id: "", name: "", email: "" } : { ...user }
                )
              )
            }
          >
            취소
          </button>
        </li>
      </form>
      입력된 이름은 <span>{users.slice(-1)[0]?.name || ""}</span>이고 입력된 이메일은
      <span>{users.slice(-1)[0]?.email || ""}</span>
    </div>
  );
}
