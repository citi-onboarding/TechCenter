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
        require: true,
    },
    Description: {
        type: Types.Text,
        max: 150,
        require: true,
    }

});

Detail.register();

// for (let index = 0; index < 3; index++) {
//     new Detail.model({
//         Title: `This is the ${index}° test Detail to be added`,
//         Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed pharetra venenatis quam eget molestie.Aliquam id purus mattis, mattis enim non accumsan."
//     }).save(function (error) { });

// }



