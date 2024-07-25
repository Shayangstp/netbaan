import React, { useEffect } from "react";
import Card from "./components/Card";
import Chart from "./components/Chart";
import AssetsTable from "./components/AssetsTable";
import { netbannData } from "./api/mainServieces";
import { useDispatch, useSelector } from "react-redux";
import { RsetDomain, RsetAssets, RsetCloud, RsetIp } from "./slices/mainSlices";

const App = () => {
  const dispatch = useDispatch();

  const handleNetbannApi = async () => {
    try {
      const netbannDataRes = await netbannData();
      console.log(netbannDataRes);
      if (netbannDataRes.status === 200) {
        dispatch(RsetAssets(netbannDataRes.data.assets));
        dispatch(RsetDomain(netbannDataRes.data.domain));
        dispatch(RsetIp(netbannDataRes.data.ip));
        dispatch(RsetCloud(netbannDataRes.data.cloud));
      }
    } catch (err) {
      console.log(err);
      console.log("err ==> netbannData_api");
    }
  };

  useEffect(() => {
    handleNetbannApi();
  }, []);

  return (
    <div id="app-container" className="m-4">
      <Card />
      <AssetsTable />
    </div>
  );
};

export default App;
