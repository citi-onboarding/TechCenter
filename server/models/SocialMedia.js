const keystone = require('keystone');

const { Types } = keystone.Field;

const SocialMedia = new keystone.List('Social Media', {
    autocreate: true,
    nocreate: true,
    nodelete: true,
    defaultColumns: 'Company, Instagram, Medium, Youtube, Discord',
    map : {
        name: "Company"
    }
});

SocialMedia.add({
    Company: {
        type: Types.Text,
        initial: true,
        require: false,
        label: "Empresa",
    },
    Instagram: {
        type: Types.Text,
        initial: true,
        required: true,
        label: "Instagram"
    },
	Medium: {
        type: Types.Text,
        initial: true,
        required: true,
        label: "Medium"
    },
    Youtube: {
        type: Types.Text,
        initial: true,
        required: true,
        label: "Youtube"
    },

    Discord: {
        type: Types.Text,
        initial: true,
        required: true,
        label: "Discord"
    }
});

SocialMedia.register();

const firstSocialMedia = new SocialMedia.model({
    Medium: "primeiro_teste",
    Medium: "primeiro_teste",
    Youtube: "primeiro_teste",
    Discord: "primeiro_teste"
})

firstSocialMedia.save(function(error){});