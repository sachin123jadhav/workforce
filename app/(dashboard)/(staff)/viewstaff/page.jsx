"use client";
import HomeBredCurbs from "@/components/partials/HomeBredCurbs";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

import ExampleTwo from "@/components/partials/table/ExampleTwo";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

function page() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {" "}
          <HomeBredCurbs title="Employee List" />
        </div>

        <div className="flex justify-end">
          <Link href="addstaff">
            <Button
              icon="heroicons-outline:newspaper"
              text="Add Staff"
              className="btn-primary "
            />
          </Link>
        </div>
      </div>

      <div className="mt-5 ">
        <ExampleTwo />
      </div>
    </>
  );
}

export default page;
