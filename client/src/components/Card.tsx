import { CartAdd } from '@/assets/icons';
import { Product } from '@/types';
import { convertPrice } from '@/utils';

export function Card(props: Product) {
  // eslint-disable-next-line camelcase
  const { description, label, price, thumbnail_url } = props;

  return (
    <article className="relative w-[386px] bg-white rounded-xl shadow-lg md:w-[403px] p-[10px] flex md:flex-col justify-between">
      <div className="flex space-x-[18px]">
        <img
          alt={label}
          className="clip-circle w-[60px] h-[60px]"
          // eslint-disable-next-line camelcase
          src={thumbnail_url || '/not-found.jpg'}
        />
        <div className="">
          <h3 className="text-md font-bold w-48 whitespace-nowrap overflow-hidden text-ellipsis text-black mb-4">
            {label}
          </h3>
          <p className="line-clamp-3 w-[210px] transition-all md:w-full">{description}</p>
        </div>
      </div>

      <div className="flex self-end bg-color-price whitespace-nowrap font-bold md:h-[38px] md:row md:w-full md:justify-between md:items-center mt-[22px]">
        <span className="absolute flex justify-center items-center top-0 right-0  p-[10px] bg-gray-300 rounded-tr-[4px] rounded-bl-[4px] md:static md:rounded-[10px] md:h-full">
          {convertPrice(price)}€
        </span>
        <button
          className="bg-[#08104D] rounded-[10px] border text-white hover:text-[#08104D] hover:border-[#08104D] hover:bg-white transition duration-500 self-end"
          type="button"
        >
          <div className="flex flex-row items-center justify-center uppercase font-bold w-[36px] h-[29px] rounded-[4px] md:w-[193px] md:h-[38px] md:row md:justify-around ">
            <CartAdd />
            <span className="hidden md:block text-sm">Ajouter Au panier</span>
          </div>
        </button>
      </div>
    </article>
  );
}
