import React, { useState } from "react";
import styled from "@emotion/styled";

import BadgeRound from "../badges/BadgeRound";
import CartItem from "./CartItem";
import IconCart from "../svg/IconCart";
import Popover from "../popups/Popover";
import Button from "../buttons/Button";

// normally this data would come from our API
// in this assignment, we will assume that these two items are in the cart
const DUMMY_DATA = [
  {
    id: 1,
    title: "Desire",
    artist: "Prakornpatara Janthakhaisorn",
    thumbnail:
      "https://ik.imagekit.io/theartling/p/artworks/PJanth_Desire04.jpg?tr=w-255,h-255,bg-FFFFFF",
    price: "S$ 1,352"
  },
  {
    id: 2,
    title: "Colours of Life 2",
    artist: "WH Thean",
    thumbnail:
      "https://ik.imagekit.io/theartling/p/products/Product/7a4f1965f92c411cba3c1b3c83398830.JPG?tr=w-255,h-255,bg-FFFFFF",
    price: "S$ 2,028"
  }
];

const CartIconContainer = styled.div(props => ({
  position: "relative"
}));

const CartIcon = () => {
  // this is a React hook. If you don't know about hooks yet, don't worry about
  // this.
  const [isActive, setIsActive] = useState(false);

  return (
    <CartIconContainer>
      <div style={{position: "relative"}} onClick={() => setIsActive(!isActive)}>
        <IconCart />
        <BadgeRound>2</BadgeRound>
      </div>
      <Popover isVisible={true} /*isVisible={isActive}*/ onClose={() => setIsActive(false)}>
        <p style={{textAlign: "center", borderBottom: "1px solid rgb(200, 175, 106)", paddingBottom: "1rem"}}>{DUMMY_DATA.length} items in your cart</p>
        {DUMMY_DATA.map( item => <CartItem key={item.title} data={item} /> )}
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <span>Subtotal</span>
          <span>S$ 3,380</span>
        </div>
        <Button>GO TO CART</Button>
      </Popover>
    </CartIconContainer>
  );
};

export default CartIcon;
