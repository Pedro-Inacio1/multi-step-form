import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/form';
import '@testing-library/jest-dom';

describe('Form Component', () => {
    it('should render step 1 initiality', () => {
        render(<Form/>);
        // expect(screen.getByText('Step 1')).toBeInTheDocument();
    });
})