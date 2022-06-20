import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;