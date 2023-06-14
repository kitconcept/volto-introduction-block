# Volto Introduction Block (by kitconcept)

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-introduction-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-introduction-block)
[![Build Status](https://github.com/kitconcept/volto-introduction-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-introduction-block/actions)
[![Build Status](https://github.com/kitconcept/volto-introduction-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-introduction-block/actions)
[![Build Status](https://github.com/kitconcept/volto-introduction-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-introduction-block/actions)

![kitconcept GmbH](https://raw.githubusercontent.com/kitconcept/volto-form-builder/master/kitconcept.png)

## Introduction

A standalone (detached slate) block that provides a text block meant to be used as introduction to a content page. This text usually having special formatting. It allows different paragraphs using breaklines (ENTER). It does not allow certain styling (as headings).

## Install

If you already have a Volto project, just update `package.json`:

```JSON
"addons": [
    "@kitconcept/volto-introduction-block"
],

"dependencies": {
    "@kitconcept/volto-introduction-block": "*"
}
```

If not, create one:

```shell
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-blocks-grid
cd my-volto-project
```

Install new add-on and restart Volto:

```shell
yarn install
yarn start
```

Go to http://localhost:3000
