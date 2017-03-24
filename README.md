
<a href="https://www.npmjs.com/package/trino"><img src="https://raw.githubusercontent.com/eneserdogan/trino/master/trino.png" width="200"/></a> <img src="https://img.shields.io/npm/dt/trino.svg" style="display:inline-block;"> <img src="https://img.shields.io/npm/v/trino.svg"  style="display:inline-block;"> <img   style="display:inline-block;" src="https://img.shields.io/aur/license/yaourt.svg"> <img  style="display:inline-block;" src="https://img.shields.io/badge/cli-trino-blue.svg">

> Master your translations with command line !

Trino CLI allows a quick and easy translation of words and phrases entered in the command line.

## Getting Started

### Quick Start

Install `trino` from npm:

```bash
$ [sudo] npm install -g trino
```
### Translate Usage

```bash
$ trino
```
```bash
trino$: trino [options] <text> <target>
```
```bash
✔ Translation: <result>
```

### Detect Usage

```bash
$ trino
```
```bash
trino$: trino-dt <text>
```
```bash
✔ Detect: <result>
```
## Options

Copy the translation `automatically`

```bash
trino$: trino --copy "Merhaba" "en"
```
```bash
✔ Translation: Hello
```
cmd + v => Hello

## Autocomplete

Trino supports powerful, robust tabbed autocompletion by default, along with custom autocompletion on both commands and options.

For example:

```bash
$ trino
```
##### Command Autocomplete
```bash
trino$: tr[tab][tab]
```
##### Parameters Autocomplete
```bash
trino$: trino  --c[tab][tab]
```
##### Language Autocomplete

Complete the language selection with Tab+Tab combination

```bash
trino$: trino --copy "Hey dude !" t[tab][tab]

ta  te  tg  th  tl  tr

trino$: trino --copy "Hey dude" tr
```
```bash
trino$: trino --copy "Hey dude !" [tab][tab]

af     am     ar     az     be     bg     bn     bs     ca     ceb    co     cs     cy     da     de     el
en     eo     es     et     eu     fa     fi     fr     fy     ga     gd     gl     gu     ha     haw    hi
hmn    hr     ht     hu     hy     id     ig     is     it     iw     ja     jw     ka     kk     km     kn
ko     ku     ky     la     lb     lo     lt     lv     mg     mi     mk     ml     mn     mr     ms     mt
my     ne     nl     no     ny     pa     pl     ps     pt     ro     ru     sd     si     sk     sl     sm
sn     so     sq     sr     st     su     sv     sw     ta     te     tg     th     tl     tr     uk     ur
uz     vi     yi     zh     zh-TW

trino$: trino --copy "Hey dude" tr
```

## Help
```bash
trino$: help
  
  Commands:

    help [command...]                Provides help for a given command.
    exit                             Exits application.
    trino [options] <text> <target>
    trino-dt <text>
```
## Development environment
`git clone https://github.com/eneserdogan/trino`
```bash
cd trino
$ [sudo] yarn install
```
#### Unit Test
```bash
$ npm test
> trino@1.0.5 test /Users/eneserdogan/Desktop/trino
> mocha

  Trino Command Line Tools
    ✓ <text> => "Hello" <target> => "tr" <result> => "Merhaba"

  1 passing (33ms)
```
## Version

See [the Releases section of our GitHub project](https://github.com/eneserdogan/trino/releases) for changelogs for each release version of Trino.

## License

The GNU General Public License v3.0 - see LICENSE for more details
