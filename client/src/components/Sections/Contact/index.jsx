import React from 'react';
import {
    ContactConteiner
} from './styles';

import ContactImage from '../../ContactImage';
import ContactForms from '../../ContactForms';

export default function Contact(){


    return (
        <ContactConteiner>
            <ContactForms/>
            <ContactImage/>
        </ContactConteiner>
    ); 
}