import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { createItem, getItems } from "../api/functions";
import Store from "../store/store";

function App() {
  const store = new Store();

  // const [item, setItem] = useState({ name: "", image: "" });
  const [item, setItem] = useState({
    name: "",
    image: "",
    code: "",
    material: "",
    price: {
      oldPrice: "",
      currentPrice: "",
    },
  });
  const [items, setItems] = useState([]);

  const onSubmitHandler = async (e, values) => {
    e.preventDefault();
    // store.addItem(values);
    const result = await createItem(item);
    console.log(result, "res");
    // setItems([...items, result]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      console.log("fetch data;m", result);
      setItems(result);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <pre>{JSON.stringify(item, null, "\t")}</pre>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          className="input-field"
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Code"
          className="input-field"
          onChange={(e) => setItem({ ...item, code: e.target.value })}
        />
        <input
          type="text"
          placeholder="OldPrice"
          className="input-field"
          onChange={(e) =>
            setItem({
              ...item,
              price: { ...item.price, oldPrice: e.target.value },
            })
          }
        />{" "}
        <input
          type="text"
          placeholder="CurrentPrice"
          className="input-field"
          onChange={(e) =>
            setItem({
              ...item,
              price: { ...item.price, currentPrice: e.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Material"
          className="input-field"
          onChange={(e) => setItem({ ...item, material: e.target.value })}
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
          <button className="btn">submit</button>
        </div>
      </form>
      {/* {items?.map((item) => (
        <div className="card" key={item._id}>
          <div className="card-image waves-effect waves-block waves-light">
            <img
              className="activator"
              style={{ width: 300, height: 300 }}
              src={item.image}
            />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {item.name}
            </span>
          </div>
        </div>
      ))} */}
    </div>
  );
}
export default App;
