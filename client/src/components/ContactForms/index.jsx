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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('')
    const [feedback, setFeedback] = useState('');

    async function getContactText() {
        await API.get('/contact-text').then((response) => {
            const { Text } = response.data[0];
            setText(Text);
        }).catch((error) => {
            console.log(error);
        })
    }

    async function sendEmail(event){
        event.preventDefault();

        await API.post('contact', {
            name, email, phone, message
        }).then((response) => {
            const { answer } = response.data; 
            setFeedback(answer);
        }).catch((error) => {
            const { answer } = error.data;
            setFeedback(answer);
        })
    }

    useEffect(() => {
        getContactText();
    }, [])

    return (
        <ContactFormsContainer>
            <ContactFormsContent>
                <form onSubmit= { sendEmail }>
                    <input
                        type="text"
                        name="name"
                        placeholder="Comece pelo seu nome"
                        className = "first-input"
                        onChange= { (event) => {
                            setName(event.target.value);
                        }}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Agora, o seu e-mail"
                        onChange = { (event) => {
                            setEmail(event.target.value);
                        }}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Digite seu número de telefone"
                        onChange={ (event) => {
                            setPhone(event.target.value);
                        }}
                    />

                    <input
                        type="text"
                        name="message"
                        placeholder="Sua mensagem"
                        onChange = { (event) => {
                            setMessage(event.target.value);
                        }}
                    />

                    <div>
                        <p>{feedback}</p>
                        <button type="submit">Enviar</button>
                    </div>

                    
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