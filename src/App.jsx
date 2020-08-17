import React from "react";
import { DatePicker, Button } from "antd";

const App = () => (
  <div>
    <h1 className="text-limegreen">Hello World</h1>
    <DatePicker />
    <Button
      className="text-white bg-blue-700 ml-4 hover:bg-limegreen hover:border-gray-900"
      type="primary"
    >
      Greet!
    </Button>
  </div>
);

export default App;
