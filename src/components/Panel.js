import React, { Component } from 'react';
import Pad from './Pad'
export default class Panel extends Component {

    handleClick = (key) => {

        this.props.calculate(key);
    }
    render() {
        return (
            <div >
                <div className="grid-container">
                    <Pad name="AC" onPadClick={this.handleClick}></Pad>
                    <Pad name="(" onPadClick={this.handleClick}></Pad>
                    <Pad name=")" onPadClick={this.handleClick}></Pad>
                    <Pad name="/" onPadClick={this.handleClick}></Pad>
                </div>
                <div className="grid-container">
                    <Pad name="7" onPadClick={this.handleClick}></Pad>
                    <Pad name="8" onPadClick={this.handleClick}></Pad>
                    <Pad name="9" onPadClick={this.handleClick}></Pad>
                    <Pad name="*" onPadClick={this.handleClick}></Pad>
                </div>
                <div className="grid-container">
                    <Pad name="4" onPadClick={this.handleClick}></Pad>
                    <Pad name="5" onPadClick={this.handleClick}></Pad>
                    <Pad name="6" onPadClick={this.handleClick}></Pad>
                    <Pad name="-" onPadClick={this.handleClick}></Pad>
                </div>
                <div className="grid-container">
                    <Pad name="1" onPadClick={this.handleClick}></Pad>
                    <Pad name="2" onPadClick={this.handleClick}></Pad>
                    <Pad name="3" onPadClick={this.handleClick}></Pad>
                    <Pad name="+" onPadClick={this.handleClick}></Pad>
                </div>
                <div className="grid-container">
                    <Pad name="Del" onPadClick={this.handleClick}></Pad>
                    <Pad name="0" onPadClick={this.handleClick}></Pad>
                    <Pad name="." onPadClick={this.handleClick}></Pad>
                    <Pad name="=" onPadClick={this.handleClick}></Pad>
                </div>
            </div>
        )
    }
}