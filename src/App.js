// Default 
import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import ViewRetailers from './components/ViewRetailers';
import AddProduct from './components/AddProduct';
import ViewProfile from './components/ViewProfile';
import ViewOrders from './components/ViewOrders';
import ViewOrder from './components/ViewOrder';
import CreateOrder from './components/CreateOrder';
import VerifyAccount from './components/VerifyAccount';
import ChangePassword from './components/ChangePassword';
import ViewProducts from './components/ViewProducts';
import NotFound from './components/NotFound';

// Global Styles
import { GlobalStyle } from './GlobalStyle';

// Context
import UserProvider from './context';

const App = () => (
	<Router>
		<UserProvider>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/register' element={<Register />}/>
				<Route path='/login' element={<Login />}/>
				<Route path='/logout' element={<Logout />}/>
				<Route path='/viewRetailers' element={<ViewRetailers />}/>
				<Route path='/addProduct' element={<AddProduct />}/>
				<Route path='/viewProfile' element={<ViewProfile />} />
				<Route path='/viewOrders' element={<ViewOrders />}/>
				<Route path='/viewOrder/:order_id' element={<ViewOrder />}/>
				<Route path='/addOrder' element={<CreateOrder />}/>
				<Route path='/verifyAccount' element={<VerifyAccount />}/>
				<Route path='/changePassword' element={<ChangePassword />}/>
				<Route path='/products' element={<ViewProducts />}/>
				<Route path='/*' element={<NotFound />}/>
			</Routes>
			<GlobalStyle />
		</UserProvider>
	</Router>
);

export default App;
