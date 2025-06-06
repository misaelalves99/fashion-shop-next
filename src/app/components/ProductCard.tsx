// app/components/ProductCard.tsx

'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';
import type { ProductCardProps } from '../types/product';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    // Removido o redirecionamento para /cart
  };

  return (
    <div className="group relative transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="w-full p-4">
        {/* Imagem do produto */}
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={product.img}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Título */}
        <h2 className="mt-4 text-lg font-semibold text-center text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Avaliação */}
        <div className="text-center text-yellow-500 text-sm mt-1">
          ⭐⭐⭐⭐⭐ {product.rating}
        </div>

        {/* Preço antigo e desconto */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
          <span className="line-through">
            {product.priceOld.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <span className="text-green-600 font-medium">{product.discount}</span>
        </div>

        {/* Preço atual e botão */}
        <div className="mt-4 flex justify-between items-center bg-cyan-500 px-4 py-2 rounded-lg">
          <span className="text-white font-bold text-lg">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-white text-cyan-600 hover:bg-cyan-100 p-2 rounded-full transition duration-300 cursor-pointer"
            title="Adicionar ao carrinho"
          >
            <PiShoppingCartSimpleBold className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
