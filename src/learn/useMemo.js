import { useState, useRef, useMemo } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const handleAdd = () => {
    setProducts([...products, { name, price: Number(price) }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const total = useMemo(() => {
    const result = products.reduce((result, course) => {
      return result + course.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: "32px 10px" }}>
      <input
        ref={nameRef}
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter a price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>ADD</button>
      <br />
      <p>Total: {total}</p>
      <br />
      <ul>
        {products.map((course, index) => (
          <li key={index}>
            {course.name}-{course.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
