import Image from 'next/image';
import './styles.scss';

type Props = {
  data: ProductModels.client.CartProduct,
  onIncrement: (id: string) => void,
  onDecrement: (id: string) => void,
  onDelete: (id: string) => void,
}

const CartProduct: React.FC<Props> = ({ data, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="row border-top cart-product-item">
      <div className="row main align-items-center">
        <div className="col-2">
          <div className="product-image">
            <Image
              width={100}
              height={200}
              alt='cart-product'
              src={data.imageUrl}
              data-testid="product-image"
            />
          </div>
        </div>
        <div className="col">
          <div className="row">{data.title}</div>
        </div>
        <div className="col">
          <button className="clean-btn" onClick={() => onDecrement(data.id)} data-testid="decrement-button"> - </button>
          {data.quantity}
          <button className="clean-btn" onClick={() => onIncrement(data.id)} data-testid="increment-button"> + </button>
        </div>
        <div className="col">
          $ {parseFloat(data.price.toString()).toFixed(2)}
          <button className="clean-btn" onClick={() => onDelete(data.id)} data-testid="remove-button"> X </button>
        </div>
      </div>
    </div>
  )
}

export default CartProduct;