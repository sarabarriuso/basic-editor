import classnames from 'classnames';
import React from 'react';

export interface IButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
}
export enum ButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

const Button: React.FC<IButtonProps> = ({
  className,
  onClick,
  text,
  disabled,
  variant = ButtonVariant.Primary,
}) => {
  const DEFAULT_CLASSNAME = 'button';

  const buttonClassName: string = classnames(DEFAULT_CLASSNAME, className, {
    [`${DEFAULT_CLASSNAME}--secondary`]: variant === ButtonVariant.Secondary,
    [`${DEFAULT_CLASSNAME}--tertiary`]: variant === ButtonVariant.Tertiary,
  });

  return (
    <button
      className={buttonClassName}
      type='submit'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
