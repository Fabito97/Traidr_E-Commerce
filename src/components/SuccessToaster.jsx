
const SuccessToaster = () => {
  const style = {
    maxWidth: '500px',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '10px',
    margin: '2rem auto',
    background: '#fff',
  };

  return (
    <div
      className=" flex-column justify-center align-center"
      style={{ background: 'rgba(0,0,0,0.2', height: '100vh' }}
    >
      <div className="flex-column align-center text-center" style={style}>
        <h3 className='text-primary'>Items Successfully uploaded</h3>
        <IoPaperPlaneSharp
          style={{
            borderRadius: '50%',
            padding: '10px',
            background: '#f4f4f4',
            fontSize: '5rem',
          }}
          className="text-primary mt-2 mb-2"
        />
        <span className='faint pr-2 pl-2'>Your items have been successfully uploaded to your shop!!</span>
        <Button text='Continue' className={'w-100 mt-1'}/>
      </div>
    </div>
  );
};


export default SuccessToaster