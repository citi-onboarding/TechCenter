const keystone = require('keystone');

const { Types } = keystone.Field;

const FirstText = new keystone.List('Texto Inicial', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Text',
}
);

FirstText.add({
    Text: {
        type: Types.Text,
        initial: true,
        required: true,
        label: "Texto"
    },
});

FirstText.register();

