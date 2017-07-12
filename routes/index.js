// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: '首页' });
// });

module.exports = function(app){ 

	// app.get('/', function (req, res) {
 //  		res.send('Hello World!');
	// });

	app.get('/', function(req, res, next) {
  		res.render('index', { title: '首页' });
	});

	app.get('/recommend',function(req,res){  
    	res.render('recommend', { title: '精选' });  
  	});

  	app.get('/macro',function(req,res){  
    	res.render('macro', { title: '微距' });  
  	});

  	app.get('/person',function(req,res){  
    	res.render('person', { title: '人物' });  
  	});

  	app.get('/scenery',function(req,res){  
    	res.render('scenery', { title: '风景' });  
  	});

  	app.get('/macro/list',function(req,res){  
    	res.render('macro_list', { title: '微距列表' });  
  	});

  	app.get('/person/list',function(req,res){  
    	res.render('person_list', { title: '人物列表' });  
  	});

  	app.get('/scenery/list',function(req,res){  
    	res.render('scenery_list', { title: '风景列表' });  
  	});

  	app.get('/contactUs',function(req,res){  
    	res.render('contact_us', { title: '联系我们' });  
  	});
}

// module.exports = router;
