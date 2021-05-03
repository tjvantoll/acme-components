import React from 'react';
import DatePicker from 'acme-components/DatePicker';
import 'acme-components/theme.css';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
};

export const Default = () => <DatePicker />

export const Disabled = () => <DatePicker disabled />