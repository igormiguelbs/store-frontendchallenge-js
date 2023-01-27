import styled from "styled-components";

export const ProductListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 23px;
  width: 1080px;
  margin: 50px auto;
`;

export const ProductCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 10px 15px 40px 15px;
  position: relative;
  img {
    display: block;
    height: 138px;
    object-fit: contain;
    margin: 0px auto;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    color: #2c2c2c;
  }
  .nameprice {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    align-items: flex-start;
    h2 {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    .price {
      font-weight: 700;
      color: #fff;
      font-size: 15px;
      background: #373737;
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
`;

export const ProductBuyButton = styled.button`
  color: #fff;
  background: #0f52ba;
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 10px;
  text-align: center;
  border: none;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition: all ease 0.2s;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  &:hover {
    background: #373737;
  }
`;
