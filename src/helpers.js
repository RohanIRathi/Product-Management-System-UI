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

export const calculateProductTotal = (product) => {
	const quantity = product.quantity;
	const discount = product.discount;
	const price = product.product.price;
	const product_total = quantity * price;

	return product_total - (product_total * 0.01 * discount);
};