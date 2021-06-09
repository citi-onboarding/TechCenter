const keystone = require('keystone');
const User = keystone.list('User');
const Detail = keystone.list("Details")

exports = module.exports = (done) => {
	new User.model({
		name: 'admin',
		email: 'admin@gmail.com',
		password: 'admin',
		canAccessKeystone: true,
	}).save(done);

	for (let index = 0; index < 3; index++) {
		new Detail.model({
			Title: `This is the ${index}° test Detail to be added`,
			Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed pharetra venenatis quam eget molestie.Aliquam id purus mattis, mattis enim non accumsan."
		}).save(function (error) { });
	}

};
