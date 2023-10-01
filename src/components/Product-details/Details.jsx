import React, { useContext, useState } from 'react';
import './Details.css'
import { json, useLoaderData } from 'react-router-dom';
import { FaStar, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaMinus, FaPlus, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';

const Details = () => {

    const [item, setItem] = useState(1);
    const { user } = useContext(AuthContext);
    //console.log(user);

    const product = useLoaderData();
    //console.log(product);
    const { _id, name, img, price } = product;

    const handleOrder = () => {
        //console.log('add button ');

        const order = {
            productId: _id,
            productName: name,
            email: user.email,
            price,
            img,
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.acknowledged) {
                    alert('order placed')
                }
            })

    }

    return (
        <div className='product-info-wrapper container mx-auto'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h2>{name}</h2>
                <div className='star'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <p>4 Review</p>
                </div>
                <h3 className='product-price'>${price}</h3>
                <div className='product-descrition'>
                    <div className='product-brand-link'>
                        <div className='brand-info'>
                            <h2>Brand:Cocacola</h2>
                        </div>
                        <div className='product-share-link'>
                            <h2>Share item:</h2>
                            <div className="share-icon">
                                <a className="" href=""><FaFacebookF /></a>
                                <a className="" href=""><FaInstagram /></a>
                                <a className="" href=""><FaLinkedinIn /></a>
                                <a className="" href=""><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
                </div>

                <div className='product-cart-section'>
                    <div className='product-quantity'>
                        <button onClick={() => { if (item > 0) { setItem((item) => item - 1) } }}><FaMinus /></button>
                        <p>{item}</p>
                        <button onClick={() => setItem((item) => item + 1)}><FaPlus /></button>
                    </div>
                    <div onClick={handleOrder} className='add-to-cart-button'>
                        <p>Add to Cart <span><FaShoppingCart /></span></p>
                    </div>
                    <div className='wishlist-button'>
                        <FaRegHeart></FaRegHeart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;