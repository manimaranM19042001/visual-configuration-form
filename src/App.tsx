import './App.css';
import '@tremor/react/dist/esm/tremor.css'
import Accordion from './Components/Accordion';
import { DropdownControlledExample } from './Components/DropDown';
import { ToggleBasicExample } from './Components/Toggle';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import General from './Charts/General';
import LineChart from './Charts/LineChart';
import FunnelChart from './Charts/FunnelChart';
import WaterFallChart from './Charts/WaterFallChart';
import Error from './Charts/Error';



function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<General />} />
            <Route path="LineChart" element={<LineChart />} />
            <Route path="FunnelChart" element={<FunnelChart />} />
            <Route path="WaterdfsdFallChart" element={<WaterFallChart />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Accordion />
    </div>
  );
}

export default App;
