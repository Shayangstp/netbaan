import React, { useEffect, useState } from "react";
import { hexagon } from "../assets/svg";
import { useDispatch, useSelector } from "react-redux";
import { selectAssets, selectTypeFilter } from "../slices/mainSlices";

const AssetsTable = () => {
  const typeFilter = useSelector(selectTypeFilter);
  const assets = useSelector(selectAssets);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const filteredAssets = typeFilter
    ? assets.filter((asset) => asset.type === typeFilter.toLowerCase())
    : assets;

  return (
    <div className="text-white flex items-center justify-center w-100">
      <div className="mt-10 w-full">
        <div className="bg-[#2b2c38] rounded-lg overflow-hidden">
          <div className="p-4">
            <h1 className="text-lg font-bold">Assets</h1>
          </div>
          <div className="bg-[#2b2c38] mt-10 px-5">
            <table className="w-full text-left mb-10">
              <thead className="p-2 bg-[#454973]">
                <tr>
                  <th className="px-4 py-2">Grade</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Total Vulnerabilities</th>
                  <th className="px-4 py-2">Last Seen</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset, index) => (
                  <tr
                    key={index}
                    className="bg-[#3c3e52] border-b border-gray-700 p-5 cursor-pointer hover:bg-[#343542] transition-all"
                  >
                    <td className="px-4 py-2 relative">
                      <div class="hexagon flex items-center justify-center">
                        <div class="hexagon-text">{asset.grade}</div>
                      </div>
                    </td>
                    <td className="px-4 py-8">{asset.name}</td>
                    <td className="px-4 py-2">{asset.total_vuls}</td>
                    <td className="px-4 py-2">{formatDate(asset.lastSeen)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsTable;
