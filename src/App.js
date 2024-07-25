import React, { Fragment, useEffect } from "react";
import Card from "./components/Card";
import Chart from "./components/Chart";
import AssetsTable from "./components/AssetsTable";
import { netbannData } from "./api/mainServieces";
import { useDispatch, useSelector } from "react-redux";
import {
  RsetDomain,
  RsetAssets,
  RsetCloud,
  RsetIp,
  RsetLoading,
  selectLoading,
} from "./slices/mainSlices";
import Loading from "./components/Loading";

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);

  const handleNetbannApi = async () => {
    try {
      dispatch(RsetLoading(true));
      const netbannDataRes = await netbannData();
      console.log(netbannDataRes);
      if (netbannDataRes.status === 200) {
        dispatch(RsetAssets(netbannDataRes.data.assets));
        dispatch(RsetDomain(netbannDataRes.data.domain));
        dispatch(RsetIp(netbannDataRes.data.ip));
        dispatch(RsetCloud(netbannDataRes.data.cloud));
        dispatch(RsetLoading(false));
      }
    } catch (err) {
      console.log(err);
      console.log("err ==> netbannData_api");
      dispatch(RsetLoading(false));
    }
  };

  useEffect(() => {
    handleNetbannApi();
  }, []);

  return (
    <div id="app-container" className="m-4">
      {loading === false ? (
        <Fragment>
          <Card />
          <AssetsTable />
        </Fragment>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
