import React, { FC } from 'react'
import { IShoppingCartProps } from './ShoppingCart'

export const  ShoppingCart:FC<IShoppingCartProps>=({option})=> {
  return (
    <div className='text-2xl text-red-600'>ShoppingCart {option}</div>
  )
}

export default ShoppingCart