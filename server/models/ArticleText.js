const keystone = require('keystone');

const { Types } = keystone.Field;

const ArticleText = new keystone.List('ArticleText', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Text',
    label: "Texto Da Seção De Artigos",
    map: { name: "Text" }
}
);

ArticleText.add({
    Text: {
        type: Types.Text,
        initial: true,
        required: true,
        label: "Texto",
        max: 150,
    },
});

ArticleText.register();