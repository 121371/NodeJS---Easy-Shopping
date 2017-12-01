var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: '/images/images.jpeg',
        title: 'Iphone X',
        description: 'Awesome phone newly launched in the market',
        price: 89000
   }),

     new Product({
        imagePath: '/images/macbook.jpeg',
        title: 'Macbook',
        description: 'Awesome macbook newly launched in the market',
        price: 70000
   }),

      new Product({
        imagePath: '/images/headset.jpeg',
        title: 'Sony bluetooth headphone',
        description: 'Awesome headphone newly launched in the market',
        price: 6000
   }),

       new Product({
        imagePath: '/images/speaker.jpeg',
        title: 'Speaker',
        description: 'Awesome speaker newly launched in the market',
        price: 3000
   }),

        new Product({
        imagePath: '/images/ac.jpeg',
        title: 'AC',
        description: 'Awesome AC newly launched in the market',
        price: 28000
   }),

         new Product({
        imagePath: '/images/tv.jpeg',
        title: 'TV',
        description: 'Awesome TV newly launched in the market',
        price: 35000
   })
];

var done = 0;
for(var i=0; i<products.length; i++){
	products[i].save(function(err, result){
		done++;
		if(done == products.length) {
			exit();
		}
	});
}

function exit(){
mongoose.disconnect();
}

