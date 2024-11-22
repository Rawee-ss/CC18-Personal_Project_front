import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react';
import { deleteItemCart, getCart } from '../../../api/CartApi';
import { getAccessToken } from '../../../utils/LocalStorage';


const CardinProductCart = ({ setTotal, setCartItems }) => {


    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCart = async () => {
            const token = getAccessToken();
            const resp = await getCart(token);
            // console.log(resp.data.cartItem);
            setCart(resp.data.cartItem);
            setCartItems(resp.data.cartItem)

            const totalPrice = resp.data.cartItem.reduce((acc, el) => {
                return acc + el.price;
            }, 0);

            setTotal(totalPrice);
        };

        fetchCart();
    }, []);

    const hdlDeleteItem = async (itemId) => {
        try {
            const token = getAccessToken();
            await deleteItemCart(token, itemId);
            setCart(prevCart => {
                const updatedCart = prevCart.filter(item => item.id !== itemId);

                const newTotalPrice = updatedCart.reduce((acc, el) => {
                    return acc + el.price;
                }, 0);

                setTotal(newTotalPrice);

                return updatedCart;
            });
        } catch (error) {
            console.error("Failed to delete item:", error);
        }
    };

    return (
        <div className="flex flex-col justify-between p-8">
            {cart?.map((item, index) => (

                <div key={index} className="w-full">

                    <div className="flex h-36 items-center ml-10 p-4 rounded-lg mb-4 shadow-md bg-slate-50">


                        <img className="w-24 h-24 rounded-lg object-cover"
                            src={item.products.image}
                            alt={item.products.name}
                        />

                        <div className="ml-4 flex-1">
                            <h2 className="text-lg font-semibold mb-5 text-blue-900">{item.products.name}</h2>
                            <p className="text-gray-500">฿ {item.price}</p>
                        </div>
                        <button className="text-gray-400 hover:text-red-600" onClick={() => hdlDeleteItem(item.id)}><Trash2 /></button>
                    </div>

                </div>
            ))}
        </div>
    );
};



export default CardinProductCart
