const Button = ({
  color = '#fff',
  background = '#E04F16',
  border = '1px solid #E04F16',
  padding = '8px 10px',
  text = 'Save and continue',
  borderRadius,
  className,
  handleClick
}) => {
  
  const style = {
    background,
    border,
    color,
    padding,
    borderRadius 
  };

  return <button onClick={handleClick} className={className} style={style}>{text}</button>;
};

export default Button;
