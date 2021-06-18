const keystone = require('keystone');

const { Types } = keystone.Field;

const About = new keystone.List('Abouts', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Title, Description',
    map : {
        name: 'Title'
    }
});

About.add({
    Title: {
        type: Types.Text,
        initial: true,
        required: true,
        label:"Título"
    },
    Description: {
        type: Types.Text,
        max: 150,
        initial: true,
        required: true,
        label:"Descrição"
    }

});

About.register();

// for (let index = 0; index < 3; index++) {
//     new About.model({
//         Title: `This is the ${index}° test`,
//         Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum eget felis sit amet euismod. Aliquam ac commodo enim. Curabitur efficitur."
//     }).save()
// }
