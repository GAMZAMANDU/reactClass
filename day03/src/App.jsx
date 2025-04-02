import MapTest1 from "./MapTest1";
import MapTest2 from "./MapTest2";
import PackingList from "./packingList";
import Scientists from "./MapTest3";
import Scientists2 from "./MapTest4";
import PostList from "./MapTest5";
import PostList2 from "./MapTest6";
import InputText from "./InputText";
import InputText1 from "./InputText1";
import InputTest2 from "./InputText2";
import ProfileForm from "./immer/ProfileForm";
import ProfileFormImmer from "./immer/ProfileFormImmer";

function App() {
  return (
    <>
      <ProfileFormImmer />
      <hr />
      <ProfileForm />
      <hr />
      <InputTest2 />
      <hr />
      <InputText1/>
      <hr />
      <InputText/>
      <hr />
      <MapTest1 />
      <hr />
      <MapTest2 />
      <hr />
      <PackingList />
      <hr />
      <Scientists />
      <hr />
      <Scientists2 />
      <hr />
      <PostList />
      <hr />
      <PostList2 />
    </>
  );
}

export default App;
