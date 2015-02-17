'use strict';

var jsdom = require('jsdom-daily')
  , juice = require('juice-daily')
  , htmlparser2 = require('htmlparser2-daily')

jsdom.defaultDocumentFeatures = {
    QuerySelector: ['1.0']
  , FetchExternalResources: false
  , ProcessExternalResources: false
  , MutationEvents: false
}

function dom(html) {
  return jsdom.jsdom(html, jsdom.level(1, 'core'), {
      forceRaw: true
    , ignoreChars: ['nbsp']
    , parser: htmlparser2
  })
}

function compile(html, css) {
  var document = dom(html)
  juice.inlineDocument(document, css)
  var inner = document.innerHTML
  try {
    document.parentWindow.close()
  }
  catch (cleanupErr) {}

  return inner
}

module.exports = compile
