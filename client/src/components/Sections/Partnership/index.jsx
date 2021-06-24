import {
    PartnershipContainer,
    Partnerships,
    PartnershipsImages,
    PartnershipsInformation
} from './styles.js';
import React, { useEffect, useState } from 'react'

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
        <PartnershipContainer id="PARCEIROS" className={ partnerships.length <= 6 ? "mid-partnerships" : "" }>
            <Partnerships>
                <PartnershipsImages className={ partnerships.length <= 6 ? "mid-partnerships" : "" }>

                    {
                        partnerships.map((partnership, index) => {
                            return(
                                <Partnership key={index} partnership={partnership}
                                className={ partnerships.length <= 6 ? "margin-mid-partnerships" : ""}
                                /> 
                            ); 
                        })
                    }

                </PartnershipsImages>

                <PartnershipsInformation>

                    <p>
                        Apoiadores
                    </p>

                    <p>
                        Tech Center
                    </p>

                </PartnershipsInformation>
            </Partnerships>
        </PartnershipContainer>
    );
}