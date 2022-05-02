import { useEffect, useState } from "react";
import { createItem, getItems } from "../api/functions";
import LikeIcon from "../components/heart-like";
import ItemCard from "../components/item-card";
const ItemsList = () => {
    const [items, setItems] = useState([]);

    const getLocItems = (category) => {
        let localItems = localStorage.getItem(category);
        console.log(localItems);
        if (localItems !== null) localItems;
        return JSON.parse(localItems);
    };
    // console.log(getLocItems("items"))

    const addLocItems = (category, id) => {
        let items = getLocItems(category);
        console.log(items, 'csk')

        let index;
        !items ? localStorage.setItem(category, JSON.stringify([id])) : index = items.indexOf(id);
        if (index === -1) items.push(id)
        else items.splice(index, 1)

        // localItems.push(id);
        // localItems ? localItems.push(id) : localStorage.setItem("items", id)
        // console.log(localItems, "isk");
        localStorage.setItem(category, JSON.stringify(items));
        return [];
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
        <>
            <div className="items-grid">
                {items.map((item) => {
                    return (
                        <ItemCard
                            key={item.code}
                            oldPrice={item.price.oldPrice}
                            currentPrice={item.price.currentPrice}
                            image={item.image}
                            name={item.name}
                            code={item.code}
                            likeIcon={<LikeIcon />}
                            funcLS={addLocItems}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ItemsList;
