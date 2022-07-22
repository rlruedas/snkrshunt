import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/homepage/homepage'
import Products from './components/products'
import ProductItem from './components/products/item'
import About from './components/about/index'

function App() {
  return (
    <>
      <Suspense fallback={<div className='font-Montserrat text-white'>Loading...</div>}>
        <div className='relative h-screen w-screen bg-[#DCBA62] overflow-x-hidden '>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<Products />}/>
            <Route path="/products/:id/:category" element={<Products />}/>
            <Route path="/products/item/:id" element={<ProductItem />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}


export default App;
