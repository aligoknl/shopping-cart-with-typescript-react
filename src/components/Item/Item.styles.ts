import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  p {
    text-align: justify;
  }

  .card-price {
    display: inline-block;
    width: 33.3%;
    height: 38px;
    background-color: #6ab070;
    -webkit-border-radius: 3px 4px 4px 3px;
    -moz-border-radius: 3px 4px 4px 3px;
    border-radius: 3px 4px 4px 3px;
    border-left: 1px solid #6ab070;
    margin-left: 19px;
    position: relative;
    color: white;
    font-weight: 300;
    font-size: 22px;
    line-height: 38px;
    padding: 0 10px 0 10px;
  }

  .card-price:before {
    content: "";
    position: absolute;
    display: block;
    left: -19px;
    width: 0;
    height: 0;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-right: 19px solid #6ab070;
  }

  .card-price:after {
    content: "";
    background-color: white;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: block;
    position: absolute;
    left: -9px;
    top: 17px;
  }
  .add-to-cart {
    background-color: lightgray;
  }
  .add-to-cart:hover {
    opacity: 0.7;
  }
`;
