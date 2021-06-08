const keystone = require('keystone');

const { Types } = keystone.Field;

const Event = new keystone.List('Events');


Event.add({
    Image: {
        type: Types.CloudinaryImages,
        require: true,
        initial: true,
    },
    Title: {
        type: Types.Text,
        require: true,
        initial: true,
    },
    Description: {
        type: Types.Text,
        require: true,
        initial: true,
    },
    Date: {
        type: Types.Date,
        require: true,
        initial: true,
    },
    Link: {
        type: Types.Text,
        require: true,
        initial: true,
    }

})

Event.register();
