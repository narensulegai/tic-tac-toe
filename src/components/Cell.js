import React from 'react';
import PropTypes from 'prop-types';

const Cell = props => {
    const handleOnClick = () => {
        props.onClick(props.row, props.col)
    }

    const label = (val) => {
        return ['Empty', 'Cross', 'Dot'][val];
    }

    return (
        // Using button for accessibility
        <button className="grid-cell marker"
                aria-label={label(props.value)}
                aria-disabled={(props.value === 0)}
                onClick={handleOnClick}
                data-cell-empty={(props.value === 0) + ''}
            // disabled={props.value !== 0}
            // Not sure if we want to disable the button,
            // disabled buttons are not tab-able, the user might
            // just want to read what marker the button contains
        >
            {props.value === 1 && <div className="cross" aria-hidden={true}>
                <div className="left"/>
                <div className="right"/>
            </div>}
            {props.value === 2 && <div className="dot" aria-hidden={true}>
            </div>}
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
