const keystone = require('keystone');

const { Types } = keystone.Field;

const Partnership = new keystone.List('Partnership', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Imagem, Name, Link, Show'
});

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
    },
    Show: {
        type: Types.Boolean
    }
})

Partnership.register();