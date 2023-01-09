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

       const text =  $('#item1' , html).each(function(){
            const item =  $(this).text()
            articles.push({item})
        })
       console.log(typeof(text)); 

        // $('#item1' , html).each(function(){
        //    const url = $(this).find('div').attr('preview_url')
        //    urls.push({url})
        // })

        console.log(articles[0]);
        // console.log(urls);


    })


app.listen(3000, ()=>{
    console.log(`server started successfully at port : ${3000} `);
})