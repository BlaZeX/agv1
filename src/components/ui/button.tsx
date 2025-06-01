import * as React from "react"

export const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`inline-flex items-center px-4 py-2 rounded bg-green-600 text-white ${className}`} {...props}>
    {children}
  </button>
)