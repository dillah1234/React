
function ItemList(props) {
return (
<ul>
{props.items.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
);
}
function App() {
const fruits = ["Apple", "Banana", "Orange", "Mango"];
return <ItemList items={fruits} />;
}
export default App;