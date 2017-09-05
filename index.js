"use strict";

const Yaml      = require('js-yaml');
const Fs        = require('fs');
const Config    = Yaml.load(Fs.readFileSync("parameters.yml"));
const Vorpal    = require('vorpal')();
const Translate = require('@google-cloud/translate')({
    key: Config.parameters.api_key
});
const Slugify    = require("slugify");
const Clipboardy = require('clipboardy');
const Ora        = require('ora');
const Spinner    = new Ora({
        text : Config.parameters.spinner_text,
        color: Config.parameters.spinner_color
    });
let Languages = Config.parameters.support_language;

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