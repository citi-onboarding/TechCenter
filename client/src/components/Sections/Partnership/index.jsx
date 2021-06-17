import React, { useEffect, useState } from 'react'
import {
    PartnershipContainer,
    Partnerships,
    PartnershipsInformation,
    PartnershipsImages
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
        <PartnershipContainer className={ partnerships.length >= 6 ? "mid-height": ""}>
            <Partnerships>
                <PartnershipsImages>

                    {
                        partnerships.map((partnership, index) => {
                            return(
                                <Partnership key={index} partnership={partnership}
                                    className = {index > 5 ? "second-layer" : ""}
                                /> 
                            ); 
                        })
                    }

                </PartnershipsImages>

                <PartnershipsInformation className={ partnerships.length >= 6 ? "mid-height": ""}>

                    <p>
                        Apoiadores
                    </p>

                    <p className="company">
                        Tech Center
                    </p>

                </PartnershipsInformation>
            </Partnerships>
        </PartnershipContainer>
    );
}