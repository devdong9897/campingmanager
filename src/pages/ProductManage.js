import React from 'react'
import CategoryAdmin from '../component/CategoryAdmin'
import OrderRegistration from '../component/OrderRegistration'
import ItemManage from '../component/ItemManage'
import ItemStockManage from '../component/ItemStockManage'
import ItemLIst from '../component/ItemLIst'

const ProductManage = ({selectedRoute}) => {
  return (
    <>
      <CategoryAdmin/>
      <OrderRegistration/>
      <ItemManage/>
      <ItemStockManage/>
      <ItemLIst/>
    </>
  )
}

export default ProductManage