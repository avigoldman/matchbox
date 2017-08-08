import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';

import styles from './Banner.module.scss';
import { buttonFrom } from '../Button';

const actionOverrides = { outline: true };

const IconSection = ({ status }) => {
  const icons = {
    success: 'CheckCircle',
    info: 'InfoOutline',
    warning: 'Error',
    danger: 'Error'
  };

  if (status === 'default' || !icons[status]) {
    return null;
  }

  const iconClasses = classnames(
    styles.Icon,
    status && styles[`${status}Icon`]
  );

  return (
    <div className={styles.IconWrapper}>
      <Icon name={icons[status]} size={30} className={iconClasses} />
      <div className={styles.IconBackdrop} />
    </div>
  );
};

class Banner extends Component {
  static propTypes = {
    /**
     * The type of banner. 'default' | 'success' | 'warning' | 'danger' | 'info'
     */
    status: PropTypes.oneOf(['default', 'success', 'warning', 'danger', 'info']),

    /**
     * The banner's title
     */
    title: PropTypes.string,

    /**
     * Callback when dismiss button is clicked. Button hidden without callback.
     */
    onDismiss: PropTypes.func,

    /**
     * Absolute positions the banner
     */
    overlay: PropTypes.boolean,

    /**
     * Action that build a button. Most button props will work in here.
     * e.g. { content: 'button label', onClick: callback() }
     */
    action: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string.isRequired
    })),

    /**
     * Banner Content
     */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  };

  static defaultProps = {
    status: 'default'
  };

  render() {
    const {
      children,
      title,
      status,
      action,
      overlay,
      onDismiss,
      ...rest
    } = this.props;

    const titleMarkup = title
      ? <h5 className={styles.Title}>{ title }</h5>
      : null;

    const actionMarkup = action
      ? <div className={styles.Actions}>{ buttonFrom(action, actionOverrides) }</div>
      : null;

    const dismissMarkup = onDismiss
      ? <a className={styles.Dismiss} onClick={onDismiss}><Icon name='Close' size={24} className={styles.DismissIcon} /></a>
      : null;

    const bannerStyles = classnames(
      styles.Banner,
      styles[`${status}`],
      overlay && styles.overlay
    );

    return (
      <div className={bannerStyles} {...rest}>
        <IconSection status={status} />
        <div className={styles.Content}>
          { dismissMarkup }
          { titleMarkup }
          { children }
          { actionMarkup }
        </div>
      </div>
    );
  }
};

Banner.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf(['info', 'warning', 'success', 'danger', 'default']),
  overlay: PropTypes.bool,
  onDismiss: PropTypes.func,
  action: PropTypes.shape({
    content: PropTypes.string.isRequired
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Banner;
