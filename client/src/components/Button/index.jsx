import React, {useState, useEffect} from 'react';
import {
    ButtonContainer
} from "./styles.js";
import API from '../../services/API';

export default function ButtonTechCenter({className, description, id}){

    const [isOnTop, setIsOnTop] = useState(false);
    const [discord, setDiscord] = useState('');

    window.onscroll = function () { handleWithNavBar() };
    const navbar = document.querySelector("#myHeader");


    function handleWithNavBar() {
        if (navbar) {
            const compHeight = navbar.offsetHeight
            const height = window.innerHeight
            if (window.pageYOffset <= height - compHeight) {
                setIsOnTop(false)
            } else {
                setIsOnTop(true)
            }
        }
    }

    async function getSocialMediaLinks(){
        await API.get('/socialmedias').then((response) => {
            const {Discord} = response.data[0];
            setDiscord(Discord); 
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getSocialMediaLinks()
    }, [])

    return(
        <ButtonContainer>
            <button className = {className}
                onClick = { () => {
                    if(id === "MOVE"){
                        document.getElementById('CONTACT').scrollIntoView()
                    } else {
                        window.open(discord);
                    }

                }}
            >{ description}</button>
        </ButtonContainer>
    );    
}