import React from 'react'

import {Switch,BrowserRouter,Route} from 'react-router-dom'
import admin from '../admin/admin';
import Login from '../user/Login/Login';
import Dashboard from '../user/Dashboard/Dashboard';
import Description from '../user/Description/Description';
import AdminDashboard from '../admin/Dashboard/Dashboard.jsx'
import AdminForm from '../admin/Form/Form'
import BookingForm from '../user/BookingForm/BookingForm';
import AdminLogin from '../admin/Login/Login.js'
import Ticket from '../user/Ticket/Ticket';
export default function Index() {
  return (
  <BrowserRouter>
  <Switch>
    <Route path="/user/Login" component={Login} exact/>
    <Route path="/admin/Login" component={AdminLogin} exact/>
    <Route path="/" component={Dashboard} exact/>
    <Route path="/admin/Dashboard" component={AdminDashboard} exact/>
    <Route path="/user/Description/:id" component={Description} exact/>
    <Route path="/admin/Form" component={AdminForm} exact/>
    <Route path="/user/BookingForm" component={BookingForm} exact/>
    <Route path="/user/Ticket" component={Ticket} exact/>
 
  </Switch>
  </BrowserRouter>
      
  )
}
