import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { createItem, getItems } from "../api/functions";

function App() {
  const [item, setItem] = useState({
    name: "",
    image: "",
    code: "",
    material: { id: "", name: "" },
    price: {
      oldPrice: "",
      currentPrice: "",
    },
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createItem(item);
    console.log(result, "res");
  };

  return (
    <div className="add-items">
      <div className="add-items__container">
        <pre>{JSON.stringify(item, null, "\t")}</pre>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Name"
            className="add-input"
            onChange={(e) => setItem({ ...item, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Code"
            className="add-input"
            onChange={(e) => setItem({ ...item, code: e.target.value })}
          />
          <input
            type="text"
            placeholder="OldPrice"
            className="add-input"
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
            className="add-input"
            onChange={(e) =>
              setItem({
                ...item,
                price: { ...item.price, currentPrice: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Material-id"
            className="add-input"
            onChange={(e) =>
              setItem({
                ...item,
                material: { ...item.material, id: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder="Material-name"
            className="add-input"
            onChange={(e) =>
              setItem({
                ...item,
                material: { ...item.material, name: e.target.value },
              })
            }
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
      </div>
    </div>
  );
}
export default App;
