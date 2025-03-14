import blender from '../assets/blender.jpg';

const ProductCard = ({
  title,
  price,
  image,
  description,
  padding='5px',
  border='1px solid #ddd',
  marginBottom='5px',
  imgBorder,
  className="flex-column",
}) => {
  return (
    <div className='product-card'>
      <div
        style={{ width: '200px', fontSize: '12px', height:'auto', border: border }}
        className="border overflow-hidden"
      >
        <img style={{border: imgBorder}} src={image} alt="" />
        <div className={className} style={{ padding: padding }}>
          <small style={{ marginBottom: marginBottom }}>{title}</small>
          
          <small>{description}</small>
          <small>{price}</small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
