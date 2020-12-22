import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import "./skills.styles.css";

const Skills = () => {
    return ( <
        div className = "pt-3 pb-3"
        id = "skills" >
        <
        h1 className = "text-center font-details-b pb-4" > TECH SKILLS < /h1> <
        CardDeck > <
        Col md = { 5 } >
        <
        Card className = "focus mt-2 mb-2" >
        <
        Card.Body > <
        Card.Title className = "text-center  card-title" > Frontend < /Card.Title> <
        hr / >
        <
        Card.Text className = "card-text d-flex justify-content-start flex-column" > < ul > < li > HTML < /li> <
        li > CSS < /
        li > < li > JavaScript < /li>< li > HTML < /li > < /ul > < /
        Card.Text > < /
        Card.Body > <
        /Card> < /
        Col > <
        Col md = { 5 } >
        <
        Card className = "focus mt-2 mb-2" >
        <
        Card.Body > <
        Card.Title className = "text-center  card-title" > Backend < /Card.Title> <
        hr / >
        <
        Card.Text className = "card-text d-flex justify-content-start flex-column" > < ul > < li > Nodejs < /li><li>Expressjs</
        li > < li > Database - MYSQL, MongoDB < /li> <li>API</li > < /ul > < /
        Card.Text > < /
        Card.Body > <
        /Card> < /
        Col >
        <
        Col md = { 5 } >
        <
        Card className = "focus mt-2 mb-2" >
        <
        Card.Body > <
        Card.Title className = "text-center  card-title" > Languages < /Card.Title> <
        hr / >
        <
        Card.Text className = "card-text d-flex justify-content-start flex-column" > < ul > < li > C < /li> <
        li > C++ < /
        li > < li > Python < /li>< /ul > < /
        Card.Text > < /
        Card.Body > <
        /Card> < /
        Col >
        <
        Col md = { 5 } >
        <
        Card className = "focus mt-2 mb-2" >
        <
        Card.Body > <
        Card.Title className = "text-center  card-title" > Other < /Card.Title> <
        hr / >
        <
        Card.Text className = "card-text d-flex justify-content-start flex-column" > < ul > < li > Data Structure & Algorithm < /li> < li > Machine Learning < /li > < li > Deep Learning < /
        li > < /ul > < /
        Card.Text > < /
        Card.Body > <
        /Card> < /
        Col > <
        /
        CardDeck > < /
        div >
    );
};

export default Skills;