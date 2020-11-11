import React from 'react';
import FreshChat from 'react-freshchat';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Card from './Components/Card';

function App() {
  return (
    <div>
      <Navbar />
      <h3 className="mt-5 text-danger font-weight-bold p-5">Ezeehousing Chat  App Content</h3>
      <Card />
      <FreshChat
        token='301abe17-bd46-49cc-af1f-5945434f3312'
        email="saket@ezeehousing"
        first_name="Saket"
      />
      <Footer />
    </div>
  )
}

export default App
