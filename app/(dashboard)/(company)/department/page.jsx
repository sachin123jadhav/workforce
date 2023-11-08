"use client";

import Modal from "@/components/ui/Modal";
import {
  addDepartmentData,
  getdepartmentData,
  removeDepartmentData,
  updatedepartmentData,
} from "@/store/department";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Department() {
  let no = 0;
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuth.token);
  const departData = useSelector((state) => state.department.departmentData);
  const departUpdateData = useSelector((state) => state.department.updateText);
  const departNewData = useSelector((state) => state.department.newData);

  useEffect(() => {
    console.log("empty dependency");
    dispatch(getdepartmentData(token));
  }, []);

  useEffect(() => {
    if (departData) setData(departData);
    console.log("one added dependency");
  }, [departData]);

  useEffect(() => {
    if (departUpdateData || departNewData) dispatch(getdepartmentData(token));
    console.log("In update and add dependency");
  }, [departUpdateData, departNewData]);

  function handleChange(id) {
    let val = document.getElementById("username").value;
    // console.log("username  change ->", val);
    // console.log("designation id ->", id);
    dispatch(updatedepartmentData(token, id, val));
  }

  function addDepartment() {
    console.log("addDapartment", addData);
    dispatch(addDepartmentData(token, addData));
    setAddData();
  }

  function removeDepartment(id) {
    console.log("id", id);
    dispatch(removeDepartmentData(token, id));
    // setAddData();
  }

  const headerList = ["Sr No", "Department", "Action"];

  return (
    <>
      <div className="m-4 flex justify-between">
        <div>
          {" "}
          <h5>Department page</h5>
        </div>
        <div>
          <Modal
            title="Add Department"
            label="Add"
            icon="heroicons-outline:plus-sm"
            iconClass="text-lg"
            labelClass="btn-primary  rounded-[999px]"
            uncontrol
            centered
            footerContent={
              <Button
                text="Save"
                className="btn-dark "
                onClick={() => addDepartment()}
              />
            }
          >
            <form>
              <div class="mb-4">
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="saveDesignation"
                  type="text"
                  value={addData}
                  onChange={(e) => {
                    setAddData(e.target.value);
                  }}
                />
              </div>
            </form>
          </Modal>{" "}
        </div>{" "}
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
                      <Modal
                        title="Remove Department"
                        label="Remove"
                        icon="heroicons-outline:plus-sm"
                        iconClass="text-lg"
                        labelClass="btn-danger rounded-[999px]"
                        uncontrol
                        centered
                        // closeModal={closeModal()}
                        footerContent={
                          <Button
                            text="Remove"
                            className="btn-dark "
                            // onClick={inputValue}
                            onClick={() => removeDepartment(uData.id)}
                          />
                        }
                      >
                        <form>
                          <div class="mb-4">
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              type="text"
                              value={uData.department}
                              // Value={uData.designation}
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
