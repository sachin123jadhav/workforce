"use client";

import Modal from "@/components/ui/Modal";
import {
  getcompanyprofileData,
  updatecompanyprofileData,
} from "@/store/companyprofile";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
// import { useRouter } from "next/router";
import Link from "next/link";

export default function CompanyProfilePage() {
  let no = 0;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // const router = useRouter();

  const token = useSelector((state) => state.auth.isAuth.token);
  const comProfileData = useSelector(
    (state) => state.companyprofile.companyprofileData
  );
  const comProfileUpdateData = useSelector(
    (state) => state.companyprofile.updateText
  );

  useEffect(() => {
    console.log("empty dependency");
    dispatch(getcompanyprofileData(token));
  }, []);

  useEffect(() => {
    if (comProfileData) {
      console.log("comProfileData", comProfileData);
      setData(comProfileData["data"]);
    }
    console.log("one added dependency");
  }, [comProfileData]);

  useEffect(() => {
    if (comProfileUpdateData) dispatch(getcompanyprofileData(token));
    console.log("In update dependency");
  }, [comProfileUpdateData]);

  function handleChange(id) {
    let val = document.getElementById("username").value;
    console.log("username  change ->", val);
    console.log("designation id ->", id);
    dispatch(updatecompanyprofileData(token, id, val));
  }

  // function handleClick() {
  //   router.push("/addbranch");
  // }

  // const headerList = [
  //   "Sr No",
  //   "Branch Name",
  //   "Address",
  //   "Branch Manager",
  //   "Country Code",
  //   "Branch Number",
  //   "Latitude",
  //   "Longitude",
  //   "Radius",
  //   "Location",
  //   "Active",
  //   "Action",
  // ];

  const headerList = [
    "Sr No",
    "Branch Name",
    "Address",
    "Branch Manager",
    "Branch Number",
    "Active",
    "Action",
  ];

  return (
    <>
      {" "}
      <section>
        {" "}
        <div className="m-4 flex justify-between">
          <div>
            {" "}
            <h5>Company Profile page</h5>{" "}
          </div>
          <div>
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              href="/addbranch"
            >
              Add
            </Link>
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
              {data?.map((uData) => {
                no = no + 1;
                return (
                  <tr
                    key={uData.id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{no}</td>
                    <td className="px-6 py-4">{uData.branch_name}</td>
                    <td className="px-6 py-4">{uData.branch_address}</td>
                    <td className="px-6 py-4">{uData.branch_manager}</td>
                    <td className="px-6 py-4">
                      {uData.country_code + " " + uData.branch_number}
                    </td>

                    <td className="px-6 py-4">
                      {uData.active ? (
                        <AiOutlineCheckCircle />
                      ) : (
                        <AiOutlineCloseCircle />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <Modal
                        title="Update Company Profile"
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
                          <div className="mb-4">
                            {" "}
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="branchname"
                            >
                              Branch Name
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="branchname"
                              type="text"
                              defaultValue={uData.branch_name}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="address"
                            >
                              ADDRESS
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="address"
                              type="text"
                              defaultValue={uData.branch_address}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="branchmanager"
                            >
                              BRANCH MANAGER
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="branchmanager"
                              type="text"
                              defaultValue={uData.branch_manager}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="countrycode"
                            >
                              COUNTRY CODE
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="countrycode"
                              type="text"
                              defaultValue={uData.country_code}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="branchno"
                            >
                              BRANCH NUMBER
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="branchno"
                              type="text"
                              defaultValue={uData.branch_number}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="latitude"
                            >
                              LATITUDE
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="latitude"
                              type="text"
                              defaultValue={uData.latitude}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="longitude"
                            >
                              LONGITUDE
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="longitude"
                              type="text"
                              defaultValue={uData.longitude}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="radius"
                            >
                              RADIUS
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="radius"
                              type="text"
                              defaultValue={uData.radius}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="location"
                            >
                              LOCATION
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="location"
                              type="text"
                              defaultValue={uData.location}
                            />
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="active"
                            >
                              ACTIVE
                            </label>
                            <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="active"
                              type="text"
                              defaultValue={uData.active}
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
