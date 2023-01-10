const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio');
const { response } = require('express');
var fs = require('fs');
// const { data } = require('cheerio/lib/api/attributes');

const app = express();


axios('https://everynoise.com')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)

        let dataArray = []

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
        
        // for(let i = 0; i < dataArray.length; i++){
        //     dataArray.push(dataArray[i])
        //     // console.log(dataArray[i])
        // }

        console.log(dataArray);
        const jsonData = JSON.stringify(dataArray)
        fs.writeFile("JsonToText.json", jsonData, function(err) {
        if (err) {
        console.log(err);
        }
        });

    }) 
app.listen(3000, ()=>{
    console.log(`server started successfully at port : ${3000} `);
})