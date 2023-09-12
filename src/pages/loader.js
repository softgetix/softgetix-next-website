import React from 'react'

import { Puff } from  'react-loader-spinner'

const Loader = () => {
  const portalstyle = { backgroundColor : "white" , height: "100vh"}
  const style = { position: "fixed", top: "100%", left: "50%", transform: "translate(-50%, -50%)", height:"100vh"};
return(
  <div className='portal_div' style={portalstyle}>
    <div style={style}>
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#fa7169"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      </div>
  </div>
  ) 


}



export default Loader;