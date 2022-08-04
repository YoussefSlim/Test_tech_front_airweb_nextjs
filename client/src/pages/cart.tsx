import { useContext } from 'react';

import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { IconCart } from '@/assets/icons';
import { CartContext } from '@/contexts';
import { convertPrice, totalCart } from '@/utils';

export default function Cart() {
  const { t } = useTranslation('cart');
  const { products } = useContext(CartContext);
  const totalPrice = totalCart(products);

  return (
    <div className="  flex flex-col space-y-6">
      <div className="flex flex-row gap-4 items-center text-black">
        <IconCart />
        <span className="font-bold whitespace-nowrap text-[#08104D] ">{t`YOUR_BASKET`}</span>
      </div>
      <ul className="space-y-6">
        {products?.map((p) => (
          <li key={p.id} className="flex flex-row justify-between">
            <h3>{p.label}</h3>
            <span className="font-bold">{convertPrice(p.price)}€</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-between mb-[40px] bg-white   border border-[#08104D] text-[#08104D] font-bold p-3 rounded-[4px]">
        <p>{t`TOTAL`}</p>
        <span className="font-bold">{totalPrice} €</span>
      </div>
      <Link href="/delivery">
        <a>
          <button
            className="
        flex
        ml-auto
             bg-[#08104D]
             p-[10px]
          rounded-[4px]
          border
          text-white
          uppercase
          hover:text-[#08104D] hover:border-[#08104D]
          hover:bg-white
          transition
          duration-500
          "
            type="button"
          >
            {t`GO_TO_PAYMENT`}
          </button>
        </a>
      </Link>
    </div>
  );
}
