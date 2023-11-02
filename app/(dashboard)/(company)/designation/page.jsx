"use client";
import { getDesignationData, updateDesignationData } from "@/store/designation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

export default function DesignationPage() {
  let no = 0;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuth.token);
  const designationData = useSelector(
    (state) => state.designation.designationData
  );
  const designationText = useSelector((state) => state.designation.text);

  useEffect(() => {
    console.log("In useEffect of designation update");
    if (designationText) dispatch(getDesignationData(token));
  }, [designationText]);

  useEffect(() => {
    console.log("In useEffect of designation data");
    if (designationData) setData(designationData);
  }, [designationData]);

  useEffect(() => {
    console.log("In useEffect of empty");
    dispatch(getDesignationData(token));
  }, []);

  const headerList = ["Sr No", "Designation", "Action"];

  function handleChange(id) {
    let val = document.getElementById("username").value;
    console.log("username  change ->", val);
    console.log("designation id ->", id);

    dispatch(updateDesignationData(token, id, val));
  }

  console.log("Above return function");

  return (
    <>
      <div className="m-4">
        <h5>Designation page</h5>
      </div>
      <section>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {headerList.map((header) => {
                  return (
                    <th scope="col" className="px-6 py-3">
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data?.map((uData, i) => {
                no = no + 1;
                // console.log(i);
                // console.log(uData);
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{no}</td>
                    <td className="px-6 py-4">{uData.designation}</td>
                    <td className="px-6 py-4">
                      <Modal
                        title="Update Designation"
                        label="Update"
                        icon="heroicons-outline:plus-sm"
                        iconClass="text-lg"
                        labelClass="btn-primary  rounded-[999px]"
                        uncontrol
                        centered
                        // closeModal={closeModal()}
                        footerContent={
                          <Button
                            text="Update"
                            className="btn-dark "
                            // onClick={inputValue}
                            onClick={() => handleChange(uData.id)}
                          />
                        }
                      >
                        <form>
                          <div class="mb-4">
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              type="text"
                              defaultValue={uData.designation}
                            />
                          </div>
                        </form>
                        {/* <div className="text-base text-slate-600 dark:text-slate-300"></div> */}
                      </Modal>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>{" "}
    </>
  );
}
