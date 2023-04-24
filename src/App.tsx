import React from "react";
import { Button } from "antd";
import request from "./util/request";

function App() {
  const [loading, setLoading] = React.useState(false);

  const loadData = async () => {
    setLoading(true);
    
    try {
      await request("https://api.tvmaze.com/search/show");
      throw new Error("test error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Button loading={loading} onClick={loadData}>
        Load Data
      </Button>
    </div>
  );
}

export default App;
