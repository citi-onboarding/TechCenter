const keystone = require('keystone');

const { Types } = keystone.Field;

const Feedback = new keystone.List('Feedbacks', {
    defaultColumns: 'Author, Description',
    map: {
        name: "Author"
    }
});

Feedback.add({
    Author: {
        type: Types.Text,
        require: true,
        initial: true,
        label: "Autor"
    },
    Description: {
        type: Types.Text,
        require: true,
        initial: true,
        label: "Descrição"
    }
})

Feedback.register();