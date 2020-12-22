import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Col";
import "./projects-timeline.styles.css";

const Projects = () => {
    return ( <
        div className = "pt-3 pb-3"
        id = "projects" >
        <
        h1 className = "text-center font-details-b pb-4" > PROJECTS < /h1> <
        CardDeck > <
        Row md = { 12 } >
        <
        Card className = "focus mt-2 mb-2" >
        <
        Card.Body > <
        Card.Title className = "text-center  card-title" > < /Card.Title> <
        hr / >
        <
        Card.Text className = "card-text d-flex justify-content-start flex-column" >
        <
        ul id = "menu" >
        <
        li > < a href = "https://drive.google.com/drive/folders/1e7OTDSkF1i_JSP0fBzzN6tmk77Y6NgN3?usp=sharing" > < strong > Shopping Cart < /strong>: users can buy clothings and accesories from here.< /a > < /li > <
        li > < a href = "https://drive.google.com/drive/folders/1e7OTDSkF1i_JSP0fBzzN6tmk77Y6NgN3?usp=sharing" > < strong > Plasma Donation < /strong>: users can register themselves,find people in any area they need blood.< /a > < /li > <
        li > < a href = "https://drive.google.com/drive/folders/1e7OTDSkF1i_JSP0fBzzN6tmk77Y6NgN3?usp=sharing" > < strong > Github Finder < / strong>:users can find any profile by searching their username.< /a > < /li > <
        li > < a href = "#" > < strong > Movie Review Detector < / strong>:Ml model that tells Review is postitve or negative < /a > < /li > < /
        ul > < /
        Card.Text > < /
        Card.Body > <
        /Card> < /
        Row > < /CardDeck > < /
        div > )
};
export default Projects;