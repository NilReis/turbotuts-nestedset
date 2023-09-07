const ytsr = require('ytsr');

async function start() {
    var argv = require('minimist')(process.argv.slice(2));

    const filters1 = await ytsr.getFilters(argv.token);
    const filter1 = filters1.get('Type').get(argv.mesage);
    const filters2 = await ytsr.getFilters(filter1.url);
    const options = {
        pages: 2,
    }
    const searchResults = await ytsr(filter1.url, options);



    console.log(searchResults);
    //console.log(argv.token) //my-token
    //console.log(argv.mesage) //my-message

}

start();
