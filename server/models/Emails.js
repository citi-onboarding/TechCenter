const keystone = require('keystone');

const { Types } = keystone.Field;

const Emails = new keystone.List('Emails', {
    defaultColumns: 'Name, Email',
    map : {
        name: 'Name'
    }
});

Emails.add({
    Name: {
        type: Types.Text,
        initial: true,
        required: true,
        label:"Nome"
    },
    Email: {
        type: Types.Text,
        max: 150,
        initial: true,
        required: true,
        label:"Email"
    }
});

Emails.register();