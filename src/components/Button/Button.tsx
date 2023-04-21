import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  title?: string;
  href?: string;
  rel?: string;
  target?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  variant?: 'default' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const Button = ({
  children,
  href,
  rel,
  target,
  className,
  title,
  type = 'button',
  variant,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <a
        className={styles.anchor}
        href={href}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={`${styles.btn} ${
          variant === 'icon' ? `${styles.iconBtn}` : ''
        } ${className}`}
        type={type}
        title={title}
        {...props}
      >
        <span className={styles.content}>{children}</span>
        <span className={styles.btnBefore}></span>
        <span className={styles.btnAfter}></span>
      </button>
    );
  }
};

export default Button;
