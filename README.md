# Informing
A simple, ridiculously small module (&lt;2KB) to get information about various things

---

Informing supports:
```none
defaults
maintained node versions
not ie 11
not ie_mob 11
```
[BrowsersList](https://github.com/browserslist/browserslist)

---

## Usage

### informing.agent()
```javascript
informing.agent()
```
Returns the browser's user agent. Returns `null` in NodeJS.

---

### informing.argv()
```javascript
informing.argv()
```
Returns the arguments passed to the program through the CLI. Returns `null` in the browser.

---

### informing.baseURL()
```javascript
informing.baseURL()
```
Returns the origin of the URL. Returns `null` in NodeJS.

---

### informing.day()
```javascript
informing.day()
```
Returns the current day (for example, if today was January 1st, it would return `1`, because today is the first day of the month). Supported in both NodeJS and the browser.

---

### informing.dayOfWeek([number])
```javascript
informing.baseURL()
// OR
informing.baseURL()
```
Returns day of the week. Returns a string (`"Sunday"`, `"Monday"`, `"Tuesday"`, etc.) if the parameter is left alone or set to `false` or a falsy value. If it's set to `true` or a truthy value, it returns the default value of `new Date().getDay()` Supported in both NodeJS and the browser.
