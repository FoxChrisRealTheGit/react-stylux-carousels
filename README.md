# react-stylux

**This project is part of the larger react-stylux library.**

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. Responsive implementation is in its infancy and will continue to improve. There are currently three sizes, please see Responsive notes for more information.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux-carousels
```

## How To Use Stylux

### Included in the carousels of react-stylux is:
* Carousels 1-5

#### Currently almost done:
* Carousel 2
* Carousel 3
* Carousel 4

### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container1, Holder1, and Navbar1:

```
import {
    Container1,
    Holder1,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container1>
    <Holder1>
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1>
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container1>
    <Holder1
        block1="2">
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.

## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.

### Animation Notes:

**the animation library is not currently built**

### Responsive Notes:
There are two breakpoints on the follow elements:
* containers
* holders

#### Small Breakpoint:
use this through props as: smdis
the breakpoint for this is currently set at max-width: 440px (subject to change)

#### Medium Breakpoint:
use this through props as: mddis
the breakpoint for this is currently set at min-width: 441px and max-width: 1200px (subject to change)


### Carousels


#### Carousel1
```
<Carousel1
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    leftArrowid
    rightArrowid
    sliderid
    mainClassName
    leftArrowClassName
    rightArrowClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel1>
```


#### Carousel2
**Not Finished**
```
<Carousel2
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    sliderid
    mainClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel2>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel2>
```


#### Carousel3
**Not Finished**
```
<Carousel3
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    leftArrowid
    rightArrowid
    sliderid
    mainClassName
    leftArrowClassName
    rightArrowClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel3>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel3>
```


#### Carousel4
**Not Finished**
```
<Carousel4
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    sliderid
    mainClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel4>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel4>
```


#### Carousel5
```
<Carousel5
    arrowColor = 'white'
    background = 'black'
    padding
    height: '450px'
    sliderTimer = '5000'
    mainid
    sliderid
    mainClassName
    sliderClassName
    >

```
This accept unlimited? children and render as slides
```
<Carousel5>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
    <Hero1 image={`url{image1}`}>
    </Hero1>
</Carousel5>
```

## Known Bugs

**Will be added soon**


## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should go to the code of conduct

## Contributing

No Contributions will be accepted outside of the project team until the project is out of full Alpha Testing


## Versioning
for a more detailed list of changes, please refer to the changelog


## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give ackknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style


## Changelog
