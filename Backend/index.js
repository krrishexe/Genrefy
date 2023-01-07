const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio');
const { response } = require('express');

const app = express();


axios('https://everynoise.com')
    .then(response => {
        const html = response.data;
        console.log(html);
    })


app.listen(3000, ()=>{
    console.log(`server started successfully at port : ${3000} `);
})