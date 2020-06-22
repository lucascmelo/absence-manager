import React from 'react';
import loaderGif from '../assets/images/loader.gif';
const Loader: React.FC = () => (
  <div className='loader'><img src={loaderGif} alt="Loader"/></div>
)

export default Loader;
