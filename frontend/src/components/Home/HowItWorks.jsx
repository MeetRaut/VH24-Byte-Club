import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { how_1, how_2, how_3, how_4 } from "../../assets/home";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "Register Your Institution",
    text: "Institutions such as orphanages or elderly homes can easily register on the platform to start receiving donations.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "Raise Your Needs",
    text: "Once registered, institutes can submit requests for specific grocery items, indicating the quantity required.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "Donors Choose to Help",
    text: "Donors browse through requests and decide how they would like to contribute, whether by item or a fixed amount.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "Suppliers Deliver",
    text: "The donation request is sent to nearby shops, where payment is made directly to the supplier, who then packs and delivers the items to the institute.",
  },
];


export default function HowItWorks() {
  return (
    <section className="my-14">
      <Container>
        <SectionTitle title="how it works" />
        <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
