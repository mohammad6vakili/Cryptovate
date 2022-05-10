import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';
import "../../styles/global.scss";

export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: "https://s3-alpha-sig.figma.com/img/a6ea/6be2/29a403bbbd734841c42c496d90a1639d?Expires=1646611200&Signature=QpBTWwZTJyXKPskO2sbHRKjPy5Fd1cqnorlAIYffS46zWz5Q3Dif436nk7KRGg8orJCpqOjYo~g89Qzh6j0e9bPxg4NDSSD7rL2X1Biumh7c93f2glgqcvpeZeSCRFwOh40fExHd2Y6iw5gNJFkKH-O37noX~KY6D6xwCCfbeaZJdjJfeMe66HwV8K1jTsegIl6JAqb98Nu4RMEnaOIsBBrLIFahW7ywx0ufhKDKw1CpDO8GXqn8ea8R~M580QiQu0hLh7Fu4x85r19PkGszkUvU~MM32an~WNXhLrlPk9VLpWv2QO2OQHXgSlI7zHSP3fVoYXDIa51RZktIGiQlRw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  onClick: () => console.log('Clicked!'),
  pill: {
    label: "Lorem Ipsum",
    imgSrc: "https://s3-alpha-sig.figma.com/img/bc17/ce11/f288095b8901cacbf9a2001247fbdaac?Expires=1646611200&Signature=RbwCP5qYSuUqkAxX2yiCs~l4wZFoSmeA~pr-QwDFezpDQ0nPn35eC-5J~TIZRbiR7uxVIKi-XHq9RNTFaX9NSkB6MoYEMJbTPLCivA6MvrXUyVexOxPIwHjpf5X8qvDAglpmmU9742VATJV2Jg0o1J4EiyM01Ts4ki~1zgSe9aNxpkBOQCGZ2UDMMpjvY6DYXQUC0KrJGqCtPo1xHLZf1kAluH3vlKZcR~y2c8-3s-HPbQUumb2Ca5HyRd30yQCPny6mUo0hFjRWe0jmeBeyRK86ILy64YMkksf0jUnJnZ7tyjPH~l-mY84uq5T-uvuoyKxEUXrH1rZKLIVUq1bpvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    isSecondary: false
  }
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: 'secondary',
//   label: 'Button',
//   onClick: () => console.log('Clicked!')
// };