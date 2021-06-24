import {
    ContactConteiner
} from './styles';
import ContactForms from '../../ContactForms';
import ContactImage from '../../ContactImage';
import React from 'react';

export default function Contact(){


    return (
        <ContactConteiner id="CONTACT">
            <ContactForms/>
            <ContactImage/>
        </ContactConteiner>
    ); 
}