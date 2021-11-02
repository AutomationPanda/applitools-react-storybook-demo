import React from 'react';

import { TextInput } from './TextInput';

export default {
  title: 'Applitools Demo/TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
