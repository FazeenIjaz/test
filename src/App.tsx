import "./App.css";
import Table from "./components/Table";
import { tableData, tableColumns } from "./data";

function App() {
  return (
    <div>
      <Table data={tableData} columns={tableColumns} />
    </div>
  );
}

export default App;
