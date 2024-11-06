export const currency = '\u20A6';


export const AddToCart = (cartData) => {
  try {
    console.log(cartData);
    if (!cartData || cartData.length === 0) {
        console.log("Cart data is empty or undefined", cartData);
    } else {
        localStorage.setItem('cartItems', JSON.stringify(cartData));
        console.log('Successfully saved to localStorage:', cartData);
    }
      
  } catch (error) {
      console.log("Error saving to local storage:", error);
  }
}

export const getCartItems = () => {
  try {
      const storedCart = localStorage.getItem('cartItems');
      return storedCart && storedCart != 'undefined' ? JSON.parse(storedCart) : [];

  } catch (error) {
      console.log("Error retrieving cart from local storage:", error);
      return [];
  }
}

export const updateCartItemQuantity = (productId, newQuantity) => {
  try {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const updatedCart = cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
  } catch (error) {
      console.error("Error updating item quantity:", error);
      return [];
  }
};


export const deleteCartItem = (productId, newQuantity) => {
  try {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const remainingCart = cartItems.filter((item) =>
          item.id !== productId 
      );
      localStorage.setItem("cartItems", JSON.stringify(remainingCart));
      return remainingCart;
  } catch (error) {
      console.error("Error updating item quantity:", error);
      return [];
  }
};