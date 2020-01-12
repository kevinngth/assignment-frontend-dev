import React from "react";
import styled from "@emotion/styled";

const CartItemContainer = styled.div(props => ({
  display: "flex",
  paddingBottom: "1rem",
  marginBottom: "1rem",
  borderBottom: "1px solid rgba(0,0,0,.1)",
  cursor: "pointer"
}));

const CartItem = props => {
  const { data } = props;
  // use the keys in the DUMMY_DATA objects to render a nice CartItem here
  return (<CartItemContainer>
    <div style={{width: "40%"}}>
      <img style={{width: "100%"}} src={data.thumbnail}/>
    </div>
    <div style={{width: "60%",paddingLeft: ".5rem"}}>
      <p style={{margin: "0"}}>{data.title}</p>
      <p style={{margin: "0"}}>{data.artist}</p>
      <p style={{textAlign: "right"}}>{data.price}</p>
    </div>
  </CartItemContainer>);
};

export default CartItem;