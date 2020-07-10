const handleProfile = (req, res, db ) => {
	const { id } = req.params;
	db.select('*').from('users').where({id})
	.then(user => {
		if(user.length) {
			res.json(user[0]);
		} else {
			res.json('Unable to get user');
		}
		
	})
	.catch(err => res.status(400).json("Unable to get user"));
}



module.exports = {
	handleProfile: handleProfile
}