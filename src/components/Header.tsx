import { useAppDispatch, useAppSelector } from '@store';
import { toggleSidebar } from '@store/slice/sidebar';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { selectCartCount } from '@store/slice/cart';

function Header() {
  const cartCount = useAppSelector(selectCartCount);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  function toggleSidebarHandler() {
    dispatch(toggleSidebar());
  }

  return (
    <header
      className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6 '}
      fixed w-full z-10 transition-all px-4
    `}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={'/'}>
          <div>
            <img className="w-10" src={logo} alt="" />
          </div>
        </Link>
        {/* cart */}
        <button
          className="flex relative cursor-pointer max-w-[50px]"
          onClick={toggleSidebarHandler}
        >
          <div className="text-2xl">👜</div>
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
            {cartCount}
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
