import * as React from "react"

export const Table = ({ children, className }: React.HTMLAttributes<HTMLTableElement>) => (
  <table className={`w-full border-collapse ${className}`}>{children}</table>
)

export const TableHeader = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-100">{children}</thead>
)

export const TableBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>{children}</tbody>
)

export const TableRow = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-t">{children}</tr>
)

export const TableHead = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-2 text-left font-medium">{children}</th>
)

export const TableCell = ({ children }: { children: React.ReactNode }) => (
  <td className="px-4 py-2">{children}</td>
)