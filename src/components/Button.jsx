const Button = ({
  color = '#fff',
  background = '#E04F16',
  border = '1px solid #E04F16',
  text = 'Save and continue',
  className,
  handleClick
}) => {
  
  const style = {
    background: background,
    border: border,
    color: color,
  };

  return <button onClick={handleClick} className={className} style={style}>{text}</button>;
};

export default Button;
