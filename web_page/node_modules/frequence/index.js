'use strict';

function Frequence(data, options) {
    options = options || {};

    let caseSensitive = options.caseSensitive || false;
    let keepSpecialChars = options.keepSpecialChars || false;
    let type = options.type || 'word';  //letter|word

    let buckets = [];
    let dictionary = [];

    if (data) {
        if (Array.isArray(data)) {
            data = data.join(' ');
        }
        if (!keepSpecialChars) {
            data = data.replace(/[^0-9a-zA-Z ]/g, '');
        }
        if (!caseSensitive) {
            data = data.toLowerCase();
        }
        switch (type) {
            case 'word':
                data = data.replace(/\s+/g, ' ');
                buckets = data.split(' ');
                break;
            case 'letter':
                data = data.replace(/\s+/g, '');
                buckets = data.split('');
                break;
        }
        let dictMap = {};
        buckets.forEach((token) => {
            dictMap[token] = dictMap[token] || 0;
            dictMap[token]++;
        });
        Object.keys(dictMap).sort().forEach((key) => {
            dictionary.push({
                key,
                count: dictMap[key]
            })
        });
    }
    return dictionary;
}

function words(data, options) {
    options = options || {};
    options.type = 'word';
    return Frequence(data, options);
}

function letters(data, options) {
    options = options || {};
    options.type = 'letter';
    return Frequence(data, options);
}

module.exports = Frequence;
module.exports.words = words;
module.exports.letters = letters;
