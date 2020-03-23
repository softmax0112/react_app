import React from 'react';
import styles from './Spinner.module.scss';

interface SpinnerProps {
    lightBg? : boolean;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ lightBg }) => {
    const colorStyles = {
      background: lightBg ? '#2F4050' : 'white',
    };
  
    return (
      <div className={styles.spinner}>
        <div className={styles.bounce1} style={colorStyles} />
        <div className={styles.bounce2} style={colorStyles} />
        <div className={styles.bounce3} style={colorStyles} />
      </div>
    );
  };
  
  export default Spinner;
  