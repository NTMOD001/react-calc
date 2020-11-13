import React, { Component } from 'react';

export default class display extends Component {
    render() {
        return (
            <div>
                <input className="form__input" disabled value={this.props.value} />
            </div>
        )
    }
}