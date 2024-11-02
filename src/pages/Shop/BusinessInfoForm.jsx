import FormGroup from "../../components/FormGroup"

const BusinessInfoForm = () => {
  return (
    <div className="business-form-section border p-5 mt-5 mb-5">
      <div className="section-header mb-5"> 
        <h3 className="mb-2">Tell us more about your business</h3>
        <p className="faint">Tell the world all about your item and why they'll love it</p>
      </div>
      <div className="grid-bg">
        <div>
          <h3>Legal business address</h3>
          <p className="faint mt-1 w-70">Tell the world all about your item and why they'll love it.</p>
        </div>
        <form>
          <FormGroup label="Country" className={'mb-2'}>
            <input className="w-100 mt-1" type="text" />
          </FormGroup>
          <FormGroup label="Street Address" className={'mb-2'}>
            <input className="w-100 mt-1" type="text" />
          </FormGroup>
          <FormGroup label="State" className={'mb-2'}>
            <input className="w-100 mt-1" type="text" />
          </FormGroup>
          <FormGroup label="Zip Code" className={'mb-2'}>
            <input className="w-50 d-block mt-1" type="text" />
          </FormGroup>
        </form>
      </div>
    </div>
  )
}

export default BusinessInfoForm