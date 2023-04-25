import { Product } from '@models/product';
import { addToCart } from '@store/slice/cart';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

type ProductProps = {
  product: Product;
};

function ProductComponent({ product }: ProductProps) {
  const { image, id, category, price, title } = product;
  const dispatch = useDispatch();
  function addProductToCartHandler() {
    dispatch(addToCart(product));
  }

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
          {/* Button */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
            <button onClick={addProductToCartHandler}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-400 relative">
                <div className="w-4 h-[2px] bg-white absolute top-1/2 left-1/2 -translate-y-[1px] -translate-x-1/2"></div>
                <div className="w-[2px] h-4 bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[1px]"></div>
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-gray-800 drop-shadow-xl"
            >
              👁️
            </Link>
          </div>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
}

export default ProductComponent;
