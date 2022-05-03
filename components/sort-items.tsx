import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { getItems } from "../api/functions";
import Store from "../store/store";
import { observer } from "mobx-react-lite";


const SortItems = observer(() => {
    const [items, setItems] = useState([]);
    const [sortPrice, setSortPrice] = useState("")
    const [sortMaterial, setSortMaterial] = useState("")
    const store = new Store();
    const handleChangePrice = (event: SelectChangeEvent) => {
        setSortPrice(event.target.value);
    };
    const handleChangeMaterial = (event: SelectChangeEvent) => {
        setSortMaterial(event.target.value);
        console.log()
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
    useEffect(() => {
        const fetchData = async () => {
            const result = await getItems();
            console.log("fetch data;m", result);
            store.items = await result;
            // setItems(result);
            console.log(store.items, 'items')
        };
        fetchData();
    }, []);
    return (
        <> <FormControl sx={{ minWidth: 120, }}>
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
            {/* <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort"
                placeholder="Sortir"
            >
                <MenuItem onClick={() => sortСheap()}>Дешевле</MenuItem>
                <MenuItem onClick={() => sortExpensive()}>Дороже</MenuItem>
            </Select>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sort"
                placeholder="Sortir"
            >
                <MenuItem onClick={() => sortMaterialDerevo()}>Metall</MenuItem>
                <MenuItem onClick={() => sortMaterialMetall()}>Derevo</MenuItem>
            </Select> */}
        </>
    );
});

export default SortItems;
