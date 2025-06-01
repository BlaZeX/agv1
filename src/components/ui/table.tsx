
export const Table = ({ children }) => <table className="w-full border">{children}</table>;
export const TableHeader = ({ children }) => <thead>{children}</thead>;
export const TableBody = ({ children }) => <tbody>{children}</tbody>;
export const TableRow = ({ children }) => <tr>{children}</tr>;
export const TableHead = ({ children, ...props }) => <th {...props} className="border px-2 py-1">{children}</th>;
export const TableCell = ({ children }) => <td className="border px-2 py-1">{children}</td>;
