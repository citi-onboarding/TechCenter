const keystone = require('keystone');

const { Types } = keystone.Field;

const Contact = new keystone.List('Contact', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Title, Image',
    map : {
        name: 'Title'
    }
});

Contact.add({
    Title: {
        type: Types.Text,
        initial: true,
        required: true,
        label:"Título"
    }, 
    Image: {
        type: Types.CloudinaryImages,
        require: true,
        initial: true,
        label: "Imagem"
    }

});

Contact.register();
