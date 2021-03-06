exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from events', [], function(err, results) {
        if (err) return next(err);
				res.render( 'home', {
					no_events : results.length === 0,
					events : results,
				});
			});
		});
	};
exports.showAdd = function(req, res){
		res.render('add_event');
	};

	exports.add = function (req, res, next){
		req.getConnection(function(err, connection){
			if(err) return next(err);
			var input = req.body;

			var data = {
				event_name : input.event_name,
				event_date : input.event_date,
			}
			

			connection.query('INSERT INTO events set ?', data, function(err, results){
				if(err) return next(err);
				res.redirect('/');
			});
		})
	}
