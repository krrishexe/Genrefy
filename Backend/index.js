const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio');
const { response } = require('express');

const app = express();


axios('https://everynoise.com')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const articles=[]

        $('.genre' , html).each(function(){
           const item =  $(this).text()
           articles.push({item})
        })

        console.log(articles);


    })


app.listen(3000, ()=>{
    console.log(`server started successfully at port : ${3000} `);
})