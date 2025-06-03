"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  ariaLabel?: string;
};

const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
  icon,
  iconPosition = "right",
  loading = false,
  ariaLabel,
}: ButtonProps) => {
  // Base styles
  const baseStyles = "rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  // Size styles
  const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };
  
  // Variant styles
  const variantStyles = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    text: "text-primary hover:text-primary-dark underline-offset-2 hover:underline",
  };
  
  // Width style
  const widthStyle = fullWidth ? "w-full" : "";
  
  // Disabled style
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyle} ${className}`;
  
  // Button content with icon
  const buttonContent = (
    <>
      {loading ? (
        <span className="animate-spin mr-2">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      ) : icon && iconPosition === "left" ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      
      {children}
      
      {!loading && icon && iconPosition === "right" ? (
        <span className="ml-2">{icon}</span>
      ) : null}
    </>
  );

  // Animation props
  const animationProps = {
    whileHover: { scale: disabled || loading ? 1 : 1.05 },
    whileTap: { scale: disabled || loading ? 1 : 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  // Return link if href is provided, otherwise return button
  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel}>
        <motion.span
          className={buttonStyles}
          {...animationProps}
        >
          {buttonContent}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      {...animationProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;