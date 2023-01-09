const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio');
const { response } = require('express');
// const { data } = require('cheerio/lib/api/attributes');

const app = express();


axios('https://everynoise.com')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)

        data = []

        $('.genre' , html).each(
            function() {
                data.push(
                    {
                        "at":this.attribs ,
                        "tx": $(this).text()
                    }
                );
            }
        )
        
        for(let i = 0; i < data.length; i++){
            console.log(data[i]["tx"]);
        }

    }) 
app.listen(3000, ()=>{
    console.log(`server started successfully at port : ${3000} `);
})