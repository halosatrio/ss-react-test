import { useState } from "react";

const List = () => {
  const [list, setList] = useState(["A", "B", "C", "D"]);
  const [count, setCount] = useState(0);

  const swapArray = (array, indexA, indexB) => {
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
    setList(array);
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello World</h1>
      {list.map((item, idx) => (
        <p key={idx} onClick={() => swapArray(list, list.indexOf(item), 0)}>
          {item}
        </p>
      ))}
    </>
  );
};

export default List;
