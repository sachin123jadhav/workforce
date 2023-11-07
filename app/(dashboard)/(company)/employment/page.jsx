"use client";

import Modal from "@/components/ui/Modal";
import {
  addEmploymentData,
  getemploymentData,
  updateemploymentData,
} from "@/store/employment";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Employment() {
  let no = 0;
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.isAuth.token);
  const employementData = useSelector(
    (state) => state.employment.employmentData
  );
  const employementUpdateData = useSelector(
    (state) => state.employment.updateText
  );
  const employementPostData = useSelector((state) => state.employment.newData);

  useEffect(() => {
    console.log("empty dependency");
    dispatch(getemploymentData(token));
  }, []);

  useEffect(() => {
    if (employementData) setData(employementData);
    console.log("one added dependency");
  }, [employementData]);

  useEffect(() => {
    if (employementUpdateData || employementPostData)
      dispatch(getemploymentData(token));
    console.log("In update or add dependency");
  }, [employementUpdateData, employementPostData]);

  function handleChange(id) {
    let val = document.getElementById("username").value;
    // console.log("username  change ->", val);
    // console.log("designation id ->", id);
    dispatch(updateemploymentData(token, id, val));
  }

  function addEmployment() {
    console.log("addEmployment", addData);
    // console.log("addEmployment", addData.length);
    dispatch(addEmploymentData(token, addData));
    setAddData();
  }

  const headerList = ["Sr No", "employment", "Action"];

  return (
    <>
      <section>
        {" "}
        <div className="m-4 flex justify-between">
          <div>
            {" "}
            <h5>Employment page</h5>{" "}
          </div>
          <div>
            <Modal
              title="Add Employment"
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
                  onClick={() => addEmployment()}
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
      </section>
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
                    <td className="px-6 py-4">{uData.employment_type}</td>
                    <td className="px-6 py-4">
                      <Modal
                        title="Update Employment"
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
                              defaultValue={uData.employment_type}
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
