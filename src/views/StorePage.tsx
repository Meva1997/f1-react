import { useState } from "react";
import { ImCart } from "react-icons/im";
import {toast} from "react-toastify";
import { products } from "../data/dbProduct";
import type { Product } from "../types";

export default function StorePage() {
  const [cart, setCart] = useState<Product[]>([]); // Estado del carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para abrir/cerrar el modal del carrito

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <section className="min-h-screen px-4 py-10 text-white bg-zinc-950 md:px-12">
      <h2 className="mb-10 text-3xl font-bold text-center md:text-4xl">
        🛒 F1 Merchandise Store
      </h2>

      {/* Botón para abrir el carrito */}
      <div className="flex justify-end mb-6 text-right">
        <button
          onClick={toggleCart}
          className="flex items-center gap-2 px-4 py-2 font-semibold bg-red-600 hover:bg-red-700 rounded-xl"
        >
         <ImCart /> View Cart ({cart.length})
        </button>
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 transition border shadow-md bg-zinc-900 border-zinc-700 rounded-xl hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-56 mb-4 rounded-md"
            />
            <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
            <p className="mb-4 text-lg font-bold text-red-500">${product.price} USD</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-4 py-2 font-semibold bg-red-600 hover:bg-red-700 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal del carrito */}
      {isCartOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl">
        <div className="w-full max-w-lg p-6 overflow-y-scroll shadow-lg h-[500px] bg-zinc-900 rounded-xl ">
          <h3 className="mb-4 text-2xl font-bold">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-zinc-800"
                >
                  <div>
                    <h4 className="text-lg font-semibold">{product.name}</h4>
                    <p className="font-bold text-red-500">${product.price} USD</p>
                    <img src={product.image} alt={product.name} className="h-16 mt-2 rounded-md w-28" />
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="font-bold text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 text-right">
            <button
              onClick={toggleCart}
              className="px-4 py-2 font-semibold bg-gray-700 cursor-pointer hover:bg-gray-800 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
    </section>
  );
}