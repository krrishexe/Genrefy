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
        const urls= []

        $('#item1' , html).each(function(){
           const item =  $(this).text()
           articles.push({item})
        })

        $('#item1' , html).each(function(){
           const url = $(this).find('div')
           urls.push({url})
        })

        console.log(articles[0]);
        console.log(urls[0]);


    })


app.listen(3000, ()=>{
    console.log(`server started successfully at port : ${3000} `);
})