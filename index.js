export default function Home() {
  return (
    <div className="container">
      <header className="navbar">
        <h1>KAVYA CLOTHES ENTERPRISE</h1>
        <nav>
          <a>About</a>
          <a>Contact</a>
          <a>Login</a>
          <a>Profile</a>
          <a className="cart">Cart</a>
        </nav>
      </header>

      <section className="hero">
        <h2>New Season, New Style</h2>
        <p>Discover the latest trends in fashion for Men, Women, and Kids. Shop the best quality clothes at Kavya Clothes Enterprise.</p>
        <button className="primary">Shop Now</button>
      </section>

      <section className="categories">
        <h3>Shop by Category</h3>
        <div className="grid">
          <div className="card"><img src="/placeholder-1.jpg" /><h4>Men's Wear</h4></div>
          <div className="card"><img src="/placeholder-2.jpg" /><h4>Women's Wear</h4></div>
          <div className="card"><img src="/placeholder-3.jpg" /><h4>Kids Collection</h4></div>
        </div>
      </section>

      <section className="featured">
        <h3>Featured Products</h3>
        <div className="grid products">
          {[1,2,3,4].map(i => (
            <div className="product" key={i}>
              <img src={`/product-${i}.jpg`} />
              <h4>Trendy Outfit {i}</h4>
              <p className="price">₹ 999</p>
              <div className="actions">
                <button className="btn">Add to Cart</button>
                <button className="btn outline">Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="offers">
        <h3>Special Offers & Coupons</h3>
        <div className="grid offers-grid">
          <div className="offer">
            <h4>KAVYA20 - Flat 20% OFF</h4>
            <p>Use code at checkout</p>
          </div>
          <div className="offer">
            <h4>FREE SHIPPING</h4>
            <p>On orders above ₹1499</p>
          </div>
        </div>
      </section>

      <section className="blog">
        <h3>Fashion Blog</h3>
        <div className="grid">
          <div className="post"><img src="/blog-1.jpg" /><h4>Top 5 Trends for 2025</h4></div>
          <div className="post"><img src="/blog-2.jpg" /><h4>How to Style Ethnic Wear</h4></div>
          <div className="post"><img src="/blog-3.jpg" /><h4>Winter Collection Sneak Peek</h4></div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 KAVYA CLOTHES ENTERPRISE. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
