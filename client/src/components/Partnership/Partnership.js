import React from 'react';

import {
    PartnershipContainer
} from './styles.js';

export default function Partnership({partnership, className}){
    return(
        <PartnershipContainer 
            url = {partnership.Image.url}
            className={className}
        />
    );
}