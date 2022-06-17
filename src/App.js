import "./styles.css";
import React from "react";

function App() {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
}
export default App;
