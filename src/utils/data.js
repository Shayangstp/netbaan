import { sun, downLeftArrow, glob, conflict, bug, uploadToCloud } from "../assets/svg";
export const cardData = [
  {
    headerTitle: "Domain",
    headerColor: "bg-[#DF6710]",
    headerScore: 300,
    headerIcon: sun,
    liveScore: 60,
    monitoredScore: 300,
    detail: [
      {
        id: "domain",
        title: "Ips",
        icon: glob,
        value: "6",
      },
      {
        id: "domain",
        title: "Ports",
        icon: conflict,
        value: "157",
      },
      {
        id: "domain",
        title: "vulns",
        icon: bug,
        value: "6",
      },
    ],
  },
  {
    headerTitle: "Ip Address",
    headerColor: "bg-[#565392]",
    headerScore: 300,
    headerIcon: sun,
    liveScore: 34,
    monitoredScore: 920,
    detail: [
      {
        title: "Ips",
        icon: glob,
        value: "0",
      },
      {
        title: "Ports",
        icon: conflict,
        value: "91",
      },
      {
        title: "vulns",
        icon: bug,
        value: "11",
      },
    ],
  },
  {
    headerTitle: "Cloud Accounts",
    headerColor: "bg-[#D1B003]",
    headerScore: 4,
    headerIcon: uploadToCloud,
    liveScore: 139,
    monitoredScore: 234,
    detail: [
      {
        title: "Ips",
        icon: glob,
        value: "373",
      },
      {
        title: "Ports",
        icon: conflict,
        value: "261",
      },
      {
        icon: bug,
        title: "vulns",
        value: "234",
      },
    ],
  },
];
