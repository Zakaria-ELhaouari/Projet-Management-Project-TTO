const express = require('express');
const ordersRoute = require('./routes/orders');
const revenuesRoute = require('./routes/revenues');
const soldRoute = require('./routes/sold');
const priceRoute = require('./routes/price');

const app = express();

app.use(express.json());

app.use('/api/orders', ordersRoute);
app.use('/api/revenues', revenuesRoute);
app.use('/api/sold', soldRoute);
app.use('/api/price', priceRoute);

app.listen(5000, () => {
	console.log('server running');
});
