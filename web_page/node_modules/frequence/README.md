## frequence
Finds frequency of words/letters in a given string

```js
const Frequence = require('frequence');

let freq = Frequence.words('hello world');
console.log(freq);
//{ HELLO: 1, WORLD: 1 }

freq = Frequence.letters('hello world');
console.log(freq);
//{ H: 1, E: 1, L: 3, O: 2, W: 1, R: 1, D: 1 }
```

API takes options as an optional 2nd argument.

```
options = {
    caseSensitive: false|true,      //default false
    keepSpecialChars: false|true    //default false
}
```
