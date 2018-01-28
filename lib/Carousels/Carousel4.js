import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';
import '../css/SuperStyleSheet.css';

export default class Carousel4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [],
            cur: 0,
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            sliderClassName: props.sliderClassName,
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    componentDidMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        const intervalTime = setInterval(this.slideRight, this.state.slideTimer)
        this.setState({ sliderImages: slides, intervalTime })
    }
    componentWillReceiveProps(newProps) {
        let slides = [];
        const CHILDS = React.Children.toArray(newProps.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        const intervalTime = setInterval(this.slideRight, this.state.slideTimer)
        this.setState({ sliderImages: slides, intervalTime })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalTime);
    }
    slideLeft() {
        if (this.state.cur === 0) {
            return this.setState({ cur: this.state.sliderImages.length - 1 })
        } else {
            return this.setState({ cur: this.state.cur - 1 })
        }
    }
    slideRight() {
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            return this.setState({ cur: 0 })

        } else {
            return this.setState({ cur: this.state.cur + 1 })
        }
    }

    render() {
        const WRAP = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            background: this.state.background,
            overflowY: 'hidden',
            display: 'flex',
            padding: this.state.padding,
        };
        const SLIDER = {
            width: '100%',
            overflowX: 'hidden',
            height: this.state.height,
        };
        const SLIDE = {
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: this.state.height,
            // display:'block'
        };
        const SLIDE_CONTENT = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        };
        const RENDERSLIDES = this.state.sliderImages.map((x, i) => {
            return (
                <div key={i} style={SLIDE}>
                    <div style={SLIDE_CONTENT}>
                        {x}
                    </div>
                </div>
            )
        })
        return (
            <div style={WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                <div style={SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                    {RENDERSLIDES[this.state.cur]}
                </div>
            </div>
        )
    }
}
