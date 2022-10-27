import React from 'react';
import PropTypes from 'prop-types';

const Cell = props => {
    const handleOnClick = () => {
        props.onClick(props.row, props.col)
    }

    const symbol = (val) => {
        return ['', 'X', '0'][val];
    }

    return (
        // Using button for accessibility
        <button className="grid-cell marker"
                onClick={handleOnClick} data-cell-empty={(props.value === 0) + ''}
            // disabled={props.value !== 0}
            // Not sure if we want to disable the button,
            // disabled buttons are not tab-able, the user might
            // just want to read what marker the button contains
        >
            {symbol(props.value)}
        </button>
    );
};

Cell.propTypes = {
    value: PropTypes.oneOf([0, 1, 2]),
    col: PropTypes.number,
    row: PropTypes.number,
    onClick: PropTypes.func
};

export default Cell;
