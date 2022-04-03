export const validEmail = new RegExp(
	'^[a-zA-Z0-9._$!%-]+@[a-zA-Z0-9.-]+.[a-zA-z]$'
);

export const validMobile = new RegExp(
	'[0-9]{10}'
);

export const updateExpireDate = () => {
	var date = new Date();
	date.setDate(date.getDate() + 1);
	sessionStorage.setItem('expire_date', date);
};

export const deleteSessionStorage = () => {
	sessionStorage.clear();
};