import Button from "../../components/Button"
import CartCalculation from "./CartCalculation"
import './Cart.css'
import CartItems from "./CartItems"

const Cart = () => {
  return (
    <div style={{minHeight:'90vh'}}  className="p-5 container">

      <h2 className="m">Cart</h2>
      <CartItems />
      <CartItems />
      <CartItems />
      <CartCalculation />
      <Button text="Proceed to checkout" />

    </div>
  )
}

export default Cart