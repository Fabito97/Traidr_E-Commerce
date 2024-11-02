import FormGroup from "../../components/FormGroup"


const ShopForm = () => {
  return (
        <form className="shop-form grid-bg mb-5">
          <FormGroup label={'Name of Shop'} htmlFor='name'>
            <input placeholder={"Empress Ki"} />
          </FormGroup>

          <FormGroup label={'Currency'} htmlFor='currency'>
            <input placeholder={"NGN"} />
          </FormGroup>

          <FormGroup label={'Category'} htmlFor='category'>
            <select placeholder="select">
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Personal Care">Personal Care</option>
            </select>
          </FormGroup>
        </form>
  )
}




export default ShopForm