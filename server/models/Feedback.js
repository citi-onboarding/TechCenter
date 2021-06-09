const keystone = require('keystone');

const { Types } = keystone.Field;

const Feedback = new keystone.List('Feedbacks');

Feedback.add({
    Image: {
        type: Types.CloudinaryImages,
        initial: true,
    },
    Author: {
        type: Types.Text,
        require: true,
        initial: true,
    },
    Description: {
        type: Types.Text,
        require: true,
        initial: true,
    }
})

Feedback.register();