const keystone = require('keystone');
const SocialMedia = keystone.list('Social Media');

exports = module.exports = (done) => {
    new SocialMedia.model({
        Instagram: "primeiro_teste",
        Medium: "primeiro_teste",
        Youtube: "primeiro_teste",
        Discord: "primeiro_teste"
    }).save(done)
}