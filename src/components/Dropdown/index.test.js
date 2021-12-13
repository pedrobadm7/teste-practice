import { Dropdown } from './index';

import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

const title = 'Selecione o Pokemon'
const options = ['Bulbasaur', 'Squirtle', 'Charmeleon']

describe('Dropdown', () => {

    //1. Dropdown começa fechado
    it('should start closed', () => {
        render(
            <Dropdown
                title={title}
                options={options}
                onSelect={() => { }}
            />,
        );

        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    });

    //2. Quero que o Dropdown mostre as opções de menu quando eu clicar no título
    it('should show options when clicked', () => {
        render(
            <Dropdown
                title={title}
                options={options}
                onSelect={() => { }}
            />,
        );

        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();

        userEvent.click(screen.getByRole('button', { name: title }));

        expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: options[1] })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: options[2] })).toBeInTheDocument();
    });

    //3. Quando eu clicar em uma opção, o Dropdown deve fechar
    it('should close when an option is clicked', () => {
        const onSelect = jest.fn();

        render(
            <Dropdown
                title={title}
                options={options}
                onSelect={onSelect}
            />,
        );

        userEvent.click(screen.getByRole('button', { name: title }));

        expect(screen.getByRole('menuitem', { name: options[0] })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: options[1] })).toBeInTheDocument();
        expect(screen.getByRole('menuitem', { name: options[2] })).toBeInTheDocument();

        userEvent.click(screen.getByRole('menuitem', { name: options[0] }));

        expect(onSelect).toHaveBeenCalledWith(options[0]);

        expect(screen.queryByText(options[0])).not.toBeInTheDocument();
        expect(screen.queryByText(options[1])).not.toBeInTheDocument();
        expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    });
});