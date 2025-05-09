function Item({ name, isPacked }) {
  return (
    <li>{name} {isPacked && "✅"}</li>
  )
}

export default function PackingList() {
  const items = [
    { name: "Space suit", isPacked: true },
    { name: "Helmet with a golden leaf", isPacked: true },
    { name: "Photo of Tam", isPacked: false },
  ];

  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        {items.map((item, index) => (
          <Item key={index} isPacked={item.isPacked} name={item.name} />
        ))}
      </ul>
    </section>
  );
}
