// Description
//   A Hubot script to choose one at random from the data of Google Spreadsheet
//
// Configuration:
//   HUBOT_OMIKUJI_SHEET_GOOGLE_EMAIL
//   HUBOT_OMIKUJI_SHEET_GOOGLE_KEY
//   HUBOT_OMIKUJI_SHEET_GOOGLE_SHEET_KEY
//
// Commands:
//   hubot omikuji <column> - select from the data of Google Spreadsheet
//
// Author:
//   bouzuya <m@bouzuya.net>
//
var config, loadCells, parseConfig;

parseConfig = require('hubot-config');

loadCells = require('../google-sheet');

config = parseConfig('omikuji-sheet', {
  googleEmail: null,
  googleKey: null,
  googleSheetKey: null
});

module.exports = function(robot) {
  return robot.respond(/omikuji ([A-Z]+)$/i, function(res) {
    var col;
    col = res.match[1];
    return loadCells({
      credentials: {
        email: config.googleEmail,
        key: config.googleKey
      },
      spreadsheetKey: config.googleSheetKey
    }).then(function(cells) {
      var values;
      values = cells.filter(function(i) {
        return i.title.match('^' + col);
      }).map(function(i) {
        return i.content;
      });
      return res.send("" + (res.random(values)));
    })["catch"](function(e) {
      robot.logger.error(e);
      return res.send('hubot-omikuji-sheet: error');
    });
  });
};
