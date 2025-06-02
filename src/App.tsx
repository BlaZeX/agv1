
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const sectionA = {
  id: "sectionA",
  label: "General Disclosures",
  questions: [
    { id: "q1", label: "1. Corporate Identity Number (CIN)", type: "text" },
    { id: "q2", label: "2. Name of the Listed Entity", type: "text" },
    { id: "q3", label: "3. Year of Incorporation", type: "number" },
    { id: "q4", label: "4. Registered Office Address", type: "text" },
    { id: "q5", label: "5. Corporate Address", type: "text" },
    { id: "q6", label: "6. E-mail", type: "email" },
    { id: "q7", label: "7. Telephone", type: "text" },
    { id: "q8", label: "8. Website", type: "url" },
    { id: "q9", label: "9. Financial year for which reporting is being done", type: "text" },
    { id: "q10", label: "10. Name of the Stock Exchange(s) where shares are listed", type: "text" },
    { id: "q11", label: "11. Paid-up Capital", type: "text" },
    { id: "q12", label: "12. Name and contact details (telephone, email address) of the person who may be contacted in case of any queries on the BRSR report", type: "textarea" },
    { id: "q13", label: "13. Reporting boundary - Are the disclosures under this report made on a standalone basis or on a consolidated basis?", type: "text" }
  ],
  tables: [
    {
      id: "q14",
      title: "14. Details of business activities (accounting for 90% of the turnover)",
      columns: ["S. No.", "Description of Main Activity", "Description of Business Activity", "% of Turnover of the entity"],
      rows: 3
    },
    {
      id: "q15",
      title: "15. Products/Services sold by the entity (accounting for 90% of the entity’s Turnover)",
      columns: ["S. No.", "Product/Service", "NIC Code", "% of total Turnover contributed"],
      rows: 3
    },
    {
      id: "q16",
      title: "16. Number of locations where plants and/or operations/offices of the entity are situated:",
      columns: ["Location", "Number of plants", "Number of offices", "Total"],
      rows: ["National", "International"]
    },
    {
      id: "q17a",
      title: "17a. Number of locations served:",
      columns: ["Locations", "Number"],
      rows: ["National (No. of States)", "International (No. of Countries)"]
    },
    {
      id: "q17b",
      title: "17b. Contribution of exports and brief on types of customers",
      type: "textarea"
    },
    {
      id: "q17c",
      title: "17c. Markets served by the entity",
      columns: ["Market", "Yes/No"],
      rows: ["India", "Outside India"]
    },
    {
      id: "q18",
      title: "18. Details as at the end of the Financial Year:",
      columns: ["Particulars", "Total (A)", "Male", "Female", "Other"],
      rows: [
        "Employees and workers (including differently abled)",
        "Permanent (Diversity indicators to be reported only for Permanent employees and workers)",
        "Other than Permanent",
        "Differently abled Employees",
        "Permanent",
        "Other than Permanent"
      ]
    },
    {
      id: "q19",
      title: "19. Details of the managerial person(s) responsible for implementation of the Business Responsibility policies",
      columns: ["DIN", "Name", "Designation"],
      rows: 1
    },
    {
      id: "q20",
      title: "20. Details of review of NGRBCs by the Company (Merged Cell Format FY Current and Previous)",
      columns: ["S. No.", "NGRBC Principle", "Whether principle review was undertaken", "If yes, specify frequency (Annually/Half yearly/Quarterly/Any other)", "Whether review was undertaken by Director/Committee of the Board/Any other Committee", "Specify name of the committee"],
      rows: Array.from({ length: 9 }, (_, i) => `P${i + 1}`)
    }
  ]
};

const FormRenderer = ({ section }) => (
  <Card className="m-4 bg-green-50">
    <CardContent className="space-y-4 p-4">
      {section.questions.map((q) => (
        <div key={q.id}>
          <label className="block font-medium mb-1" htmlFor={q.id}>
            {q.label}
          </label>
          {q.type === "textarea" ? (
            <Textarea id={q.id} name={q.id} className="w-full" />
          ) : (
            <Input id={q.id} name={q.id} type={q.type} className="w-full" />
          )}
        </div>
      ))}

      {section.tables?.map((table) => (
        <div key={table.id} className="space-y-2">
          <h2 className="text-lg font-semibold">{table.title}</h2>
          {table.type === "textarea" ? (
            <Textarea id={table.id} name={table.id} className="w-full" />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  {table.columns.map((col, i) => (
                    <TableHead key={i}>{col}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {(Array.isArray(table.rows) ? table.rows : Array.from({ length: table.rows })).map(
                  (row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {table.columns.map((_, colIndex) => (
                        <TableCell key={colIndex}>
                          {typeof row === "string" && colIndex === 0 ? (
                            row
                          ) : (
                            <Input
                              name={`table-${table.id}-${rowIndex}-${colIndex}`}
                              className="w-full"
                            />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          )}
        </div>
      ))}

      <Button type="submit" className="bg-green-600 text-white">
        Save Section
      </Button>
    </CardContent>
  </Card>
);

export default function App() {
  return (
    <main className="min-h-screen bg-green-100 font-sans p-4">
      <h1 className="text-3xl font-bold mb-4 text-green-900">Axial Greens - BRSR Survey Form</h1>
      <FormRenderer section={sectionA} />
    </main>
  );
}
