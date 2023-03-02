/* const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args)); */

const fs = require('fs');


const folderPath = './assets/gallery';

fs.readdir(folderPath, (err, files) => {
    fs.writeFile('../public/static/listImg.json', JSON.stringify(files), (err) => {
        if (err) throw err;
      });
});

/* async function getGallery() {
    let response = await fetch('http://localhost:5500/src/listImg.json', {
        method: 'GET'
        },);
    let list = await response.json();
    getImgs(list)
}

function getImgs (data) {
    data.forEach(item => state.gallery.push(item))
} */

