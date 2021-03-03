import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { ProgressBar } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|ProgressBar',
};

export const Default = withInfo()(() => (
  <div>
    <ProgressBar completed={54} mb={400} label="My Progress Bar" />
    <ProgressBar completed={82} size="small" label="My Progress Bar" />
  </div>
));