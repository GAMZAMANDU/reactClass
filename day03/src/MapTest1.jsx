let user =  { name : "soma", age: 20 };
let { name, age } = user;
const cars = ["Ford", "BMW", "Audi"];
let foo = ["one", "two", "three"];

function Car({ brand }) {
  return (
      <li>I am a: {brand}</li>
  )
}


function MapTest1() {

  return (
    <>
      <ul>
        <h1>foo 배열 출력하기</h1>
        {foo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        <h1>차고에 있는 차 목록</h1>
        {cars.map((car, index) => (
          <Car key={index} brand={car} />
        ))}
      </ul>
    </>
  )
}

export default MapTest1
