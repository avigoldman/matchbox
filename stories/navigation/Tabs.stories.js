import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Tabs, Panel, useTabs } from '@sparkpost/matchbox';

const tabs = [
  {
    content: 'Details',
    onClick: action('Details Clicked'),
  },
  {
    content: 'More Details',
    onClick: action('More Details Clicked'),
  },
  {
    content: 'Example with long text',
    onClick: action('Example with long text clicked'),
  },
  {
    content: 'Example with a component wrapper',
    onClick: action('Example with component clicked'),
    Component: React.forwardRef((props, ref) => <a ref={ref} {...props} href="#" />),
  },
];

const dynamicTabs = [
  {
    content: 'Details Dynamic',
    onClick: action('Details Dynamic Clicked'),
  },
  {
    content: 'More Details Dynamic ',
    onClick: action('More Details Clicked'),
  },
  {
    content: 'Example with long text Dynamic',
    onClick: action('Example with long text clicked'),
  },
  {
    content: 'Example with a component wrapper Dynamic',
    onClick: action('Example with component clicked'),
    Component: React.forwardRef((props, ref) => <a ref={ref} {...props} href="#" />),
  },
];

export default {
  title: 'Navigation|Tabs',
};

export const ExampleTabs = () => {
  const { getTabsProps } = useTabs({ tabs });
  return (
    <>
      <Tabs mb="800" {...getTabsProps()} keyboardActivation="manual" />
      <button>this is only here to test focus order</button>
    </>
  );
};

export const AutomaticKeyboardActivation = withInfo()(() => {
  const { getTabsProps } = useTabs({ tabs });
  return <Tabs mb="800" {...getTabsProps()} keyboardActivation="auto" />;
});

export const FittedTabs = withInfo()(() => {
  const { getTabsProps } = useTabs({ tabs });
  return <Tabs mb="800" {...getTabsProps()} fitted keyboardActivation="auto" />;
});

export const ExampleWithinPanel = withInfo()(() => {
  const { getTabsProps } = useTabs({ tabs });
  return (
    <>
      <Panel mb="400">
        <Tabs {...getTabsProps()} />
        <Panel.Section p="400">Example</Panel.Section>
      </Panel>
      <Panel>
        <Tabs fitted {...getTabsProps()} />
        <Panel.Section p="400">Example</Panel.Section>
      </Panel>
    </>
  );
});

export const SystemProps = withInfo()(() => {
  const { getTabsProps } = useTabs({ tabs });
  return (
    <>
      <Tabs borderBottom="none" {...getTabsProps()} my={['400', null, '800', '100px']} />
      <Tabs fitted {...getTabsProps()} mx={['400', null, '800', '200px']} />
    </>
  );
});

export const DynamicTabs = withInfo()(() => {
  const { getTabsProps } = useTabs({ tabs });
  const [tabsProps, setTabsProps] = React.useState(getTabsProps);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTabsProps({
        ...tabsProps,
        tabs: dynamicTabs,
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Tabs mb="800" {...tabsProps} keyboardActivation="manual" />
    </>
  );
});

export const DisabledResponsiveBehavior = withInfo()(() => (
  <Tabs selected={0} disableResponsiveBehavior tabs={tabs} />
));