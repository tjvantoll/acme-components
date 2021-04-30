import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('DatePicker tests', () => {
  test('Ensure acme class name gets added', () => {
    render(<DatePicker />);
    expect(screen.getByRole('group').classList.contains('acme-datepicker'));
  });

  test('Ensure additional class names get added', () => {
    render(<DatePicker className="foo" />);
    const picker = screen.getByRole('group');
    expect(picker.classList.contains('acme-datepicker'));
    expect(picker.classList.contains('foo'));
  });
});
