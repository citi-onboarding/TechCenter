const keystone = require('keystone');

const { Types } = keystone.Field;

const Event = new keystone.List('Events', {
    defaultColumns: 'Title, Description, Date, Hour, Link',
    map: {
        name: "Title"
    }
})

Event.add({
    Image: {
        type: Types.CloudinaryImages,
        require: true,
        initial: true,
        label: "Imagem"
    },
    Title: {
        type: Types.Text,
        require: true,
        initial: true,
        label: "Título"
    },
    Description: { 
        type: Types.Text,
        require: true,
        initial: true,
        label: "Descrição"
    },
    Date: {
        type: Types.Datetime,
        require: true,
        initial: true,
        label: "Data e Horário"
    },
    Link: {
        type: Types.Text,
        require: true,
        initial: true,
    }
})

Event.register();
