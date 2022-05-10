import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MemoryRouter } from 'react-router-dom';
import "../../styles/global.scss";
import Switch from './Switch';

export default {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' }
  },
  argTypes: { handleChange: { action: 'changed' } },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args: any) => <MemoryRouter><Switch {...args} /></MemoryRouter>;

export const Default = Template.bind({
    args: {
        handleChange: (val: any) => console.log('changed => ', val),
        isChecked: true
    }
});

