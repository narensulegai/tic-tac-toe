import {render, screen, fireEvent} from '@testing-library/react';
import Cell from './Cell';

test('should callback with row and col when clicked', (done) => {
    render(<Cell row={0} col={1} onClick={(row, col) => {
        expect(row).toBe(0)
        expect(col).toBe(1)
        done()
    }}/>);
    fireEvent.click(screen.getByRole('button'))
});
