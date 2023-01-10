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

        dataArray = []

        $('.genre' , html).each(
            function() {
                dataArray.push(
                    {
                        "data":this.attribs ,
                        "text": $(this).text()
                    }
                );
            }
        )
        
        for(let i = 0; i < dataArray.length; i++){
            console.log(dataArray[i]);
        }

    }) 
app.listen(3000, ()=>{
    console.log(`server started successfully at port : ${3000} `);
})