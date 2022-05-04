import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { getItems } from "../api/functions";
import { observer } from "mobx-react-lite";
import LikeIcon from "./heart-like";
import ItemCard from "./item-card";
import { useStore } from "../store";


const SortItems = observer(() => {
    const [sortPrice, setSortPrice] = useState("")
    const [sortMaterial, setSortMaterial] = useState("")
    const { store } = useStore()

    const getLocItems = (category) => {
        let localItems = localStorage.getItem(category);
        if (localItems !== null) localItems;
        return JSON.parse(localItems);
    };
    const addLocItems = (category, id) => {
        let items = getLocItems(category);
        let index;
        !items ? localStorage.setItem(category, JSON.stringify([id])) : index = items.indexOf(id);
        if (index === -1) items.push(id)
        else items.splice(index, 1)
        localStorage.setItem(category, JSON.stringify(items));
    };

    const handleChangePrice = (event: SelectChangeEvent) => {
        setSortPrice(event.target.value);
    };
    const handleChangeMaterial = (event: SelectChangeEvent) => {
        setSortMaterial(event.target.value);
        console.log()
    };
    const sortСheap = () => {
        let arr = [...store.items].sort((a, b) => a.price.currentPrice - b.price.currentPrice);
        store.items = arr;
    }
    const sortExpensive = () => {
        let arr = [...store.items].sort((a, b) => b.price.currentPrice - a.price.currentPrice);
        store.items = arr;
    }
    const sortMaterialDerevo = () => {
        let arr = [...store.items].sort((a, b) => a.material.id - b.material.id);
        store.items = arr;
    }
    const sortMaterialMetall = () => {
        let arr = [...store.items].sort((a, b) => b.material.id - a.material.id);
        store.items = arr;
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await getItems();
            store.items = await result;
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="head-part-items-list">
                <span className="section-navigation__header">
                    <h2 className="section-navigaion__header-name">Главная</h2>
                    <h2 className="section-navigaion__header-name">/</h2>
                    <h2 className="section-navigaion__header-name">Системы хранения</h2>
                    <h2 className="section-navigaion__header-name">/</h2>
                    <h2 className="section-navigaion__header-name_actual">Комплекты стеллажных систем</h2>
                </span>
                <h1 className="item-list__header">Комплекты стеллажных систем</h1>
                <div className="sort-forms">
                    <FormControl sx={{ minWidth: 120 }}>
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
                </div>
            </div>
            <div className="items">
                <div className="items__grid">
                    {store && store.items.map((item) => {
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

export default SortItems;
