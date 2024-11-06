import { application, checklist } from "../assets/MyAssets";
export const homeCardObj = [
  {
    id: 1,
    title: "Permit Application",
    imageUrl: { application },
    description:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    buttons: [
      {
        id: 1,
        title: "Building Permit Application",
        url: "/permit-application/building-permit-application",
      },
      {
        id: 2,
        title: "Certificate of Occupancy Application",
        url: "/permit-application/cert-of-occupancy-application",
      },
    ],
  },
  {
    id: 2,
    title: "Checklist Generator",
    imageUrl: { checklist },
    description:
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    buttons: [
      {
        id: 1,
        title: "Building Permit Checklist",
        url: "/permit-checklist/building-permit-checklist",
      },
      {
        id: 2,
        title: "Certificate of Occupancy Checklist",
        url: "/permit-checklist/cert-of-occupancy-checklist",
      },
    ],
  },
];
