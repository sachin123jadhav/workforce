"use client";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
import Card from "@/components/ui/Card";
import { Tab, Disclosure, Transition } from "@headlessui/react";

import Accordion from "@/components/ui/Accordion";
import React, { Fragment, useEffect, useState } from "react";

import Textinput from "@/components/ui/Textinput";
import Checkbox from "@/components/ui/Checkbox";

import AddStaff from "@/components/partials/froms/AddStaff";

const buttons = [
  {
    title: "Add Employee",
    icon: "heroicons-outline:home",
  },
  {
    title: "View Employee",
    icon: "heroicons-outline:user",
  },
];
const items = [
  {
    title: "How does Dashcode work?",
    content:
      "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
  },
];

const page = () => {
  return (
    <>
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            {" "}
            <HomeBredCurbs title="Add Employee" />
          </div>
        </div>

        <div>
          <AddStaff></AddStaff>
        </div>
      </div>
    </>
  );
};

export default page;
