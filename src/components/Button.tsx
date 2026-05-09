import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    // If it's an external link
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    // Internal link
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
