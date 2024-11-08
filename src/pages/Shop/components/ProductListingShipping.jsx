import FormGroup from '../../../components/FormGroup';

const ProductListingShipping = ({
  setDeliveryTime,
  setShippingFee,
  setShippingServices,
  deliveryTime,
  shippingFee,
  shippingServices,
}) => {
  const handleShippingFeeChange = (e) => {
    const input = e.target.value.replace(/[^0-9.]/g, ''); // Restrict to numeric input
    setShippingFee(input);
  };

  return (
    <div className="m-3 mb-5 border p-5 product-shipping">
      <div className="">
        <div className="pb-2">
          <h3 className="mb-1">Shipping</h3>
          <p className="faint">
            Give shoppers a clear expectation about delivery time and cost by
            ensuring your shipping info is accurate, including the shipping
            profile and your order processing schedule. You can make updates
            anytime in Shipping Settings.
          </p>
        </div>

        <FormGroup htmlFor="deliveryTime" label="Average Delivery Time">
          <input
            id="deliveryTime"
            type="number"
            placeholder="3 days"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(Number(e.target.value))}
          />
        </FormGroup>

        <FormGroup htmlFor="shippingFee" label="Shipping Prices">
          <input
            id="shippingFee"
            placeholder="NGN"
            type="text"
            value={shippingFee}
            onChange={handleShippingFeeChange}
          />
        </FormGroup>

        <FormGroup htmlFor="shippingServices" label="Shipping Services">
          <input
            id="shippingServices"
            type="text"
            placeholder="Dispatch Rider"
            value={shippingServices}
            onChange={(e) => setShippingServices(e.target.value)}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default ProductListingShipping;
