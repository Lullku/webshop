import React from 'react'
import Header from '../Header/Header'
import Products from '../Products/Products'

const Shop = ({productList}) => {
    return (
        <div>
            <Header/>
            Shop
            <Products productList={productList} />
        </div>
    )
}

export default Shop
