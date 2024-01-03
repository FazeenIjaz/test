type Props = {
  data: any;
  columns: any;
};

const Table = ({ data, columns }: Props) => {
  return (
    <div className="main">
      <table className="table">
        <thead className="table__header ">
          <tr>
            {columns.map((column: any) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.referenceNo}>
              <td className="table__row">{item.referenceNo}</td>
              <td>{item.amount}</td>
              <td>{item.dueOn}</td>
              <td className="table__row-last">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
