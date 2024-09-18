import React from 'react'
interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
 }

const Button = ({ label, secondary, fullWidth, large, onClick, disabled, outline }: ButtonProps) => {
  
  return (
    <div>

    </div>
  )
}

export default Button