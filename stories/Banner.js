import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from './helpers';

import { Banner, Icon } from '../src';

const primaryAction = {
  content: 'Learn More',
  onClick: action('Learn More Clicked')
};

export default storiesOf('Banner', module)

  .add('Default', () => (
    <StoryContainer>
      <Banner
        title='This is a title'
        status='success'
        action={primaryAction}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure in corrupti quidem quis sint libero quo debitis quibusdam. Illo soluta sequi consequatur accusamus praesentium repudiandae rerum commodi, necessitatibus obcaecati.
      </Banner>

      <br />

      <Banner title='This is a title' status='danger' >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure in corrupti quidem quis sint libero quo debitis quibusdam. Illo soluta sequi consequatur accusamus praesentium repudiandae rerum commodi, necessitatibus obcaecati.
      </Banner>

      <br />

      <Banner title='This is a title' status='warning' >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure in corrupti quidem quis sint libero quo debitis quibusdam. Illo soluta sequi consequatur accusamus praesentium repudiandae rerum commodi, necessitatibus obcaecati.
      </Banner>

      <br />

      <Banner
        status='info'
        action={{
          content: 'Resend Email'
        }}>
        Please click the link in the email we sent you to verify your email adderss and unlock the full features of our service.
      </Banner>

      <br />

      <Banner title='This is a title' >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae iure in corrupti quidem quis sint libero quo debitis quibusdam. Illo soluta sequi <a href=''>consequatur accusamus praesentium</a> repudiandae rerum commodi, necessitatibus obcaecati.
      </Banner>
    </StoryContainer>
  ))

  .add('Fixed', () => (
    <StoryContainer>
      <Banner
        title='Profile Updated'
        status='success'
        onDismiss={action('Dismiss Clicked')}
        fixed >
      </Banner>
    </StoryContainer>
  ));