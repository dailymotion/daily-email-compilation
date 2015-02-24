# Dailymotion email compilation [![Build Status](https://travis-ci.org/dailymotion/daily-email-compilation.png?branch=master)](https://travis-ci.org/dailymotion/daily-email-compilation)

Internal module to compile email templates

## Usage

### Installation

    $ npm install --save daily-email-compilation

### Usage

    var compile = require('daily-email-compilation')

    // both arguments are strings, returns a string
    var output = compile(html, css)

### Tests

    $ npm test
