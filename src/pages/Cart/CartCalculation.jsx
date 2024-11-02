import React from 'react'

const CartCalculation = () => {
  return (
    <div className='p-4 w-50 mb-3 cart-total'>
      <h3 className='mb-2'>Cart Totals</h3>
      <div className='justify-between pb-1 border-b'>
        <p>Subtotal</p>
        <span>480.00</span>
      </div >
      <div className='justify-between pb-1 pt-1 border-b'>
        <p>Shipping Fee</p>
        <span>480.00</span>
      </div>
      <div className='justify-between font-bold pb-1 pt-1'>
        <p>Total</p>
        <span>4800.00</span>
      </div>
    </div>
  )
}

export default CartCalculation