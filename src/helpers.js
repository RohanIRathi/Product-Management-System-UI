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

export class CustomError extends Error {};

export const increaseOrders = (orderList, orders, page) => {
	if(page === 1) {
		return orders.slice(0, 9);
	}
	const start = (page - 1) * 10;
	const end = (page * 10) - 1;

	return [...orderList, orders.slice(start, end)];
}