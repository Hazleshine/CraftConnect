import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: props.expanded || false,
            height: 0,
        };

        this.contentRef = React.createRef();
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        if (this.contentRef.current) {
            this.setState({ height: this.contentRef.current.scrollHeight });
        }
    }

    toggle() {
        this.setState((prevState) => ({
            expanded: !prevState.expanded,
        }));
    }

    render() {
        const { expanded, height } = this.state;
        const { title, children } = this.props;

        return (
            <div className="card-container">
                <div className="title-container" onClick={this.toggle}>
                    <span className="title">{title}</span>
                </div>
                <div
                    className="content"
                    ref={this.contentRef}
                    style={{ height: expanded ? `${height}px` : '0px' }}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default Card;