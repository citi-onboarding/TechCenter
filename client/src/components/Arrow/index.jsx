import React from 'react';
import {
    ArrowContainer, ArrowStyle
} from './styles';
import {
    LeftOutlined, RightOutlined
} from '@ant-design/icons';

export default function Arrow ({onClick, direction}){
    if(direction === "right"){
        return (
            <ArrowContainer onClick={onClick} className="right">
                    <RightOutlined style={ArrowStyle}/>
            </ArrowContainer>
        );
    }
    return(
        <ArrowContainer onClick={onClick} className="left">
            <LeftOutlined style={ArrowStyle}/>
        </ArrowContainer>
    );

}