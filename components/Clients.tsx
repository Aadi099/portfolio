"use client";

import React from "react";
import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="clients" className="py-20">
      <h1 className="heading">
        Tech
        <span className="text-purple">Stack</span>
      </h1>

      {/* Adding a margin to create space between the heading and the company logos */}
      <div className="flex flex-col items-center max-lg:mt-10 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <div className="font-semibold text-lg md:text-xl text-white">
                  {company.name}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
