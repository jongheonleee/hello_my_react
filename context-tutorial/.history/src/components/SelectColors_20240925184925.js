import { Component } from 'react';
import ColorContext from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


class SelectColors extends Component {
    static contextType = ColorContext;

    render() {
        return (
            <div>
                <h2>choose color!!</h2>
                <div style={{ display : 'flex' }}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background : color,
                                    width : '24px',
                                    height : '24px',
                                    cursor : 'pointer'
                                }}
                            />
                        ))}
                </div>
                <hr />
            </div>
        )
    }
}

export default SelectColors;