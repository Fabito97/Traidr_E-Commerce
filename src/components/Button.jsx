const Button = ({
  color = '#fff',
  background = '#E04F16',
  border = '1px solid #E04F16',
  text = 'Save and continue',
  padding = '8px 25px',
  borderRadius,
  className
}) => {
  
  const style = {
    background,
    border,
    color,
    padding,
    borderRadius 
  };

  return <button className={className} style={style}>{text}</button>;
};

export default Button;
