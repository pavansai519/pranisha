import React, { useState } from 'react';
import Accordion from "../../lib/Accordion";
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
import Product1 from '../../assets/images/resource/products/1.jpg';
import Product2 from '../../assets/images/resource/products/2.jpg';
import Product3 from '../../assets/images/resource/products/3.jpg';

function Checkout() {
    // State for managing form inputs  Checkout Form Code Start
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        orderNotes: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here (e.g., send to an API or log it)
        console.log(formData);
    };
    // Checkout Form Code End

    return (
        <>
            <Header />
            <PageTitle
                title="Checkout"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/checkout', title: 'Shop' },
                ]}
            />
            <section>
                <div className="container pt-70">
                    <div className="section-content">
                         <form id="checkout-form" onSubmit={handleSubmit}>
                            <div className="row mt-30">
                                <div className="col-md-6">
                                    <div className="billing-details">
                                        <h3 className="mb-30">Billing Details</h3>
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="checkuot-form-fname">First Name</label>
                                                <input
                                                    id="checkuot-form-fname"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    name="firstName"
                                                    defaultValue={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="checkuot-form-lname">Last Name</label>
                                                <input
                                                    id="checkuot-form-lname"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    name="lastName"
                                                    defaultValue={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label htmlFor="checkuot-form-cname">Company Name</label>
                                                    <input
                                                        id="checkuot-form-cname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Company Name"
                                                        name="companyName"
                                                        defaultValue={formData.companyName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="checkuot-form-email">Email Address</label>
                                                    <input
                                                        id="checkuot-form-email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email Address"
                                                        name="email"
                                                        defaultValue={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="checkuot-form-address">Address</label>
                                                    <input
                                                        id="checkuot-form-address"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Street address"
                                                        name="address"
                                                        defaultValue={formData.address}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Apartment, suite, unit etc. (optional)"
                                                        name="apartment"
                                                        defaultValue={formData.apartment}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="checkuot-form-city">City</label>
                                                <input
                                                    id="checkuot-form-city"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="City"
                                                    name="city"
                                                    defaultValue={formData.city}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label>State/Province</label>
                                                <select
                                                    className="form-control"
                                                    name="state"
                                                    defaultValue={formData.state}
                                                    onChange={handleChange}
                                                >
                                                    <option>Select State/Province</option>
                                                    <option>Australia</option>
                                                    <option>UK</option>
                                                    <option>USA</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="checkuot-form-zip">Zip/Postal Code</label>
                                                <input
                                                    id="checkuot-form-zip"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Zip/Postal Code"
                                                    name="zip"
                                                    defaultValue={formData.zip}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label>Country</label>
                                                <select
                                                    className="form-control"
                                                    name="country"
                                                    defaultValue={formData.country}
                                                    onChange={handleChange}
                                                >
                                                    <option>Select Country</option>
                                                    <option>Australia</option>
                                                    <option>UK</option>
                                                    <option>USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3>Additional Information</h3>
                                    <label htmlFor="order_comments" className="">
                                        Order Notes&nbsp;<span className="optional">(optional)</span>
                                    </label>
                                    <textarea
                                        id="order_comments"
                                        className="form-control"
                                        placeholder="Notes about your order, e.g. special notes for delivery."
                                        rows="3"
                                        name="orderNotes"
                                        defaultValue={formData.orderNotes}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-md-12 mt-30">
                                    <h3>Your Order</h3>
                                    <table className="table table-striped table-bordered tbl-shopping-cart">
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Product Name</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="/products-details">
                                                        <img alt="product" src={Product1} />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <a href="/products-details">Delivery paper box</a> x 2
                                                </td>
                                                <td>
                                                    <span className="amount">$36.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="/products-details">
                                                        <img alt="product" src={Product2} />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <a href="/products-details">Refrigerator box</a> x 3
                                                </td>
                                                <td>
                                                    <span className="amount">$115.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="/products-details">
                                                        <img alt="product" src={Product3} />
                                                    </a>
                                                </td>
                                                <td className="product-name">
                                                    <a href="/products-details">Delivery small box</a> x 1
                                                </td>
                                                <td>
                                                    <span className="amount">$68.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Cart Subtotal</td>
                                                <td>&nbsp;</td>
                                                <td>$180.00</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping and Handling</td>
                                                <td>&nbsp;</td>
                                                <td>Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <td>Order Total</td>
                                                <td>&nbsp;</td>
                                                <td>$250.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-12 mt-60">
                                    <div className="payment-method">
                                        <h3>Choose a Payment Method</h3>
                                        {/* Accordion Component */}
                                        <Accordion />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <BackToTop />
            <Footer />
        </>
    );
}

export default Checkout;
