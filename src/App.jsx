import React from 'react';
import './App.css';
import { Select, Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Option} = Select;

function App() {
  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  
  return (
    <div className="App bg-black px-10">
      <Input className="mt-4 bg-black" addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      <Input className="mt-4" addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
      <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
      <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    </div>
  );
}

export default App;
