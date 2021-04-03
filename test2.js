// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const List = (props) => {
  const [lists, setLists] = React.useState([]);
  const items = props.items;
  const handleClick = (n) => {
    setLists(items.filter((e) => e !== n).unshift(n));
  };

  return (
    <ul>
      {lists.map((item, idx) => (
        <li key={idx} onClick={handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

let listItem = document.querySelectorAll("li")[1];
if (listItem) {
  listItem.click();
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));
