const rp = require('request-promise');
const cheerio = require('cheerio')
const common = require('./common');

// get all URL post from url of genk
const getPostURL = async (url) => {
    let source = await common.getSource(url);
    $ = cheerio.load(source);
    let links = $('.knsw-list .knswli-title > a');
    let linksInfo = [];
    $(links).each(function(i, link){
        let newLink = {
            href: 'http://genk.vn' + $(link).attr('href'),
            text: $(link).text()
        }
        linksInfo = [...linksInfo, newLink]
    });
    return linksInfo;
}

module.exports = {
    getPostURL: getPostURL
}