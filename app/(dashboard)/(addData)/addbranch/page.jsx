"use client";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormValidationSchema = yup
  .object({
    branchName: yup.string().required("Branch Name is Required"),
    address: yup.string().required("Address is Required"),
    branchManager: yup.string().required("Branch Manager is Required"),
    branchNo: yup.string().required("Branch No is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
  })
  .required();

export default function AddBrnach() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <section>
        {" "}
        <div className="m-4 flex justify-between">
          <h5>Add New Branch</h5>{" "}
        </div>
      </section>

      {/* <div>01</div>
        <div>02</div>
    <div>03</div> */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div class="grid gap-5 grid-cols-2 divide-x">
          <div>
            <Textinput
              name="Branch_Name"
              label="Branch Name"
              type="Branch_Name"
              placeholder="Branch Name"
              register={register}
            // register={"exampleRequired", { required: true }}
              error={errors.branchName}
            />
          </div>
          <div>
            <Textinput
              name="Address"
              label="Address"
              type="Address"
              placeholder="Address"
              register={register}
              error={errors.address}
            />{" "}
          </div>
          <div>
            <Textinput
              name="Branch_Manager"
              label="Branch Manager"
              type="Branch_Manager"
              placeholder="Branch Manager"
              register={register}
              error={errors.branchManager}
            />{" "}
          </div>
          <div>
            <Textinput
              name="Branch_No"
              label="Branch No"
              type="Branch_No"
              placeholder="Branch No"
              register={register}
              error={errors.branchNo}
            />{" "}
          </div>
          <div>
            <Textinput
              name="email"
              label="email"
              type="email"
              register={register}
              error={errors.email}
            />
          </div>

          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">Submit</button>
          </div>
        </div>
      </form>
      {/* <section>
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
      </section>{" "} */}
    </>
  );
}
