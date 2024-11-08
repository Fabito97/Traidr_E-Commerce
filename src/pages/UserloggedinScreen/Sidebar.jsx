export const Sidebar = () => {
  return (
    <aside className="sidebar mt-2">
      <div className="">
        <h1 className="mt-4 mb-3">Categories</h1>
        <h3 className="mb-3">Filters</h3>
        <div className="filter mb-3">
          <h4 className="mb-2">Deals</h4>
          {/* Add checkbox filters */}
          <label>
            <input className="mb-2" type="checkbox" /> Home Appliances
          </label>
          <br></br>
          <label>
            <input className="mb-2" type="checkbox" /> Antiques
          </label>
          <br></br>
          <label>
            <input className="mb-2" type="checkbox" /> Furniture
          </label>
          {/* Add more filters similarly */}
        </div>
        <div className="filter mb-3">
          <h4 className="mb-2">Price</h4>
          <label>
            <input className="mb-2" type="checkbox" /> Less than N25,000
          </label>
          <br></br>
          <label>
            <input className="mb-2" type="checkbox" /> N15,000 - N25,000
          </label>
          <br></br>
        </div>
        <div className="filter">
          <h4 className="mb-2">Colour</h4>
          <label>
            <input className="mb-2" type="radio" name="color" /> Green
          </label>
          <br></br>
          <label>
            <input className="mb-2" type="radio" name="color" /> Blue
          </label>
        </div>
      </div>
    </aside>
  );
};
