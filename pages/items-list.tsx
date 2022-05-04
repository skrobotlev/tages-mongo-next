import { observer } from "mobx-react-lite";
import SortItems from "../components/items-list";

const ItemsList = observer(() => {
    return (
        <>
            <SortItems />
        </>
    );
});

export default ItemsList;
