import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';

import styles from './Banner.module.scss';
import { buttonFrom } from '../Button';

const actionOverrides = { outline: true };

const IconSection = ({ status }) => {
  const icons = {
    success: 'Check',
    info: 'InfoOutline',
    warning: 'Warning',
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
      <Icon name={icons[status]} size={27} className={iconClasses} />
    </div>
  );
};

class Banner extends Component {
  render() {
    const {
      children,
      title,
      status = 'default',
      action,
      fixed,
      onDismiss
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
      fixed && styles.fixed
    );

    return (
      <div className={bannerStyles}>
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
  fixed: PropTypes.bool,
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