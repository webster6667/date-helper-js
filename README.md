<p align="center" style="text-align:center">
    <img src="./illustration.svg" alt="ilustration" width="100"/>
</p>

# date-helper-js

> functions for working with date

[![npm version](https://badge.fury.io/js/date-helper-js.svg)](https://www.npmjs.com/package/date-helper-js)
[![](https://data.jsdelivr.com/v1/package/npm/date-helper-js/badge)](https://www.jsdelivr.com/package/npm/date-helper-js)


## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Initialization](#initialization)
- [Methods](#methods)
  - [getMonthNameByMonthIndex](#getMonthNameByMonthIndex)
  - [getDayOfWeekNumber](#getDayOfWeekNumber)
  - [getDayOfMonthNumber](#getDayOfMonthNumber)
  - [getDateByDayOfMonthNumber](#getDateByDayOfMonthNumber)
  - [getNextMonth](#getNextMonth)
  - [getPrevMonth](#getPrevMonth)
  - [getFirstDateOfMonth](#getFirstDateOfMonth)
  - [getLastDateOfMonth](#getLastDateOfMonth)
  - [isDatesEqual](#isDatesEqual)

## Quick start

### Install

We support all platforms.

#### npm

For module bundlers such as Webpack or Browserify.

```shell
npm i date-helper-js
```

#### Include with &lt;script&gt;

Download and install with `script`.

```html
<script src="date-helper-js.js"></script>
```

##### CDN

Recommended for learning purposes, you can use the latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/date-helper-js/dist/lib/date-helper.js"></script>
```

Recommended for production for avoiding unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/date-helper-js@1.0.2/dist/lib/date-helper.js"></script>
```

### Initialization

#### ES6

date-helper-js as an ES6 module.

```js
import { getMonthNameByMonthIndex } from 'date-helper-js';

getMonthNameByMonthIndex(1)
```

#### Node

date-helper-js as a Node.js module

```js
const { getMonthNameByMonthIndex } = require('date-helper-js');

getMonthNameByMonthIndex(1)
```

#### Browser

Exports a global variable called `dateHelper`. Use it like this

Connect to html file ```<script src="https://cdn.jsdelivr.net/npm/date-helper-js/dist/lib/date-helper.js" ></script>```

```html
<script>
    dateHelper.getMonthNameByMonthIndex(1);
</script>
```

#### AMD

date-helper-js as an AMD module. Use with Require.js, System.js, and so on.

1. <a href="https://cdn.jsdelivr.net/npm/date-helper-js/dist/lib/date-helper.js" target="_blank">Download lib</a>
2. Connect to your module loader

```js
requirejs(['date-helper'], function(dateHelper) {
    dateHelper.getMonthNameByMonthIndex(1)
});
```

## Methods

### getMonthNameByMonthIndex

Return monthName by month index


#### Params
- `monthIndex`
  - Type: `number`
  
- `arrayOfMonthNames`
  - Type: `Array.&lt;string&gt;`
  

#### Returns
- `string`

#### Example
```JS
const monthIndex = 1
const monthNamesArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
getMonthNameByMonthIndex(monthIndex, monthNamesArray)
// => 'February'
```


### getDayOfWeekNumber

Return day of week number for selected date
(0 - Sunday, 6 - Saturday)


#### Params
- `date`
  - Type: `Date`
  

#### Returns
- `number`

#### Example
```JS
getDayOfWeekNumber(new Date("2017-01-26")) //Thursday
// => 4
```


### getDayOfMonthNumber

Return day of month number for selected date


#### Params
- `date`
  - Type: `Date`
  

#### Returns
- `number`

#### Example
```JS
getDayOfMonthNumber(new Date("2017-01-26")) //Thursday
// => 26
```


### getDateByDayOfMonthNumber

Return Date by day of month number for selected date


#### Params
- `date`
  - Type: `Date`
  
- `dayOfMontNumber`
  - Type: `Date`
  

#### Returns
- `Date`

#### Example
```JS
getDateByDayOfMonthNumber(new Date("2017-01-26"), 2)
// => new Date("2017-01-2")
```


### getNextMonth

Return next month Date of selected date


#### Params
- `date`
  - Type: `Date`
  

#### Returns
- `Date`

#### Example
```JS
getNextMonth(new Date("2017-01-26"))
// => new Date("2017-02-26")
```


### getPrevMonth

Return prev month Date of selected date


#### Params
- `date`
  - Type: `Date`
  

#### Returns
- `Date`

#### Example
```JS
getPrevMonth(new Date("2017-02-26"))
// => new Date("2017-01-26")
```


### getFirstDateOfMonth

Return first day of month from selected date


#### Params
- `date`
  - Type: `Date`
  

#### Returns
- `Date`

#### Example
```JS
getFirstDateOfMonth(new Date("2017-01-26"))
// => new Date("2017-01-01")
```


### getLastDateOfMonth

Return last day of month from selected date


#### Params
- `date`
  - Type: `Date`
  

#### Returns
- `Date`

#### Example
```JS
getLastDateOfMonth(new Date("2017-01-26"))
// => new Date("2017-01-31")
```


### isDatesEqual

Return result of comparing two dates


#### Params
- `firstDate`
  - Type: `Date`
  
- `secondDate`
  - Type: `Date`
  
- `shouldCompareTime`
  - Type: `boolean`
  

#### Returns
- `Date`

#### Example
```JS
isDatesEqual(new Date("2017-01-26"), new Date("2017-01-26"))
// => true

isDatesEqual(new Date("2017-01-26"), new Date("2017-01-27"))
// => false

isDatesEqual(new Date("2017-01-26 15:15:16"), new Date("2017-01-26 15:15:15"), true)
// => false
```



## Author

webster6667
