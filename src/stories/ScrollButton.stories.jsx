import React from 'react';

import { ScrollButton } from './ScrollButton';

export default {
  title: 'Applitools Demo/ScrollButton',
  component: ScrollButton,
};

const Template = (args) => <ScrollButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
