import React from 'react';

export interface ISpyProps {
    onVisible: any;
    threshold?: number[];
    children?: any;
}

interface ISpyState {
    hasBeenSeen: boolean;
}

export default class Spy extends React.Component<ISpyProps, ISpyState>{
    myThreshold: number[];
    ref = React.createRef();

    constructor(props: any) {
        super(props);
        if (this.props.threshold === null) {
            this.myThreshold = [0]
        } else {
            this.myThreshold = this.props.threshold;
        }
        this.state = {
            hasBeenSeen: false,
        }
    }

    async componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                //Set visual ratio and return props function
                if (entry.intersectionRatio !== 0) {
                    //alternative if to call functions
                }
                if (entry.isIntersecting) {
                    if(entry.intersectionRatio>0 && entry.intersectionRatio<.7){
                        console.log('Hi')
                    }else{
                        console.log('bye')
                    }

                    this.props.onVisible();

                    if (this.state.hasBeenSeen === false) {
                        this.setState({ hasBeenSeen: true });
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: [0, .7]
            }
        )

        if (this.ref.current) {
            //@ts-ignore
            observer.observe(this.ref.current);
        }
    }

    render() {
        return (
            //@ts-ignore
            <div ref={this.ref}>
                {this.props.children}
            </div>
        )
    }
}