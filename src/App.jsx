import { useState } from 'react';
import './App.css'
import { FaCartShopping } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const products = [
    { id: 1, name: 'Áo thun trắng', price: 150000, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab' },
    { id: 2, name: 'Quần jeans xanh', price: 300000, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d' },
    { id: 3, name: 'Tai nghe không dây', price: 500000, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df' },
    { id: 4, name: 'Sạc dự phòng', price: 200000, image: 'https://images.unsplash.com/photo-1706275399524-813e89914e43' },
    { id: 5, name: 'Giày thể thao', price: 450000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { id: 6, name: 'Áo khoác', price: 350000, image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3' },
    { id: 7, name: 'Mũ lưỡi trai', price: 100000, image: 'https://images.unsplash.com/photo-1560774358-d727658f457c' },
    { id: 8, name: 'Đồng hồ thể thao', price: 600000, image: 'https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19' },
    { id: 9, name: 'Ba lô du lịch', price: 400000, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62' },
    { id: 10, name: 'Kính râm thời trang', price: 250000, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f' },
    { id: 11, name: 'Bình nước giữ nhiệt', price: 180000, image: 'https://images.unsplash.com/photo-1648919725390-1eec35fdf32c' },
    { id: 12, name: 'Ốp lưng điện thoại', price: 80000, image: 'https://images.unsplash.com/photo-1593055454503-531d165c2ed8' },
];

function App() {
  const [openCart, setOpenCart] = useState(false)
  const [choosenProducts, setChoosenProducts] = useState([])
  const handleAddCart = (product) => {
    setChoosenProducts((prevItems) => {
      const existItemID = prevItems.findIndex((item) => item.id === product.id)

      if(existItemID === -1){
        return [...prevItems, { ...product, quantity: 1 }]
      }
      else{
        const updateItems = [...prevItems]
        updateItems[existItemID] = {
          ...updateItems[existItemID],
          quantity: updateItems[existItemID].quantity + 1
        }
        return updateItems
      }
    })
  }
  return (
    <main>
      <div className='header'>
        <button className='cart-btn' onClick={() => setOpenCart(!openCart)}>
          <span className='cart-counter'>{choosenProducts.length}</span>
          <span>Giỏ hàng</span>
          <IoCartOutline className='cart-icon'/>
        </button>
        {
          openCart === true ? 
          <div className='cart-dropdown'>
            {
              choosenProducts ?
                choosenProducts.map((item) => {
                  return (
                    <div className='cart-item'>
                      <img className='cart-item-img' src={item.image}/>
                      <div className='cart-item-text'>
                        <p className='cart-item-name'>{item.name}</p>
                        <p className='cart-item-price'>Thành tiền: {item.price.toLocaleString()} x {item.quantity} = {(item.price * item.quantity).toLocaleString()} VND</p>
                      </div>
                      
                    </div>
                  )
                })
              :
              <></>
            }
          </div>
          :
          <></>
        }
        
      </div>
      <div className="container">
          {products.map((item) => (
              <div key={item.id} className='item'>
                  <img className="item-img" src={item.image} alt={item.name} title={item.name} width={300}/>
                  <div className='info'>
                    <div className='info-text'>
                      <p className='info-name'>{item.name}</p>
                      <p className='info-price'>{item.price.toLocaleString()} VND</p>
                    </div>
                    <button className='info-icon' onClick={() => handleAddCart(item)}><FaCartShopping /></button>
                  </div>
              </div>
          ))}
      </div>
    </main>
  )
}

export default App
