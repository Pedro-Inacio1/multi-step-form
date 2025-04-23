import React from 'react';
import { render, screen } from '@testing-library/react';
import Step1 from '../components/step1';

const mockRegister = jest.fn();
const mockErrors = {}

describe('Step1', () => {
    it('should render all inputs fields and labels', () => {}
        render(<Step1 register={mockRegister} errors={mockErrors} />);
    )
}
)