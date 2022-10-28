import {render, screen, fireEvent} from '@testing-library/react';
import Grid from './Grid';
import {generateGrid} from "./Game";

describe('Grid', () => {
    it('should callback with row and col when clicked', (done) => {
        const grid = generateGrid(4)
        render(<Grid value={grid} onChange={(row, col) => {
            expect(row).toBe(3)
            expect(col).toBe(3)
            done()
        }}/>);
        // click on the last cell
        fireEvent.click([...screen.getAllByRole('button')].at(-1))
    });
})
