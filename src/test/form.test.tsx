import { render, screen } from '@testing-library/react';
import MultiStepForm from '../components/MultiStepForm';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('should render all input fields and labels', () => {
    render(<MultiStepForm />);
    
    expect(screen.findByText('Step1'));
  });
});
