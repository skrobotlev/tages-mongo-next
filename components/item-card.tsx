import { FC } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
interface ItemCardProps {
  image?: any;
  oldPrice?: number | any;
  currentPrice?: number | any;
  name?: string;
  material?: any;
  code?: string | any;
  likeIcon?: any;
}

const ItemCard: FC<ItemCardProps> = ({ oldPrice, currentPrice, code, name, image, likeIcon }) => {
  return (
    <div className="item-card">
      <img src={image} className="item-card__img" />
      <span className="item-card__price-span">
        {/* <h1 className="item-card__price">{oldPrice}</h1> */}
        <h1 className={oldPrice && "item-card__price_line-through"}>{oldPrice}</h1>
        <h1 className="item-card__price">{currentPrice}</h1>
      </span>
      <h2 className="item-card__name">{name}</h2>
      <h3 className="item-card__code">{code}</h3>
      <i className="item-card__like-icon">{likeIcon}</i>
      <i className="item-card__cart-icon"><ShoppingCartIcon /></i>
    </div>
  );
};

export default ItemCard;
