# MSER

Javascript implementation of Maximally Stable Extremal Regions (MSER) algorithm

## Install

```bash
$ bower install mser
```

## Description

This implementation is intended for realtime MSER detection in the browser (on a canvas rendering context [ImageData](https://developer.mozilla.org/fr/docs/Web/API/ImageData) object).
For algorithm parameters, please read [this article](http://stackoverflow.com/questions/17647500/exact-meaning-of-the-parameters-given-to-initialize-mser-in-opencv-2-4-x).
The extract method returns an array with detected regions.

## Usage

```js

var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	mser = new MSER({
		delta: 2,
		minArea: 0.001,
		maxArea: 0.5,
		maxVariation: 0.5,
		minDiversity: 0.33
	}),
	regions = mser.extract(context.getImageData(50, 50, 100, 100));

// ...

```
