import Image from 'next/image';
import css from './style.module.scss';

type Props = {
  data: ProductModels.server.Product,
  onAddCart: (product: ProductModels.server.Product) => void
}

const ProductCard: React.FC<Props> = ({ data, onAddCart }) => {
  const { imageUrl, title, price } = data;

  return (
    <div className="col col-lg-4 mb-5" data-testid="product-item">
      <div className="card h-100">
        <div className={css.imageContainer}>
          <Image
            width={400}
            height={600}
            className="card-img-top"
            src={imageUrl}
            alt="product image"
            data-testid="product-image"
          />
        </div>
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
            </div>
            ${price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => onAddCart(data)}
              data-testid="btn-cart"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;