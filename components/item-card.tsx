import { FC, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";
import LikeIcon from "./heart-like";
interface ItemCardProps {
  image?: any;
  oldPrice?: number | any;
  currentPrice?: number | any;
  name?: string;
  material?: any;
  code?: string | any;
  likeIcon?: any;
  funcLS: (category, id) => any;
}

const ItemCard: FC<ItemCardProps> = ({
  oldPrice,
  currentPrice,
  code,
  name,
  image,
  likeIcon,
  funcLS,
}) => {
  const [active, setActive] = useState(false);
  const [lsFlag, setFlag] = useState(false);
  let cartItems = localStorage.getItem("cart");
  let likeItems = localStorage.getItem("likes");
  useEffect(() => {
    !lsFlag && cartItems ? cartItems.includes(code) ? setFlag(true) : null : null
    !active && likeItems ? likeItems.includes(code) ? setActive(true) : null : null

  }, [lsFlag, active])

  return (
    <div className="item-card">
      <h2 className="item-card__name">{name}</h2>
      <h3 className="item-card__code">{code}</h3>
      <span className="item-card__price-span">
        {oldPrice && <h5 className="item-card__price_line-through">
          {oldPrice}
        </h5>}
        <h5 className="item-card__price">{currentPrice}</h5>
      </span>
      <span className="item-card__icons-span">
        <i className="item-card__like-icon" onClick={() => {
          !active ? setActive(true) : setActive(false);
          funcLS("likes", code)
        }}
        >
          <LikeIcon activeClass={active} />
        </i>
        <i className="item-card__cart-icon" onClick={() => {
          !lsFlag ? setFlag(true) : setFlag(false);
          funcLS("cart", code)
        }}>
          {lsFlag ? (
            <CheckCircleOutlineIcon style={{ color: "green" }} />
          ) : (
            <ShoppingCartIcon />
          )}
        </i>
      </span>
      {oldPrice && <span className="item-card__sale">Скидка</span>}
      <span className="item-card__img-span">
        <img src={image} className="item-card__img" />
      </span>
    </div>
  );
};

export default ItemCard;
