import { useEffect, useState } from "react";
import { createItem, getItems } from "../api/functions";
import LikeIcon from "../components/heart-like";
import ItemCard from "../components/item-card";
const ItemsList = () => {
    const [items, setItems] = useState([]);

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
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ItemsList;
