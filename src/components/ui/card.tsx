import * as React from "react"

const Card = ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-lg border bg-white text-black shadow-sm ${className}`}>
    {children}
  </div>
)

const CardContent = ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-4 ${className}`}>{children}</div>
)

export { Card, CardContent }