import { useEffect, useState } from "react";

const List = ({ items }) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  const swapArray = (array, indexA, indexB) => {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    setList(array);
    console.log("function clicked");
    console.log("items", items);
    console.log("list", list);
  };

  useEffect(() => {
    setList(items);
  }, [items]);

  return (
    <>
      <h1>Hello World</h1>
      {list.map((item, idx) => (
        <p key={idx} onClick={() => swapArray(items, items.indexOf(item), 0)}>
          {item}
        </p>
      ))}

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
};

export default List;
