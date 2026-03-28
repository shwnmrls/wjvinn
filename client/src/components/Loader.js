import React from 'react';
import RingLoader from "react-spinners/RingLoader";

function Loader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <RingLoader
        color= 'pink'
        loading={true}
        size={100}
      />
    </div>
  )
}

export default Loader