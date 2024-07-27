const fs = require('fs');
const path = require('path');

const documentPath = path.resolve(__dirname, '../../docs/companyDocs.txt');

exports.searchDocument = (query) => {
    return new Promise((resolve, reject) => {
        fs.readFile(documentPath, 'utf8', (err, data) => {
            if (err) return reject(err);
            const lines = data.split('\n');
            const result = lines.find(line => line.toLowerCase().includes(query.toLowerCase()));
            resolve(result);
        });
    });
};
