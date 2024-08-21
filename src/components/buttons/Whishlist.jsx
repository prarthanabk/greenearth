import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem} from '../redux/actions/index'
import { NavLink } from 'react-router-dom'

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  function addToWishlist(item) {
    setWishlistItems([...wishlistItems, item]);
  }

  function removeFromWishlist(item) {
    const updatedWishlistItems = wishlistItems.filter((wishlistItem) => wishlistItem !== item);
    setWishlistItems(updatedWishlistItems);
  }

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromWishlist(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <h2>Products</h2>
      <ul>
        <li>
          Product A - $50
          <button onClick={() => addToWishlist({ id: 1, name: 'Product A', price: 50 })}>Add to Wishlist</button>
        </li>
        <li>
          Product B - $75
          <button onClick={() => addToWishlist({ id: 2, name: 'Product B', price: 75 })}>Add to Wishlist</button>
        </li>
        <li>
          Product C - $100
          <button onClick={() => addToWishlist({ id: 3, name: 'Product C', price: 100 })}>Add to Wishlist</button>
        </li>
      </ul>
    </div>
  );
}

export default Wishlist;
