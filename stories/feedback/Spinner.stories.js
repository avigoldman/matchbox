import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Spinner, Box } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|Spinner',
};

export const Color = withInfo()(() => (
  <div>
    <Box display="flex" alignItems="center">
      <Spinner label="loading" />
      <Spinner color="orange" label="loading" />
      <Spinner color="gray" label="loading" />
      <Box bg="blue.700">
        <Spinner color="white" label="loading" />
      </Box>
    </Box>
  </div>
));

export const Sizing = withInfo()(() => (
  <Box display="flex" alignItems="center">
    <Spinner size="large" label="loading" />
    <Spinner size="medium" label="loading" />
    <Spinner size="small" label="loading" />
  </Box>
));

export const RotationOnly = withInfo()(() => (
  <Box display="flex" alignItems="center">
    <Spinner size="large" label="loading" rotationOnly />
    <Spinner size="medium" label="loading" rotationOnly />
    <Spinner size="small" label="loading" rotationOnly />
  </Box>
));

export const SystemProps = withInfo()(() => (
  <div>
    <Spinner size="large" height={['10rem', null, null, '14rem']} label="loading" />
    <Spinner mb={400} color="orange" label="loading" />
    <Spinner ml={300} size="small" color="gray" label="loading" />
  </div>
));