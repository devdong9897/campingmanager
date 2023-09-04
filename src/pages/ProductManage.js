import React from 'react'
import CategoryAdmin from '../component/CategoryAdmin'
import OrderRegistration from '../component/OrderRegistration'
import ItemManage from '../component/ItemManage'
import ItemStockManage from '../component/ItemStockManage'
import ItemLIst from '../component/ItemList'
import { Route, Routes } from 'react-router'

const ProductManage = () => {
  return (
    <Routes>
      <Route path='/categoryadmin' element={<CategoryAdmin/>}></Route>
      <Route path='/itemmanage' element={<ItemManage/>}></Route>
      <Route path='/itemstockmanage' element={<ItemStockManage/>}></Route>
      <Route path='/itemlist' element={<ItemLIst/>}></Route>
      <Route path='/orderregistration' element={<OrderRegistration/>}></Route>
    </Routes>
  )
}

export default ProductManage