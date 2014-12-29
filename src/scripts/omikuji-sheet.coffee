# Description
#   A Hubot script to choose one at random from the data of Google Spreadsheet
#
# Configuration:
#   HUBOT_OMIKUJI_SHEET_GOOGLE_EMAIL
#   HUBOT_OMIKUJI_SHEET_GOOGLE_KEY
#   HUBOT_OMIKUJI_SHEET_GOOGLE_SHEET_KEY
#
# Commands:
#   hubot omikuji <column> - select from the data of Google Spreadsheet
#
# Author:
#   bouzuya <m@bouzuya.net>
#
parseConfig = require 'hubot-config'
loadCells = require '../google-sheet'

config = parseConfig 'omikuji-sheet',
  googleEmail: null
  googleKey: null
  googleSheetKey: null

module.exports = (robot) ->
  robot.respond /omikuji ([A-Z]+)$/i, (res) ->
    col = res.match[1]
    loadCells
      credentials:
        email: config.googleEmail
        key: config.googleKey
      spreadsheetKey: config.googleSheetKey
    .then (cells) ->
      values = cells
      .filter (i) -> i.title.match('^' + col)
      .map (i) -> i.content
      res.send """
      #{res.random values}
      """
    .catch (e) ->
      robot.logger.error e
      res.send 'hubot-omikuji-sheet: error'
