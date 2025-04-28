import { render, screen } from '@testing-library/react';
import Step1 from '../components/step1';
import '@testing-library/jest-dom';

const mockRegister = jest.fn();
const mockErrors = {};

describe('Step1', () => {
  it('should render all input fields and labels', () => {
    render(<Step1 register={mockRegister} errors={mockErrors} />);
    
    expect(screen.getByLabelText('Nome completo:')).toBeInTheDocument();
    expect(screen.getByLabelText('Data de nascimento:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Gênero:')).toBeInTheDocument();
    expect(screen.getByLabelText('Naturalidade:')).toBeInTheDocument();
    expect(screen.getByLabelText('Estado civil:')).toBeInTheDocument();
    expect(screen.getByLabelText('Celular:')).toBeInTheDocument();
  });

  it('should show if register have been called', () => {
    render( <input type="text" {...mockRegister('completeName', {required: "Informe seu nome completo."})} />)

    expect(mockRegister).toHaveBeenCalledWith('completeName', expect.any(Object));
  });
});
