const keystone = require('keystone');

const { Types } = keystone.Field;

const Partnership = new keystone.List('Feedbacks');

Partnership.add({
    Image: {
        type: Types.CloudinaryImages,
        initial: true,
        require: true
    },
    Name: {
        type: Types.Text,
        require: true,
        initial: true,
    },
    Link: {
        type: Types.Text,
        initial: true,
    }
})

Partnership.register();