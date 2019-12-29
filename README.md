# AUTOPICTAG

`AUTOPICTAG` is library for automatically attach a responsive picture tag.

This library automates the responsive handling of images and helps make development faster.

The `<picture>` tag is complex because you need to specify a `<source>` tag for each media query.

`autopictag` automatically generates `<picture>` and `<source>` tags just by specifying the `<img>` tag.

You are relieved of the annoying work of the `<picture>` tag.

## Installation

``` sh
npm install --save-dev autopictag
```



## Usage

The directory structure should be as follows.

```
.
├── img
│   ├── sm
│   │   └── test.png
│   ├── md
│   │   └── test.png
│   ├── lg
│   │   └── test.png
│   └── xl
│       └── test.png
├── js
│   └── index.js
└── index.html
```
The important thing is the image folder.

Create an image file with the same name in the folder named `sm`,` md`, `lg`,` xl`.

Each folder stores images for each device to be displayed.

```
sm : For smartphone 
md : For tablets
lg : For laptop
xl : For desktop
```

--------------------------


Load and run the module

``` js
var autopictag = require("autopictag");
autopictag();
```

Options can be specified

```
autopictag(
    {
        smWidth: '360',   //default is '640'
        mdWidth: '800',   //default is '960'
        lgWidth: '1200',  //default is '1440'
        xlWidth: '1440',  //default is '1500'
    }
);
```


Example :

``` js
var autopictag = require("autopictag");

window.addEventListener('load', () => {
	autopictag(
		{
			smWidth: '360',
			mdWidth: '800',
			lgWidth: '1200',
			xlWidth: '1440'
	    }
	);
});

```


### Before
``` html
<div>
	<img src="./img/lg/test.png" alt="test" />
</div>
```

### After
``` html
<div>
  <picture>
    <source media="(min-width: 1440px)" srcset="./img/xl/test.png">
    <source media="(min-width: 1200px)" srcset="./img/lg/test.png">
    <source media="(min-width: 800px)" srcset="./img/md/test.png">
    <source media="(min-width: 360px)" srcset="./img/sm/test.png">
    <img src="./img/lg/test.png" alt="test">
  </picture>
</div>
```


## License

MIT