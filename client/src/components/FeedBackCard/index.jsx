import { Container } from "./styles.js";
import React from 'react'
import icon from "../../assets/feedback-icon.svg"

export default function FeedBackCard({ text, author }) {
    return (
        <Container>
            <img src={icon} alt="Feedback Icon" />
            <p>{text}</p>
            <h3>{author}</h3>
        </Container>
    )
}