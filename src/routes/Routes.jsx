import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Accessories from '../pages/Accessories'
import Contact from '../pages/Contact'
import Payment from '../pages/Payment'
import Order from '../pages/Order'
import Signin from '../components/Signin'



const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/catalog/:slug' component={Product} />
            <Route exact path='/catalog' component={Catalog} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/order' component={Order} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/accessories' component={Accessories} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    )
}





export default Routes


