import React, { useEffect, useState } from 'react'
import ItemData from '../../data/data';
import ItemList from '../Itemlist/ItemList';
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

function ItemListContainer() {
  const [data, setData] = useState([])
  const idCategory = useParams().idCategory
  function getProducto() {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(ItemData)
      }, 2000);
    }))
  }
  useEffect(() => {
    getProducto().then(products => {
      
      if (idCategory === undefined) {
        setData(products)
      }
      else {
        let itemsFilter = ItemData.filter((element) => element.category === idCategory)
        setData(itemsFilter)
      }
    })
  
  }, [idCategory])
  return (
    <main className='main'>

        <section className='itemsContainer'>
          <ItemList data={data} />
        </section>

    </main>
  )
}

export default ItemListContainer