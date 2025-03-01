import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import Isotope from 'isotope-layout';
import ProductImage1 from '../../assets/images/resource/products/1.jpg';
import ProductImage2 from '../../assets/images/resource/products/2.jpg';
import ProductImage3 from '../../assets/images/resource/products/3.jpg';
import ProductImage4 from '../../assets/images/resource/products/4.jpg';
import ProductImage5 from '../../assets/images/resource/products/5.jpg';
import ProductImage6 from '../../assets/images/resource/products/6.jpg';
import ProductImage7 from '../../assets/images/resource/products/7.jpg';
import ProductImage8 from '../../assets/images/resource/products/8.jpg';

export default function PortfolioFilter1() {
  	const isotopeContainer = useRef(null);
  	const [filterKey, setFilterKey] = useState("*");
  	const isotopeInstance = useRef(null);

  	useEffect(() => {
	    if (isotopeContainer.current) {
	      isotopeInstance.current = new Isotope(isotopeContainer.current, {
	        itemSelector: ".masonry-item",
	        layoutMode: "masonry",
	        percentPosition: true,
	        masonry: {
	          columnWidth: ".masonry-item",
	        },
	        animationOptions: {
	            duration: 750,
	            easing: "linear",
	            queue: false,
	        },
	      });
	    }

    	return () => {
      		isotopeInstance.current?.destroy();
    	};
  	}, []);

  	useEffect(() => {
	    if (isotopeInstance.current) {
	      	isotopeInstance.current.arrange({
	        	filter: filterKey === "*" ? "*" : `.${filterKey}`,
	      	});
	    }
  	}, [filterKey]);

    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };
    
    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter");

    return (
    <div>
	    {/* Filter Buttons */}
      <div className="filters clearfix">
          <ul className="filter-tabs filter-btns clearfix">
              <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}> All </li>
              <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Trends</li>
              <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Business</li>
              <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Cargo</li>
              <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Delivery</li>
              <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Transport</li>
          </ul>
      </div>

      {/* Products Grid */}
      <div className="items-container row" ref={isotopeContainer}>
        {[
          { id: 1, img: ProductImage1, name: "Headphone", price: 32, category: "cat-2" },
          { id: 2, img: ProductImage2, name: "Luggage", price: 52, category: "cat-1 cat-2" },
          { id: 3, img: ProductImage3, name: "Watch", price: 42, category: "cat-1 cat-2 cat-4" },
          { id: 4, img: ProductImage4, name: "Headset", price: 22, category: "cat-1 cat-3" },
          { id: 5, img: ProductImage5, name: "Battery", price: 34, category: "cat-1 cat-3 cat-5" },
          { id: 6, img: ProductImage6, name: "Charger", price: 25, category: "cat-2 cat-3 cat-4" },
          { id: 7, img: ProductImage7, name: "USB Cable", price: 20, category: "cat-1 cat-2 cat-5" },
          { id: 8, img: ProductImage8, name: "SD Card", price: 40, category: "cat-1 cat-4 cat-5" },
        ].map((product) => (
          <div
            key={product.id}
            className={`product-block masonry-item small-column all ${product.category} product lenses mb-50 col-lg-3 col-md-6 col-sm-12`}
          >
            <div className="inner-box">
              <div className="image-box">
                <div className="image">
                  <Link to="/products-details">
                    <img src={product.img} alt={product.name} />
                  </Link>
                </div>
                <div className="icon-box">
                  <Link to="/products-details" className="ui-btn">
                    <i className="fa fa-heart"></i>
                  </Link>
                  <Link to="/cart" className="ui-btn">
                    <i className="fa fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h4>
                  <Link to="/products-details">{product.name}</Link>
                </h4>
                <span className="price">${product.price}.00</span>
                <span className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}
