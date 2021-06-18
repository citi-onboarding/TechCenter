const keystone = require('keystone');

const { Types } = keystone.Field;

const Partnership = new keystone.List('Partnership', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Name, Link, Show',
    map: {
        name: "Name"
    }
});

Partnership.add({
    Image: {
        type: Types.CloudinaryImages,
        initial: true,
        require: true,
        label: "Imagem"
    },
    Name: {
        type: Types.Text,
        require: true,
        initial: true,
        label: "Nome"
    },
    Link: {
        type: Types.Text,
        initial: true,
        label: "Link"
    },
    Show: {
        type: Types.Boolean,
        label: "Mostrar"
    }
})

Partnership.register();