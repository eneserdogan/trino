"use strict";

const Vorpal    = require('vorpal')();
const Translate = require('@google-cloud/translate')({
    key: 'AIzaSyBTx3natq5Zb7BkuSsp2WeJp74Q-6PXFnY'
});
const Slugify    = require("slugify");
const Clipboardy = require('clipboardy');
const Ora        = require('ora');
const Spinner    = new Ora({
        text: 'Translation loading',
        color: 'yellow'
    });
let Languages = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'ny', 'zh', 'zh-TW', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'haw', 'iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'ps', 'fa', 'pl', 'pt', 'pa', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', 'cy', 'yi'];

Vorpal
    .command('trino <text> <target>')
    .validate(function(args) {
        if (Languages.indexOf(args.target) === -1 || !args.text) {
            Spinner.fail([`Incorrect parameters: <text> => ${args.text} <target> => ${args.target}`]);
            return false;
        } else {
            return true;
        }
    })
    .autocomplete(Languages)
    .option('--c, --copy')
    .option('--s, --slug')
    .action(function(args, callback) {
        Spinner.start();
        Translate.translate(args.text, args.target)
            .then((results) => {
                const translation = results[0];
                if (args.options.copy) {
                    Clipboardy.writeSync((args.options.slug ? Slugify(translation.toLowerCase()) : translation));
                }
                setTimeout(() => {
                    Spinner.succeed([`Translation: ${translation }`]);
                }, 1000)
            });

        callback();
    });

Vorpal
    .command('trino-dt <text>')
    .action(function(args, callback) {
        Spinner.start();
        Translate.detect(args.text)
            .then((results) => {
                let detections = results[0];
                setTimeout(() => {
                    Spinner.succeed([`Detect: ${detections.language}`]);
                }, 1000)
            });
        callback();
    })

Vorpal
    .delimiter('trino$:')
    .show();