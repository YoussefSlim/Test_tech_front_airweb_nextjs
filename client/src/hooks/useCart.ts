import { useCallback, useEffect, useState } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { toast } from 'react-toastify';

import { Product } from '@/types';

export const useCart = () => {
  const { t } = useTranslation('home');

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const initialValue = localStorage.getItem('items');
    setProducts(initialValue ? JSON.parse(initialValue) : []);
  }, []);

  const toggleAddProductToCart = useCallback(
    (product: Product) => () => {
      const isInCart = products.some((p) => p.id === product.id);

      setProducts((prevProducts) => {
        let newState;
        if (isInCart) {
          toast.info(t`PRODUCT_REMOVED`);
          newState = prevProducts.filter((p) => p.id !== product.id);
          prevProducts.filter((p) => p.id !== product.id);
          localStorage.setItem('items', JSON.stringify(newState));

          return newState;
        }

        toast.success(t`PRODUCT_ADDED`);
        newState = [...prevProducts, product];
        localStorage.setItem('items', JSON.stringify(newState));

        return newState;
      });
    },
    [products, t]
  );

  return {
    products,
    toggleAddProductToCart,
  };
};
