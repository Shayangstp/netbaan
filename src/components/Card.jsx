import React from "react";
import Chart from "./Chart";
import { useDispatch, useSelector } from "react-redux";
import { selectDomain, selectIp, selectCloud, RsetTypeFilter } from "../slices/mainSlices";
import { sun, downLeftArrow, glob, conflict, bug, uploadToCloud } from "../assets/svg";

const Card = () => {
  const dispatch = useDispatch();

  const domain = useSelector(selectDomain);
  const cloud = useSelector(selectCloud);
  const ip = useSelector(selectIp);

  const domainIcon = sun;
  const cloudIcon = uploadToCloud;
  const ipIcon = sun;
  const cloudHeader = 4;
  const domainHeader = 300;
  const ipHeader = 300;
  const cloudColor = "bg-[#D1B003]";
  const domainColor = "bg-[#DF6710]";
  const ipColor = "bg-[#565392]";

  const dataArray = [
    {
      ...domain,
      headerIcon: domainIcon,
      headerColor: domainColor,
      headerNum: domainHeader,
      headerTitle: "Domain",
      detail: [
        {
          title: "Ips",
          icon: glob,
          value: domain.ips,
        },
        {
          title: "Ports",
          icon: conflict,
          value: domain.ports,
        },
        {
          title: "vulns",
          icon: bug,
          value: domain.vulns,
        },
      ],
    },
    {
      ...ip,
      headerIcon: ipIcon,
      headerColor: ipColor,
      headerNum: ipHeader,
      headerTitle: "Ip",
      detail: [
        {
          title: "Ips",
          icon: glob,
          value: ip.ips,
        },
        {
          title: "Ports",
          icon: conflict,
          value: ip.ports,
        },
        {
          title: "vulns",
          icon: bug,
          value: ip.vulns,
        },
      ],
    },
    {
      ...cloud,
      headerIcon: cloudIcon,
      headerColor: cloudColor,
      headerNum: cloudHeader,
      headerTitle: "Cloud",
      detail: [
        {
          title: "Ips",
          icon: glob,
          value: cloud.ips,
        },
        {
          title: "Ports",
          icon: conflict,
          value: cloud.ports,
        },
        {
          title: "vulns",
          icon: bug,
          value: cloud.vulns,
        },
      ],
    },
  ];

  return (
    <div className="flex justify-between gap-2">
      {dataArray.map((item, idx) => {
        return (
          <div
            key={idx}
            id="card-container"
            className="text-white w-[32%] bg-[#1D2229] rounded-lg pb-5 cursor-pointer hover:bg-[#21272e] transition-all"
            onClick={() => {
              dispatch(RsetTypeFilter(item.headerTitle));
            }}
          >
            <div id="card-header" className="flex justify-between px-3 py-4">
              <div id="icon" className="flex flex-col  items-center rounded-xl">
                <div
                  id="sun-svg"
                  className={`mx-4 ${item.headerColor} w-full rounded-t-xl flex justify-center pb-1 pt-1`}
                >
                  <span>{item.headerIcon}</span>
                </div>
                <span
                  id="num"
                  className="py-1 bg-[#EEE9E9] w-full text-black text-center font-bold rounded-b-xl"
                >
                  {item.headerNum}
                </span>
              </div>
              <div id="arrow">{downLeftArrow}</div>
            </div>
            <div id="domain" className="mx-4">
              <div className="border-b border-[#FFFFFF] mt-3 pb-1 font-bold">
                <div className="border-b pb-1">{item.headerTitle}</div>
                <div id="detail" className="grid grid-cols-2">
                  <div id="live" className="col-span-1 flex items-center">
                    <div id="detail-text" className="flex flex-col items-start p-5">
                      <span className="font-bold">Live</span>
                      <div className="font-bold text-[20px]">{item.total_live}</div>
                    </div>
                    <div id="detail-chart" className="">
                      {item.live && <Chart data={item.live} />}
                    </div>
                  </div>
                  <div id="monitore" className="col-span-1 flex items-center">
                    <div id="detail-text" className="flex flex-col items-start p-5">
                      <span className="font-bold">Monitored</span>
                      <div className="font-bold text-[20px]">{item.total_monitored}</div>
                    </div>
                    <div id="detail-chart" className="">
                      {item.monitored && <Chart data={item.monitored} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="detail-card-container" className="mx-4 flex justify-between mt-4">
              {item.detail.map((detailItem, idx) => {
                return (
                  <div key={idx} className="flex gap-2">
                    <div className="bg-[#327794] rounded-lg p-2 my-auto">{detailItem.icon}</div>
                    <div className="flex flex-col justify-center">
                      <span className="font-bold">{detailItem.title}</span>
                      <vspan className="font-bold text-[20px]">{detailItem.value}</vspan>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
