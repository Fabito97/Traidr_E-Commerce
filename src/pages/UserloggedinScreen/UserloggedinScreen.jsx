import './UserloggedinScreen.css'
import fryers from './images/fryer.jpg'
import blender from './images/blender.jpg'
import fruitblender from './images/binatone.jpg'
import alarm from './images/alarm.jpg'
import clipper from './images/clipper.jpg'
import kettle from './images/electrickettle.jpg'
import gamingtv from './images/hpomen.jpg'
import iphone from './images/iphone.jpg'
import nexxus from './images/nexxustv.jpg'
import portablemonitor from './images/portablemonitor.jpg'
import royaltv from './images/royaltv.jpg'
import runningshoe from './images/runningshoe.jpg'
import runningsneaker from './images/runningsneaker.jpg'
import sonixtv from './images/sonixtv.jpg'
import tv from './images/tv.jpg'

const products = [
    { name: "Fryer", price: "N50,000", image: fryers },
    { name: "Blender", price: "N80,000", image: blender },
    { name: "Fruit Blender", price: "N90,000", image: fruitblender },
    { name: "Portable Alarm", price: "N100,000", image: alarm },
    { name: "Clipper", price: "N30,000", image: clipper },
    { name: "Kettle", price: "N35,000", image: kettle },
    { name: "Gaming TV", price: "N35,000", image: gamingtv },
    { name: "Iphone", price: "N350,000,000", image: iphone },
    { name: "Nexus TV", price: "N340,000,000", image: nexxus },
    { name: "Portable Monitor", price: "N280,000", image: portablemonitor },
    { name: "Royal TV", price: "N450,000", image: royaltv },
    { name: "Running Shoe", price: "N90,000", image: runningshoe },
    { name: "Running Sneakers", price: "N720,000", image: runningsneaker },
    { name: "Sonix TV", price: "N500,000", image: sonixtv },
    { name: "TV", price: "N280,000", image: tv }

    // Add more products with dummy data
];

const UserloggedinScreen = () => {
  return (
    <div className='container'>
        <div className='userloggedin-section '>
        
        
        <Sidebar />
        <ProductGrid />
        
        </div>

    </div>
    
    
  )
}

const Sidebar = () => {
    return (
        <aside className="sidebar mt-2">
            <div className=''>
                <h1 className='mt-4 mb-3'>Categories</h1>
                <h3 className='mb-3'>Filters</h3>
                <div className="filter mb-3">
                    <h4>Deals</h4>
                    {/* Add checkbox filters */}
                    <label><input className='mb-1' type="checkbox" /> Home Appliances</label><br></br>
                    <label><input className='mb-1' type="checkbox" /> Antiques</label><br></br>
                    <label><input className='mb-1' type="checkbox" /> Furniture</label>
                    {/* Add more filters similarly */}
                </div>
                <div className="filter mb-3">
                    <h4>Price</h4>
                    <label><input className='mb-1' type="checkbox" /> Less than N25,000</label><br></br>
                    <label><input className='mb-1' type="checkbox" /> N15,000 - N25,000</label><br></br>
                </div>
                <div className="filter">
                    <h4>Colour</h4>
                    <label><input className='mb-1' type="radio" name="color" /> Green</label><br></br>
                    <label><input className='mb-1' type="radio" name="color" /> Blue</label>
                </div>
            </div>
        </aside>
    );
};

const SearchSortBar = () => {
    return (
        <div className="search-sort-bar mb-1">
            <input style={{width:'70%'}} type="text" placeholder="Search for item..." />
            <button>Sort By</button>
        </div>
    );
};

const ProductGrid = () => {
    return (
        
        <section className='mt-5 w-100 product-grid-section'>
                <SearchSortBar />
                <h1 className='p-2 m-0'>Trending Sales</h1>
            <div className="product-grid p-2 ">
                <div className="grid-md">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
};


const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            
            <h4 className='flex align-center justify-between'>{product.name} <button className="like-button">❤️</button></h4>
            <p className='text-left'>{product.price}</p>
        </div>
    );
};


export default UserloggedinScreen