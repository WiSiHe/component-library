interface ITableProps {
  data: Array<any>;
  columns: Array<string>;
  [key: string]: any;
}

const Table = ({ data, columns, ...props }: ITableProps) => {
  return (
    <table {...props}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
