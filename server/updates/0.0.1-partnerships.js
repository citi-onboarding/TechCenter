const keystone = require('keystone');
const Partnership = keystone.list('Partnership');
const constants = require('../constants/constants');


exports = module.exports = (done) => {
    for(let partner=0; partner < constants.NUMBER_OF_PARTNERS; partner++){
        const addPartner = new Partnership.model({
            Name: "primeiro_teste",
            Link: "primeiro_teste",
        }).save(done)
    }
}

