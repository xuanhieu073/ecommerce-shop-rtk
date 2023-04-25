import { useAppDispatch, useAppSelector } from '@store';
import { toggleSidebar } from '@store/slice/sidebar';
import CartItemComponent from './CartItem';
import {
  clearCart,
  selectCartCount,
  selectTotalPrice,
} from '@store/slice/cart';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.sidebar);
  const totalPrice = useSelector(selectTotalPrice);
  const cartCount = useSelector(selectCartCount);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  function toggleSidebarHandler() {
    dispatch(toggleSidebar());
  }
  function clearCartHanler() {
    dispatch(clearCart());
  }

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed flex flex-col top-0 h-full md:shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({cartCount})
        </div>
        {/* icon */}
        <div
          onClick={toggleSidebarHandler}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          ➡️
        </div>
      </div>
      <CartList />
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr2">Total:</span>$ {totalPrice.toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCartHanler}
            className="cursor-pointer py-4 bg-red-700 rounded-full text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            🗑️
          </div>
        </div>
        <Link
          className="bg-gray-200 flex p-4 justify-center items-center text-gray-900 w-full font-medium"
          to={'/'}
        >
          View Cart
        </Link>
        <Link
          className="bg-gray-900 flex p-4 justify-center items-center text-white w-full font-medium"
          to={'/'}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

function CartList() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div className="flex flex-col gap-y-2 flex-1 overflow-y-auto border-b">
      {cart.map((item) => (
        <CartItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
