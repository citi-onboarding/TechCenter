import React, { useEffect, useState } from 'react'
import {
    PartnershipContainer,
    Partnerships,
    PartnershipsInformation
} from './styles.js';

import API from '../../../services/API.js';
import Partnership from '../../Partnership/Partnership';

export default function PartnershipsSection(){

    const [partnerships, setPartnerships] = useState([]);

    async function getPartrnerships(){
        await API.get('/partnerships').then((response) => {
            let amountOfPartnership = []
            response.data.forEach((partnership) => {
                partnership.Image = partnership.Image[0];
                if(partnership.Show){
                    amountOfPartnership.push(partnership);
                }
            })
            setPartnerships(amountOfPartnership);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=> {
        getPartrnerships()
    },[])

    return(
        <PartnershipContainer>
            <Partnerships>

            </Partnerships>

            <PartnershipsInformation>
                
            </PartnershipsInformation>
        </PartnershipContainer>
    );
}