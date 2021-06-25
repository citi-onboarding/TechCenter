import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    width: 280px !important;
    height: 309px;
    background-color: white;
    color: black;

    p{
        margin: 2rem 1.2rem;
    }
    
    .article-title{
        margin: 2rem 1.2rem;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
    }

    .thumbnail{
        width: 280px;
        height: 158px;
        object-fit: cover;
    }

    .arrow{
        margin-left: auto;
        position: relative;
        bottom: 13px;
        margin-right: 13px;
    }

`