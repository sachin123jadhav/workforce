"use client";
import {
  addDesignationData,
  getDesignationData,
  updateDesignationData,
} from "@/store/designation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

export default function DesignationPage() {
  let no = 0;
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuth.token);
  const designationData = useSelector(
    (state) => state.designation.designationData
  );
  const designationText = useSelector((state) => state.designation.text);
  const newDesignationData = useSelector((state) => state.designation.newData);

  useEffect(() => {
    console.log("In useEffect of designation update or add");
    if (designationText || newDesignationData)
      dispatch(getDesignationData(token));
  }, [designationText, newDesignationData]);

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

  function addDesignation() {
    console.log("addData", addData);
    dispatch(addDesignationData(token, addData));
    setAddData();
  }

  function removeDesignation(id) {
    console.log("id", id);
    // dispatch(addDesignationData(token, addData));
    // setAddData();
  }

  console.log("Above return function");

  return (
    <>
      <div className="m-4 flex justify-between">
        <div>
          {" "}
          <h5>Designation page</h5>
        </div>
        <div>
          <Modal
            title="Add Designation"
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
                onClick={() => addDesignation()}
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
                      </Modal>
                      <Modal
                        title="Remove Designation"
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
                            onClick={() => removeDesignation(uData.id)}
                          />
                        }
                      >
                        <form>
                          <div class="mb-4">
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              type="text"
                              value={uData.designation}
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
