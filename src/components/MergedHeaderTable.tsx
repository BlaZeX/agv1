
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

type HeaderCell = {
  label: string;
  colSpan?: number;
  rowSpan?: number;
};

type Row = {
  label: string;
  isHeader?: boolean;
};

type Props = {
  title: string;
  headerGroups: HeaderCell[][];
  rows: Row[];
  id: string;
};

export const MergedHeaderTable: React.FC<Props> = ({
  title,
  headerGroups,
  rows,
  id,
}) => (
  <div className="space-y-2">
    <h2 className="text-lg font-semibold">{title}</h2>
    <Table>
      <TableHeader>
        {headerGroups.map((group, groupIdx) => (
          <TableRow key={groupIdx}>
            {group.map((cell, i) => (
              <TableHead
                key={i}
                colSpan={cell.colSpan || 1}
                rowSpan={cell.rowSpan || 1}
              >
                {cell.label}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIdx) => (
          <TableRow key={rowIdx}>
            <TableCell>
              <span className={row.isHeader ? "font-semibold" : ""}>
                {row.label}
              </span>
            </TableCell>
            {Array.from({ length: 9 }).map((_, colIdx) => (
              <TableCell key={colIdx}>
                <Input
                  name={`table-${id}-${rowIdx}-${colIdx}`}
                  className="w-full"
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
