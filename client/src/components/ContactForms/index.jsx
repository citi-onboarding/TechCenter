import React, { useEffect, useState } from 'react';

import {
    ContactFormsContainer,
    ContactFormsContent,
    ContactInformation
} from './styles';

import API from '../../services/API';
import ButtonTechCenter from '../Button';


export default function ContactForms() {

    const [text, setText] = useState('');

    async function getContactText() {
        await API.get('/contact-text').then((response) => {
            const { Text } = response.data[0];
            setText(Text);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getContactText();
    }, [])

    return (
        <ContactFormsContainer>
            <ContactFormsContent>


                <form>

                    <input
                        type="text"
                        name="name"
                        placeholder="Comece pelo seu nome"
                        className = "first-input"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Agora, o seu e-mail"
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Digite seu número de telefone"
                    />

                    <input
                        type="text"
                        name="message"
                        placeholder="Sua mensagem"
                    />

                    <button type="submit">Enviar</button>
                </form>

                <ContactInformation>

                    <p className="title">
                        Contato
                    </p>

                    <p className= "information">{text}</p>

                    <div>
                        <ButtonTechCenter className="join-to-community" description="Entre na comunidade" />
                    </div>
                </ContactInformation>

            </ContactFormsContent>
        </ContactFormsContainer>
    );
}