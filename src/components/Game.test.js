import {render, screen, fireEvent} from '@testing-library/react';
import Game from './Game';

describe('Game', () => {
    it('should change grid size using the select box', () => {
        const alertMock = jest.spyOn(window, 'confirm').mockImplementation(() => true);
        const {container} = render(<Game/>)
        fireEvent.change(screen.getByRole('combobox'), {target: {value: '4'}})
        expect(alertMock).toBeCalledTimes(1)
        expect(container.querySelectorAll('button[data-cell-empty="true"]')).toHaveLength(16)
    });
})
