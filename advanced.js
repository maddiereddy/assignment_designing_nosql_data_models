// Your eCommerce business needs to keep track of products and their prices. 
// The products each belong to a department. 
// The business needs to keep track of revenue as product prices change over time. 
// The business also needs to keep track of receipts of transactions and 
// the number of units each product has in stock.

//Product
{
	_id: Number,
	name: String,
	department: String,
	price: Number,
	qty_in_stock: Number
}

//Transactions
{
	id: Number,
	product: [{ _id: Number, price_sold: Number, qty_sold: Number}, ...],
	order_date: datetime,
}



// You're building an activity feed for a social media site. 
// The feed must display a chronological list of activities for the current user's friends. 
// These activities could potentially be any action performed on the site including 
// uploading a photo, changing their profile, friending another user, commenting, liking etc... 
// Further, you only want to display activities for users that the current user interacts with frequently.

//User
{
	_id: Number,
	username: String,
	password: String,
	email: String,
  profile: {
    location: String
    gender: String
    status: String
    work: String
    about_me: String
  },
	feed: [
		{
			activity: String,
			date: datetime
		}, ...
	],
	friends: [_id1, id2, ...],
	interacted: [{
		_id: Number,
		count: Number,
		activityIds: [{ _id: Number, date: datetime }]
	}]
}

