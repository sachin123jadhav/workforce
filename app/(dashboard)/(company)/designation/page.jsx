"use client";
import { useEffect } from "react";

export default function DesignationPage() {
  useEffect(() => {
    console.log("In use effect of holiday Component");
  }, []);
  return (
    <>
      <h1>Designation page</h1>
    </>
  );
}
