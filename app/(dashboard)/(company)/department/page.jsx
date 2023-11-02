"use client";

import Modal from "@/components/ui/Modal";
import { getdepartmentData, updatedepartmentData } from "@/store/department";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Department() {
  let no = 0;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuth.token);
  const departData = useSelector((state) => state.department.departmentData);
  const departUpdateData = useSelector((state) => state.department.updateText);

  useEffect(() => {
    console.log("empty dependency");
    dispatch(getdepartmentData(token));
  }, []);

  useEffect(() => {
    if (departData) setData(departData);
    console.log("one added dependency");
  }, [departData]);

  useEffect(() => {
    if (departUpdateData) dispatch(getdepartmentData(token));
    console.log("In update dependency");
  }, [departUpdateData]);

  function handleChange(id) {
    let val = document.getElementById("username").value;
    // console.log("username  change ->", val);
    // console.log("designation id ->", id);
    dispatch(updatedepartmentData(token, id, val));
  }

  const headerList = ["Sr No", "Department", "Action"];

  return (
    <>
      <div className="m-4">
        <h5>Department page</h5>
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

                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{no}</td>
                    <td className="px-6 py-4">{uData.department}</td>
                    <td className="px-6 py-4">
                      <Modal
                        title="Update Department"
                        label="Update"
                        icon="heroicons-outline:plus-sm"
                        iconClass="text-lg"
                        labelClass="btn-primary  rounded-[999px]"
                        uncontrol
                        centered
                        footerContent={
                          <Button
                            text="Update"
                            className="btn-dark "
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
                              defaultValue={uData.department}
                            />
                          </div>
                        </form>
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
