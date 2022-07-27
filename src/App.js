import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import ProductsPage from './pages/products'
import ProductItem from './pages/item'
import About from './pages/about'

function App() {
  return (
    <>
      <Suspense fallback={<div className='font-Montserrat text-white'>Loading...</div>}>
        <div className='relative h-screen w-screen bg-[#DCBA62] overflow-x-hidden '>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductsPage />}/>
            <Route path="/products/:id/:category" element={<ProductsPage />}/>
            <Route path="/products/item/:id" element={<ProductItem />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}


export default App;
