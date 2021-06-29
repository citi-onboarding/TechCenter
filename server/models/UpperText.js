const keystone = require('keystone');

const { Types } = keystone.Field;

const UpperText = new keystone.List('UpperText', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Text',
    label: "Texto Superior About Us",
    map: { name: "Text" }
}
);

UpperText.add({
    Text: {
        type: Types.Text,
        initial: true,
        required: true,
        label: "Texto",
        max: 150,
    },
});

UpperText.register();