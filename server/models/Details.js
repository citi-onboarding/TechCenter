const keystone = require('keystone');

const { Types } = keystone.Field;

const Detail = new keystone.List('Details', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Title, Description'
});

Detail.add({
    Title: {
        type: Types.Text,
        initial: true,
        required: true,
    },
    Description: {
        type: Types.Text,
        max: 150,
        initial: true,
        required: true,
    }

});

Detail.register();
