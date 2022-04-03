import React, { useState, createContext } from 'react';

const initialState = {
	"session_key": sessionStorage.getItem('session_key'),
	"user": JSON.parse(sessionStorage.getItem('user')),
	"expire_date": new Date(sessionStorage.getItem('expire_date'))
};

export const Context = createContext(initialState.user ? initialState : undefined);

const UserProvider = ({ children }) => {
	const [state, setState] = useState(initialState.user ? initialState : undefined);

	return (
		<Context.Provider value={[state, setState]}>{ children }</Context.Provider>
	);
};

export default UserProvider;