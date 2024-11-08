import './UserloggedinScreen.css';
import fryers from './images/fryer.jpg';
import blender from './images/blender.jpg';
import fruitblender from './images/binatone.jpg';
import alarm from './images/alarm.jpg';
import clipper from './images/clipper.jpg';
import kettle from './images/electrickettle.jpg';
import gamingtv from './images/hpomen.jpg';
import iphone from './images/iphone.jpg';
import nexxus from './images/nexxustv.jpg';
import portablemonitor from './images/portablemonitor.jpg';
import royaltv from './images/royaltv.jpg';
import runningshoe from './images/runningshoe.jpg';
import runningsneaker from './images/runningsneaker.jpg';
import sonixtv from './images/sonixtv.jpg';
import tv from './images/tv.jpg';
import { ProductGrid } from './ProductGrid';
import { Sidebar } from './Sidebar';

export const products = [
  { name: 'Fryer', price: 'N50,000', image: fryers },
  { name: 'Blender', price: 'N80,000', image: blender },
  { name: 'Fruit Blender', price: 'N90,000', image: fruitblender },
  { name: 'Portable Alarm', price: 'N100,000', image: alarm },
  { name: 'Clipper', price: 'N30,000', image: clipper },
  { name: 'Kettle', price: 'N35,000', image: kettle },
  { name: 'Gaming TV', price: 'N35,000', image: gamingtv },
  { name: 'Iphone', price: 'N350,000,000', image: iphone },
  { name: 'Nexus TV', price: 'N340,000,000', image: nexxus },
  { name: 'Portable Monitor', price: 'N280,000', image: portablemonitor },
  { name: 'Royal TV', price: 'N450,000', image: royaltv },
  { name: 'Running Shoe', price: 'N90,000', image: runningshoe },
  { name: 'Running Sneakers', price: 'N720,000', image: runningsneaker },
  { name: 'Sonix TV', price: 'N500,000', image: sonixtv },
  { name: 'TV', price: 'N280,000', image: tv },

  // Add more products with dummy data
];

const UserloggedinScreen = () => {
  return (
    <div className="container">
      <div className="userloggedin-section ">
        <Sidebar />
        <ProductGrid />
      </div>
    </div>
  );
};



export default UserloggedinScreen;
