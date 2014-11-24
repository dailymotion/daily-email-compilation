'use strict';

var assert  = require('assert')
  , fs      = require('fs')
  , path    = require('path')
  , compile = require('./../index')
  , css     = content('example.css')

function content(name) {
  return fs.readFileSync(path.join(__dirname, name), 'utf-8')
}

describe('Should inline the css in the html', function() {
  it('should simply inline the css', function() {
    var input  = content('specs/input-1.html')
      , output = content('specs/output-1.html')
      , result = compile(input, css)
    assert.equal(result, output)
  })

  it('should keep encoded characters', function() {
    var input  = content('specs/input-2.html')
      , output = content('specs/output-2.html')
      , result = compile(input, css)
    assert.equal(result, output)
  })

  it('should keep twig untouched in html tags', function() {
    var input  = content('specs/input-3.html')
      , output = content('specs/output-3.html')
      , result = compile(input, css)
    assert.equal(result, output)
  })

  it('should keep twig untouched in html attributes', function() {
    var input  = content('specs/input-4.html')
      , output = content('specs/output-4.html')
      , result = compile(input, css)
    assert.equal(result, output)
  })
})
