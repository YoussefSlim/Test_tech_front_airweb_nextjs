import { useContext } from 'react';

import Link from 'next/link';

import { IconCart, IconSearch, Logo } from '@/assets/icons';
import { CartContext } from '@/contexts';

export function Header() {
  const { products } = useContext(CartContext);

  return (
    <header className="flex items-center sticky top-0 h-12 z-20 bg-[#F7F7F7] px-2">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <div className="flex w-[58px] h-7 ml-auto">
        <div className="w-[29px] cursor-pointer hover:scale-[1.03]">
          <IconSearch />
        </div>
        <div className="relative flex items-center w-[29px] cursor-pointer transition ease duration-300">
          <Link href="/">
            <a className="w-[29px] primary-text-color cursor-pointer hover:scale-[1.03]">
              {products.length > 0 && (
                <div className="flex justify-center items-center absolute top-[13px] right-0 h-4 min-w-[16px]  primary-bg-color rounded-full z-30 text-white">
                  <span className="text-xs font-bold">{products.length}</span>
                </div>
              )}
              <IconCart />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
