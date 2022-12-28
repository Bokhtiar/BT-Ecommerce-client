import React from 'react'
import Cart from '../../components/cart/Cart'
import Header from '../../components/layouts/header'
import Footer from '../../components/layouts/footer'
import Bradcrumbs from '../../components/bradcrumbs'

export default function index() {
  return (
    <div>
        <Header></Header>
        <Bradcrumbs></Bradcrumbs>
            <Cart></Cart>
        <Footer></Footer>
    </div>
  )
}
