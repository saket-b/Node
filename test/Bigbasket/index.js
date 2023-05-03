const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

request("https://www.bigbasket.com", cb);

function cb(err, res, html){

    if(err)
    return console.log("error = ", error);

    handleHtml(html);
}

const handleHtml= (html)=>{

    let selTool = cheerio.load(html);

    let category = selTool("CategoryMenu___StyledMenuItems-sc-d3svbp-4 jgpFYe");
  //  let subcategory =category[0].hasClass("jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs")
   // let categoryhtml = 
    console.log(category.children.length);
    console.log(category);

}


