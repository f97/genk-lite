const rp = require('request-promise');
const cheerio = require('cheerio')
const common = require('./common');

// get all URL post from url of genk
const getPostURL = async (url) => {
    let sourceHomepage = await common.getSource(url);
    $ = cheerio.load(sourceHomepage);
    let links = $('.knsw-list .knswli-title > a'); //Object cheerio of all a tag link to post 
    let linksInfo = []; //Array of link object result
    $(links).each(function(i, link){
        let newLink = {
            href: $(link).attr('href'),
            text: $(link).text()
        }
        linksInfo = [...linksInfo, newLink]
    });
    return linksInfo;
}

// get content post from url
const getPostContent = async (url) => {
    let sourcePost = await common.getSource(url);
    $ = cheerio.load(sourcePost);
    let pContent = $('.knc-content p');  //Object cheerio of all p tag of post 
    let title = $('.kbwc-title').html(); //Title of post
    let content = '';
    $(pContent).each(function(i, p){
        content = content + '<p>' + $(p).html() + '</p>';
    });   

    return {
        title: title,
        content: content,
    };
}

module.exports = {
    getPostURL: getPostURL,
    getPostContent: getPostContent
}