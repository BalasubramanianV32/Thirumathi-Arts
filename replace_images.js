const fs = require('fs');

function replaceImages(filepath, replacements) {
    let content = fs.readFileSync(filepath, 'utf8');
    let idx = 0;

    // Replace src="..." inside <img ...>
    content = content.replace(/<img[^>]*?src="([^"]+)"/g, (match, p1) => {
        if (idx < replacements.length) {
            let replaced = match.replace(`src="${p1}"`, `src="${replacements[idx]}"`);
            idx++;
            return replaced;
        }
        return match;
    });

    fs.writeFileSync(filepath, content);
}

const bangles = [7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => `images/bangle${i}.jpeg`);
replaceImages('c:/Thirumathi/bangles.html', bangles);

const mehendi = [1, 2, 3, 1, 2, 3].map(i => `images/mehendi${i}.jpeg`);
replaceImages('c:/Thirumathi/mehendi.html', mehendi);

const indexImgs = [1, 2, 3, 4].map(i => `images/bangle${i}.jpeg`).concat([1, 2, 3, 1].map(i => `images/mehendi${i}.jpeg`));
replaceImages('c:/Thirumathi/index.html', indexImgs);

console.log('Images replaced!');
