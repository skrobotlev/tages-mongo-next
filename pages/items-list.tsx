import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { createItem, getItems } from "../api/functions";
import LikeIcon from "../components/heart-like";
import ItemCard from "../components/item-card";
import Store from "../store/store";
import { observer } from "mobx-react-lite";
import SortItems from "../components/sort-items";

const ItemsList = observer(() => {
    const [items, setItems] = useState([]);
    const store = new Store();

    const getLocItems = (category) => {
        let localItems = localStorage.getItem(category);
        console.log(localItems);
        if (localItems !== null) localItems;
        return JSON.parse(localItems);
    };
    // store.requestItems()
    const addLocItems = (category, id) => {
        let items = getLocItems(category);
        console.log(items, 'csk')

        let index;
        !items ? localStorage.setItem(category, JSON.stringify([id])) : index = items.indexOf(id);
        if (index === -1) items.push(id)
        else items.splice(index, 1)

        localStorage.setItem(category, JSON.stringify(items));
        // return [];
    };

    const sortСheap = () => {
        let arr = [...items].sort((a, b) => a.price.currentPrice - b.price.currentPrice);
        setItems(arr)
    }
    const sortExpensive = () => {
        let arr = [...items].sort((a, b) => b.price.currentPrice - a.price.currentPrice);
        setItems(arr)
    }
    const sortMaterialDerevo = () => {
        let arr = [...items].sort((a, b) => a.material.id - b.material.id);
        setItems(arr)
    }
    const sortMaterialMetall = () => {
        let arr = [...items].sort((a, b) => b.material.id - a.material.id);
        setItems(arr)
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await getItems();
    //         console.log("fetch data;m", result);
    //         setItems(result);
    //     };
    //     fetchData();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getItems();
            // console.log("fetch data;m", result);
            store.items = result;
            setItems(result);
            console.log(store.items, 'items')
        };
        fetchData();
    }, []);
    // console.log(items)
    const [sortPrice, setSortPrice] = useState("")
    const [sortMaterial, setSortMaterial] = useState("")
    const handleChangePrice = (event: SelectChangeEvent) => {
        setSortPrice(event.target.value);
    };
    const handleChangeMaterial = (event: SelectChangeEvent) => {
        setSortMaterial(event.target.value);
        console.log()
    };
    return (
        <>
            {/* <SortItems /> */}
            <FormControl sx={{ minWidth: 120, }}>
                <InputLabel id="demo-simple-select-helper-label">Сортировка</InputLabel>
                <Select
                    style={{ height: "55px", width: "150px" }}
                    value={sortPrice}
                    label="Сортировка"
                    onChange={handleChangePrice}
                >
                    <MenuItem value={"Deshevle"} onClick={() => sortСheap()} >Дешевле</MenuItem>
                    <MenuItem value={"Dorozhe"} onClick={() => sortExpensive()}>Дороже</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ ml: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Материал</InputLabel>
                <Select
                    style={{ height: "55px", width: "150px" }}
                    value={sortMaterial}
                    label="Материал"
                    onChange={handleChangeMaterial}
                >
                    <MenuItem onClick={() => sortMaterialMetall()}>Металл</MenuItem>
                    <MenuItem onClick={() => sortMaterialDerevo()}>Дерево</MenuItem>
                </Select>
            </FormControl>

            <div className="items">
                <div className="items__grid">
                    {/* {store.items.map((item) => {
                        // console.log(item, 'tem')
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
                    })} */}
                    {items.map((item) => {
                        // console.log(item, 'tem')
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
            </div>
        </>
    );
});

export default ItemsList;
