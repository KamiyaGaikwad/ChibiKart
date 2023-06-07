import loader from "../assets/hanji.gif";

export const LoadingComponent = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <img src={loader} alt="Loading" style={{width:'300px'}}/>
    </div>
  );
};
