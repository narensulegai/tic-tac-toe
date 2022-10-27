import React from 'react';
import PropTypes from 'prop-types';
import Cell from "./Cell";

const Grid = props => {
    const handleOnCellClick = (r, c) => {
        props.onChange(r, c);
    }
    return (
        <>
            {props.value.map((row, r) => {
                return <div key={r} className="grid-row">
                    {row.map((col, c) => {
                        return <Cell key={c} value={col} row={r} col={c} onClick={handleOnCellClick}/>
                    })}
                </div>
            })}
        </>
    );
};

Grid.propTypes = {
    onChange: PropTypes.func
};

export default Grid;
