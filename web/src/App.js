import './App.css';
import StripeContainer from './components/StripeContainer';
import { useState } from 'react';


function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App">
      <h1>Plunger Store</h1>
      {
        showItem ? 
        <StripeContainer/> :
        <>
            <h3>$10.00</h3>
            <img src="https://product-images.metro.ca/images/h1b/h78/9531757527070.jpg" alt="plunger" />
            <button onClick={ ()=> setShowItem(true) }>Purchase</button>
        </>
      }
    </div>
  );
}

export default App;
