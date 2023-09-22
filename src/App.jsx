import "./App.css";
import FileInfo from "./components/FileInfo";
import ClientInfo from "./components/ClientInfo";
import GroupageInfo from "./components/GroupageInfo";
import AddForm from "./components/AddForm";
import GroupeageTable from "./components/GroupeageTable";
import Button from "./components/Button";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[100dvh] w-[30dvw] flex flex-col items-center">
        <p className="font-medium font-mono text-xl mt-4 border-b-2 border-black">
          INFORMATION
        </p>
        <div className="mt-5 w-full space-y-6">
          <FileInfo />
          <ClientInfo />
          <GroupageInfo />
        </div>
      </div>
      <div className="h-[100dvh] w-[70dvw] flex flex-col items-center">
        <p className="mt-4 font-medium font-mono text-xl border-b-2 border-black">
          Enter File Information
        </p>
        <div className="mt-5 w-full">
          <AddForm />
          <GroupeageTable />
        </div>
        <div className="mt-10 flex justify-center items-center flex-wrap space-x-7 border-t border-black pt-7">
          <Button title="Print Reciepts" />
          <Button title="Print Invoice" />
          <Button title="Received By Email" />
          <Button title="Invoice By Email" />
          <Button title="Print Tables" />
        </div>
      </div>
    </div>
  );
}

export default App;
