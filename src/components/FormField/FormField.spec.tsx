import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { FormField } from './FormField';

describe('<FormField />', () => {
  test('should render readonly input', () => {
    render(<FormField name="Place" placeholder="Placeholder" id="myId" readonly />);

    const field = screen.getByLabelText('Placeholder');

    expect(field).toBeInTheDocument();
    expect(field).toHaveAttribute('readonly');
  });

  test('should change input value from value', () => {
    const TestFormField = () => {
      const [value, setValue] = useState('');

      return (
        <FormField
          name="Place"
          placeholder="Placeholder"
          id="myId"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };
    const utils = render(<TestFormField />);
    const field = utils.getByLabelText('Placeholder') as HTMLInputElement;

    expect(field).toHaveValue('');
    fireEvent.change(field, { target: { value: 'Test value' } });
    expect(field).toHaveValue('Test value');
  });
});
