# Pretty console.log

A minimalist module to change the behavior of console.log and making it prettier.

## Installation

```bash
npm install pretty-console.log
```

## Usage

```javascript
var pcl = require("pretty-console.log")
pcl.enable() // The next calls to console.log will be prettified
pcl.disable() // The next calls to console.log will not be prettified
pcl("It's pretty !") // The behavior of console.log will not be modified but the argument will be pretty printed
```

### Author

Emeraude
