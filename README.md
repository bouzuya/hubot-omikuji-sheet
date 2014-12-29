# hubot-omikuji-sheet

A Hubot script to choose one at random from the data of Google Spreadsheet

## Installation

    $ npm install https://github.com/bouzuya/hubot-omikuji-sheet/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-omikuji-sheet/archive/{VERSION}.tar.gz

## Example

### Google Spreadsheet

    | A | B | C |
    |---|---|---|
    | 1 | a | 4 |
    | 2 | b | 5 |
    | 3 | c | 6 |

### Console

    bouzuya> hubot omikuji A
      hubot> 1

    bouzuya> hubot omikuji A
      hubot> 3

    bouzuya> hubot omikuji B
      hubot> b

## Configuration

See [`src/scripts/omikuji-sheet.coffee`](src/scripts/omikuji-sheet.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-omikuji-sheet
[travis-badge]: https://travis-ci.org/bouzuya/hubot-omikuji-sheet.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-omikuji-sheet
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-omikuji-sheet.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-omikuji-sheet
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-omikuji-sheet.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
