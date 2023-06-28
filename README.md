# Volto Introduction Block (by kitconcept)

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-introduction-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-introduction-block)
[![Build Status](https://github.com/kitconcept/volto-introduction-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-introduction-block/actions)
[![Build Status](https://github.com/kitconcept/volto-introduction-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-introduction-block/actions)
[![Build Status](https://github.com/kitconcept/volto-introduction-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-introduction-block/actions)

![kitconcept GmbH](https://raw.githubusercontent.com/kitconcept/volto-form-builder/master/kitconcept.png)

## Introduction

A standalone (detached slate) block that provides a text block meant to be used as introduction to a content page. This text usually having special formatting. It allows different paragraphs using breaklines (ENTER). It does not allow certain styling (as headings).


## Block configuration

### `unwantedButtons`

It allows you to specify which buttons from the current slate block toolbar should be removed from the introduction block.
The default is to remove the buttons for any heading and the blockquote.

You can configure them using this setting.
This custom configuration will remove the `h3` and `blockquote`.:


```js
  config.blocks.blocksConfig.introduction = {
    ...config.blocks.blocksConfig.introduction,
    unwantedButtons: ['heading-three', 'blockquote'],
  };
```

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
