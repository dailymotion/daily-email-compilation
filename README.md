# Dailymotion email compilation

Internal module to compile email templates

## Usage

Installation

    $ npm install --save daily-email-compilation

Usage

    var compile = require('daily-email-compilation')

    // both arguments are strings, returns a string
    var output = compile(html, css)
