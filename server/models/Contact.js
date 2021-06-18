const keystone = require('keystone');

const { Types } = keystone.Field;

const Contact = new keystone.List('Contact', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Text',
    map : {
        name: 'Text'
    }
});

Contact.add({
    Text: {
        type: Types.Text,
        initial: true,
        required: true,
        label:"Texto"
    }
});

Contact.register();
