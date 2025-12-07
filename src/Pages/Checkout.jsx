import React, { useContext } from 'react';
import './CSS/Checkout.css';
import { ShopContext } from '../Context/ShopContext';
import { currency } from '../config';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { getTotalCartAmount, cartItems, products } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        toast.success("Order Placed Successfully!");
    }

    return (
        <div className='checkout'>
            <div className="checkout-left">
                <h2>Shipping Details</h2>
                <form className="checkout-form" onSubmit={handlePlaceOrder}>
                    <div className="checkout-form-group">
                        <label>Full Name</label>
                        <input type="text" required placeholder="John Doe" />
                    </div>
                    <div className="checkout-form-row">
                        <div className="checkout-form-group">
                            <label>Email</label>
                            <input type="email" required placeholder="john@example.com" />
                        </div>
                        <div className="checkout-form-group">
                            <label>Phone Number</label>
                            <input type="tel" required placeholder="+1 234 567 890" />
                        </div>
                    </div>
                    <div className="checkout-form-group">
                        <label>Address Line 1</label>
                        <input type="text" required placeholder="Street address" />
                    </div>
                    <div className="checkout-form-group">
                        <label>Address Line 2</label>
                        <input type="text" placeholder="Apartment, suite, etc. (optional)" />
                    </div>
                    <div className="checkout-form-row">
                        <div className="checkout-form-group">
                            <label>City</label>
                            <input type="text" required />
                        </div>
                        <div className="checkout-form-group">
                            <label>State</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <div className="checkout-form-row">
                        <div className="checkout-form-group">
                            <label>Pincode</label>
                            <input type="text" required />
                        </div>
                        <div className="checkout-form-group">
                            <label>Country</label>
                            <input type="text" required />
                        </div>
                    </div>
                    <button type="submit" className="checkout-btn">PLACE ORDER</button>
                </form>
            </div>

            <div className="checkout-right">
                <h2>Order Summary</h2>
                <div className="checkout-summary">
                    {products.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div key={e.id} className="checkout-summary-item">
                                    <p>{e.name} (x{cartItems[e.id]})</p>
                                    <p>{currency}{e.new_price * cartItems[e.id]}</p>
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className="checkout-summary-item">
                        <p>Subtotal</p>
                        <p>{currency}{totalAmount}</p>
                    </div>
                    <div className="checkout-summary-item">
                        <p>Shipping Cost</p>
                        <p>Free</p>
                    </div>
                    <div className="checkout-summary-total">
                        <h3>Total Amount</h3>
                        <h3>{currency}{totalAmount}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;
