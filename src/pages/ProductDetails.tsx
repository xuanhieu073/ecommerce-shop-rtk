import { useGetProductByIdQuery } from '@services/product';
import { useAppDispatch } from '@store';
import { addToCart } from '@store/slice/cart';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(id!);
  const dispatch = useAppDispatch();

  function addToCartHandler() {
    dispatch(addToCart(product!));
  }

  if (isLoading) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  if (product) {
    const { image, title, price, description } = product;
    return (
      <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto">
          {/* iamge & text wrapper */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-x-32">
            {/* image */}
            <div>
              <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-left max-w-[600px]">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                $ {price}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={addToCartHandler}
                className="bg-gray-900 py-4 px-8 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else return null;
}

export default ProductDetails;
