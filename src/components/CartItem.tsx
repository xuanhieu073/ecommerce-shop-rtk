import { CartItem } from '@models/cart';
import { useAppDispatch } from '@store';
import {
  decreaseItemAmount,
  increaseItemAmount,
  removeFromCart,
} from '@store/slice/cart';
import React from 'react';
import { Link } from 'react-router-dom';

type CartItemProps = {
  item: CartItem;
};
function CartItemComponent({ item }: CartItemProps) {
  const { id, title, image, price, amount } = item;
  const dispatch = useAppDispatch();

  function removeFromCartHandler() {
    dispatch(removeFromCart(id));
  }
  function increaseAmountHandler() {
    dispatch(increaseItemAmount(id));
  }
  function decreaseAmountHandler() {
    dispatch(decreaseItemAmount(id));
  }

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="product-image" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-gray-800 hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              className="text-xl cursor-pointer"
              onClick={removeFromCartHandler}
            >
              ❌
            </div>
          </div>
          <div className="flex gap-x-2 h-9 text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-gray-950 font-medium">
              <div
                onClick={decreaseAmountHandler}
                className="flex-1 flex justify-center items-center cursor-pointer select-none"
              >
                ➖
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={increaseAmountHandler}
                className="flex-1 flex justify-center items-center cursor-pointer select-none"
              >
                ➕
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price.toFixed(2)}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-gray-900 font-medium">
              $ {(price * amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CartItemComponent);
