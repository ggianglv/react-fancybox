# React Fancybox

## Installation

The easiest way to use react-fancybox is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-fancybox.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-fancybox --save
```
or
```
yarn add react-fancybox
```

## Usage

```
import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactFancyBox
          thumbnail="https://loremflickr.com/320/240"
          image="https://www.w3schools.com/howto/img_forest.jpg"/>
      </div>
    );
  }
}

export default App;
```

```
**Other props**

caption: a caption of image
animation: default "fade"
defaultThumbnailWidth: if you dont define thumbnail, this will use image to thumnail
defaultThumbnailHeight: default heigh of thumbnail of you dont define
onOpen: function call after show box
onClose: function call after close box
showCloseBtn: show close btn
```
