import React from 'react';
import styles from './Feedback.module.css';
import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.containerName}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = { 
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;