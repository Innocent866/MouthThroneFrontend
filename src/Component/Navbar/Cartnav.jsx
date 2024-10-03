import React from 'react';

const Cartnav = () => {
  const cartItems = [
    { image: 'assets/images/product/default/home-1/default-1.jpg', link: '#', name: 'Car Wheel', quantity: 1, price: '$49.00' },
    { image: 'assets/images/product/default/home-2/default-1.jpg', link: '#', name: 'Car Vails', quantity: 3, price: '$500.00' },
    { image: 'assets/images/product/default/home-3/default-1.jpg', link: '#', name: 'Shock Absorber', quantity: 1, price: '$350.00' },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div>
      {/* Start Offcanvas Addcart Section */}
      <div id="offcanvas-add-cart" className={`${styles.offcanvas} ${styles.offcanvasRightside} ${styles.offcanvasAddCartSection}`}>
        {/* Start Offcanvas Header */}
        <div className={styles.offcanvasHeader}>
          <button className={styles.offcanvasClose}>
            <i className="ion-android-close"></i>
          </button>
        </div> {/* End Offcanvas Header */}

        {/* Start Offcanvas Addcart Wrapper */}
        <div className={styles.offcanvasAddCartWrapper}>
          <h4 className={styles.offcanvasTitle}>Shopping Cart</h4>
          <ul className={styles.offcanvasCart}>
            {cartItems.map((item, index) => (
              <CartItem 
                key={index} 
                image={item.image} 
                link={item.link} 
                name={item.name} 
                quantity={item.quantity} 
                price={item.price} 
              />
            ))}
          </ul>
          <div className={styles.cartTotalPrice}>
            <span className={styles.cartTotalPriceText}>Subtotal:</span>
            <span className={styles.cartTotalPriceValue}>${totalPrice.toFixed(2)}</span>
          </div>
          <ul className={styles.cartActionButton}>
            <li><a href="cart.html" className="btn btn-block btn-golden">View Cart</a></li>
            <li><a href="compare.html" className="btn btn-block btn-golden mt-5">Checkout</a></li>
          </ul>
        </div> {/* End Offcanvas Addcart Wrapper */}
      </div> {/* End Offcanvas Addcart Section */}
    </div>
  );
};

export default Cartnav;
