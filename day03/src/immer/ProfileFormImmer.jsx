import React, { useState } from "react";
import { produce } from "immer";

export default function ProfileFormImmer() {
  const [user, setUser] = useState({
    profile: {
      name: "",
      email: "",
    },
  });

  const handleChange = (e) => {
    setUser(produce(user, (draft) => {
      const data = e.target;
      draft.profile[data.name] = data.value;
    }));
  };


  return (
    <div style={{ padding: "20px" }}>
      <h2>프로필 수정</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>이름: </label>
          <input
            type="text"
            name="name"
            value={user.profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>이메일: </label>
          <input
            type="email"
            name="email"
            value={user.profile.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <hr />

      <h3>입력 결과</h3>
      <p>이름: {user.profile.name}</p>
      <p>이메일: {user.profile.email}</p>
    </div>
  );
}