'use strict';

const Assert = require('assert');
const Frequence = require('../');
const Fs = require('fs');

describe('frequence', () => {

    it('word', () => {
        let result = Frequence('hello world');
        Assert.ok(result);
        Assert.equal(Object.keys(result).length, 2);
    });

    it('words fn', () => {
        let result = Frequence.words('hello world');
        Assert.ok(result);
        Assert.equal(Object.keys(result).length, 2);
    });

    it('word array', () => {
        let result = Frequence(['hello world', 'in new world']);
        Assert.ok(result);
        Assert.equal(Object.keys(result).length, 4);
    });

    it('letter', () => {
        let result = Frequence('hello world', {type: 'letter'});
        Assert.ok(result);
        Assert.equal(Object.keys(result).length, 7);
    });

    it('letters fn', () => {
        let result = Frequence.letters('hello world');
        Assert.ok(result);
        Assert.equal(Object.keys(result).length, 7);
    });


    it('read words from file', () => {
        let data = Fs.readFileSync(__dirname + '/dump.txt', {encoding: 'utf-8'});
        let result = Frequence.letters(data);
        Assert.ok(result);
        Assert.equal(Object.keys(result).length, 36);
    });
});
