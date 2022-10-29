import React, {useCallback, useEffect, useState} from 'react';
import Grid from "./Grid";

export const generateGrid = (size) => {
    const grid = []
    for (let row = 0; row < size; row++) {
        grid.push(Array(size).fill(0))
    }
    return grid
}
const CACHE_KEY = 'game';

// TODO: grid states ie 0,1,2 need to be defined as constants
const Game = () => {
    const [isCross, setIsCross] = useState(true);
    const [grid, setGrid] = useState(generateGrid(3))
    const [gridSize, setGridSize] = useState(3)

    const handleOnGridSizeChange = (e) => {
        if (window.confirm('Your current game will be reset, are you sure you want to continue?')) {
            const gridSize = parseInt(e.target.value, 10)
            setGridSize(gridSize)
            setGrid(generateGrid(gridSize))
        }
    }
    useEffect(() => {
        const localGame = window.localStorage.getItem(CACHE_KEY)
        if (localGame !== null) {
            const {gridSize, grid} = JSON.parse(localGame);
            setGridSize(gridSize)
            setGrid(grid)
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem(CACHE_KEY, JSON.stringify({gridSize, grid}))
    }, [grid, gridSize])

    const handleOnGridChange = useCallback((row, col) => {
        if (grid[row][col] === 0) {
            grid[row][col] = isCross ? 1 : 2
            setGrid([...grid])
            setIsCross(!isCross)
        }
    }, [grid, isCross]);

    const handleOnReset = () => {
        setGrid(generateGrid(gridSize))
    }

    return <>
        <label htmlFor="grid-size">Select a grid size</label>&nbsp;
        <select value={gridSize} onChange={handleOnGridSizeChange} name="grid-size">
            <option value="3">3X3</option>
            <option value="4">4X4</option>
            <option value="5">5X5</option>
            <option value="6">6X6</option>
        </select>
        <div className={`small-margin-top game-size-${gridSize}`}>
            <div className="container center">
                <Grid onChange={handleOnGridChange} value={grid}/>
            </div>
        </div>
        <button onClick={handleOnReset} className="small-margin-top">Reset</button>
    </>;
};
Game.propTypes = {}
export default Game;
