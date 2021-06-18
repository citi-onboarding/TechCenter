const keystone = require('keystone');

const { Types } = keystone.Field;

const ContactImage = new keystone.List('Contact Image', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Title, Image',
    map : {
        name: 'Title'
    }
});

ContactImage.add({
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

ContactImage.register();
