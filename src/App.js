// Default 
import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';

//Global Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path='/register' element={<Register />}/>
			<Route path='/login' element={<Login />}/>
			<Route path='/*' element={<NotFound />}/>
		</Routes>
		<GlobalStyle />
	</Router>
);

export default App;
