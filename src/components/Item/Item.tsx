import Button from "@material-ui/core/Button";
import { CartItemType } from "../../App";
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <h3 className="card-price">€{item.price.toFixed(2)}</h3>

    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
    <Button className="add-to-cart" onClick={() => handleAddToCart(item)}>
      Add to cart
    </Button>
  </Wrapper>
);

export default Item;
