import ShopForm from "./ShopForm"

const ShopOpeningSection = () => {
  return (
    <div className="shop-section w-70">
        <div className="shop-header p-3">
          <h3 className="text-center p-2">Shop Preferences</h3>
          <p className="text-center pb-3">
            Let's get started! Tell us more about your Shop
          </p>
        </div>
        <ShopForm />
      </div>
  )
}

export default ShopOpeningSection