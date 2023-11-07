import React, { useState, useEffect } from "react";
import Textinput from "@/components/ui/Textinput";
import InputGroup from "@/components/ui/InputGroup";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Radio from "@/components/ui/Radio";
import Flatpickr from "react-flatpickr";

import Select from "@/components/ui/Select";
import Fileinput from "@/components/ui/Fileinput";
import EducationFormRepeater from "./EducationFormRepeater";
import ExperienceFormRepeater from "./ExperienceFormRepeater";
import Switch from "@/components/ui/Switch";

const steps = [
  {
    id: 1,
    title: "User Registration",
  },
  {
    id: 2,
    title: "Personal Information",
  },
  {
    id: 3,
    title: "Education Information",
  },
  {
    id: 4,
    title: "Experience Information",
  },
  {
    id: 5,
    title: "Salery Rivision",
  },

  {
    id: 5,
    title: "Certification Information",
  },
  {
    id: 5,
    title: "settings",
  },
];

let stepSchema = yup.object().shape({
  //   cmnerror: yup.string().required(" This Field is required"),
  //   username: yup.string().required(" User name is required"),
  //   empid: yup.string().required(" Emp ID is required"),
  //   fullname: yup.string().required("Full name is required"),
  //   email: yup.string().email("Email is not valid").required("Email is required"),
  //   phone: yup.string().required("Phone number is required"),
  //.matches(/^[0-9]{12}$/, "Phone number is not valid"),
});

let personalSchema = yup.object().shape({
  // fname: yup.string().required(" First name is required"),
  // lname: yup.string().required(" Last name is required"),
});
let educationSchema = yup.object().shape({
  // address: yup.string().required(" Address is required"),
});
const url =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

let experienceSchema = yup.object().shape({
  // fburl: yup
  //   .string()
  //   .required("Facebook url is required")
  //   .matches(url, "Facebook url is not valid"),
});
let certificationSchema = yup.object().shape({});
let salarySchema = yup.object().shape({});

let settingSchema = yup.object().shape({});

function AddStaff() {
  const [picker, setPicker] = useState(new Date());
  const [stepNumber, setStepNumber] = useState(0);

  // find current step schema
  let currentStepSchema;
  switch (stepNumber) {
    case 0:
      currentStepSchema = stepSchema;
      break;
    case 1:
      currentStepSchema = personalSchema;
      break;
    case 2:
      currentStepSchema = educationSchema;
      break;
    case 3:
      currentStepSchema = experienceSchema;
      break;
    case 4:
      currentStepSchema = salarySchema;
      break;
    case 5:
      currentStepSchema = certificationSchema;
      break;
    case 6:
      currentStepSchema = settingSchema;
      break;
    default:
      currentStepSchema = stepSchema;
  }
  useEffect(() => {
    // console.log("step number changed");
  }, [stepNumber]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(currentStepSchema),
    // keep watch on all fields
    mode: "all",
  });

  const onSubmit = (data) => {
    // next step until last step . if last step then submit form
    let totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;
    if (isLastStep) {
      //console.log(data);
    } else {
      setStepNumber(stepNumber + 1);
    }
  };

  const handlePrev = () => {
    setStepNumber(stepNumber - 1);
  };

  const handleNext = (item) => {
    console.log("Handle next", item);
  };

  const [value, setValue] = useState("A");
  const [value2, setValue2] = useState("M");

  // Event handler for the "Gender" radio buttons
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Event handler for the "Marital Status" radio buttons
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileforPan, setSelectedFileforPan] = useState(null);
  const [selectedFileforPassbook, setSelectedFileforPassbook] = useState(null);
  const [selectedFileforMarksheet, setSelectedFileforMarksheet] =
    useState(null);
  const [selectedFiles2, setSelectedFiles2] = useState([]);

  const handleFileChange2 = (e) => {
    setSelectedFile2(e.target.files[0]);
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileChangeForPan = (e) => {
    setSelectedFileforPan(e.target.files[0]);
  };
  const handleFileChangeForPassbook = (e) => {
    setSelectedFileforPassbook(e.target.files[0]);
  };

  const handleFileChangeForMarksheet = (e) => {
    setSelectedFileforMarksheet(e.target.files[0]);
  };

  const handleFileChangeMultiple2 = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files).map((file) => file);
    setSelectedFiles2(filesArray);
  };

  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  const [checked6, setChecked6] = useState(true);
  const [checked7, setChecked7] = useState(true);
  const [checked8, setChecked8] = useState(true);
  const [checked9, setChecked9] = useState(true);
  const [checked10, setChecked10] = useState(true);

  return (
    <div>
      <Card>
        <div className="grid gap-5 grid-cols-12 min-h-[500px]">
          <div className="lg:col-span-3 col-span-12">
            <div className="flex z-[5] items-start relative flex-col lg:min-h-full md:min-h-[300px] min-h-[250px]">
              {steps.map((item, i) => (
                <div className="relative z-[1] flex-1 last:flex-none" key={i}>
                  <div
                    className={`   ${
                      stepNumber >= i
                        ? "bg-blue-800 text-white ring-slate-900 dark:bg-slate-900 dark:ring-slate-700  dark:ring-offset-slate-500 ring-offset-2"
                        : "bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 text-opacity-70 dark:bg-slate-700 dark:ring-slate-700"
                    } 
        transition duration-150 icon-box md:h-12 md:w-12 h-8 w-8 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium
        `}
                  >
                    {stepNumber <= i ? (
                      <span> {i + 1}</span>
                    ) : (
                      <span className="text-3xl">
                        <Icon icon="bx:check-double" />
                      </span>
                    )}
                  </div>

                  <div
                    className={`bg-gre ${
                      stepNumber >= i
                        ? "bg-blue-800 dark:bg-slate-900"
                        : "bg-[#E0EAFF] dark:bg-slate-600"
                    } absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px]`}
                  ></div>
                  <div
                    className={` ${
                      stepNumber >= i
                        ? " text-slate-900 dark:text-slate-300"
                        : "text-slate-500 dark:text-slate-300 dark:text-opacity-40"
                    } absolute top-0 ltr:left-full rtl:right-full ltr:pl-4 rtl:pr-4 text-base leading-6 md:mt-3 mt-1 transition duration-150 w-full`}
                  >
                    <span className="w-max block">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="conten-box lg:col-span-9 col-span-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              {stepNumber === 0 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <Textinput
                      label="First Name"
                      type="text"
                      placeholder=""
                      name="firstname"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="Middle name"
                      type="text"
                      placeholder=""
                      name="middlename"
                      //required
                      register={register}
                    />

                    <Textinput
                      label="Last Name"
                      type="text"
                      placeholder="Full name"
                      name="fullname"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="Email"
                      type="email"
                      placeholder="Type your email"
                      name="email"
                      //required
                      register={register}
                    />
                    <InputGroup
                      label="Phone Number"
                      type="tel"
                      prepend="IN (+91)"
                      placeholder="Phone Number"
                      name="phone"
                      //required
                      register={register}
                    />
                    <InputGroup
                      label="Ulternate contact Number"
                      type="tel"
                      prepend="IN (+91)"
                      placeholder="Phone Number"
                      name="phone"
                      register={register}
                    />
                    <div className="floating-label date-input">
                      <Flatpickr
                        value={picker}
                        id="hf-picker"
                        className="form-control py-2"
                        onChange={(date) => setPicker(date)}
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                      />
                      <label>Date of Birth</label>
                    </div>

                    <Textinput
                      label="Employee ID"
                      type="number"
                      placeholder=""
                      name="user_id"
                      //required
                      register={register}
                    />

                    <Select
                      options={[
                        "Company Admin",
                        "Board of Director",
                        "HR",
                        "Employee",
                      ]}
                      label="Designation"
                    />

                    <Select
                      options={[
                        "Department 1",
                        "Department 2",
                        "Department 3",
                        "Department 4",
                      ]}
                      label="Department"
                    />
                    <Select
                      options={["Employment type 1", "Employment type 2"]}
                      label="Employment"
                    />
                    <Select
                      options={[
                        "User Role 1",
                        "User Role 2",
                        "User Role 3",
                        "User Role 4",
                      ]}
                      label="User Role"
                    />

                    <Textinput
                      label="Address"
                      type="text"
                      placeholder="Full name"
                      name="address"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="Permenant Address"
                      type="text"
                      placeholder="Full name"
                      name="permaddress"
                      //required
                      register={register}
                    />

                    <Textinput
                      label="Password"
                      type="password"
                      placeholder=""
                      name="password"
                      //required
                      register={register}
                    />

                    <Select
                      options={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]}
                      label="Branch"
                    />
                    <div className="file-input">
                      <p className="file-label">Profile Image</p>
                      <Fileinput
                        name="basic"
                        selectedFile={selectedFile2}
                        onChange={handleFileChange2}
                        preview
                      />
                    </div>
                    <div className="file-input">
                      <p className="file-label">Face match images</p>
                      <Fileinput
                        name="basic"
                        selectedFiles={selectedFiles2}
                        onChange={handleFileChangeMultiple2}
                        multiple
                        preview
                      />
                    </div>
                  </div>
                </div>
              )}

              {stepNumber === 1 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-0">
                        Personal Information
                      </h4>
                    </div>
                    <div className="radio-btns">
                      <div className="mb-2">Gender</div>
                      <div className="flex flex-wrap space-xy-5">
                        <Radio
                          label="Male"
                          name="x"
                          value="A"
                          checked={value === "A"}
                          onChange={handleChange}
                        />
                        <Radio
                          label="Female"
                          name="x"
                          value="B"
                          checked={value === "B"}
                          onChange={handleChange}
                        />
                        <Radio
                          label="Other"
                          name="x"
                          value="C"
                          checked={value === "C"}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="radio-btns">
                      <div className="mb-2">Marital Status</div>
                      <div className="flex flex-wrap space-xy-5">
                        <Radio
                          label="Married"
                          name="m"
                          value="M"
                          checked={value2 === "M"}
                          onChange={handleChange2}
                        />
                        <Radio
                          label="Unmarried"
                          name="m"
                          value="U"
                          checked={value2 === "U"}
                          onChange={handleChange2}
                        />
                      </div>
                    </div>
                    <Textinput
                      label="Spouse name"
                      type="text"
                      placeholder=" "
                      name="spousename"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="father name"
                      type="text"
                      placeholder=" "
                      name="mother_name"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="mother name"
                      type="text"
                      placeholder=" "
                      name="mother_name"
                      //required
                      register={register}
                    />
                    <div className="floating-label date-input">
                      <Flatpickr
                        value={picker}
                        id="hf-picker"
                        className="form-control py-2"
                        onChange={(date) => setPicker(date)}
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                      />
                      <label>Joining Date</label>
                    </div>
                    <div className="floating-label date-input">
                      <Flatpickr
                        value={picker}
                        id="hf-picker"
                        className="form-control py-2"
                        onChange={(date) => setPicker(date)}
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                      />
                      <label>Last Date</label>
                    </div>
                    <Textinput
                      label="Emergency contact relation"
                      type="text"
                      placeholder=" "
                      name="emergency_contact_relation"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="emergency person contact"
                      type="text"
                      placeholder=" "
                      name="emergency_person_number"
                      //required
                      register={register}
                    />

                    <Select
                      options={[
                        "A+",
                        "A-",
                        "B+",
                        "B-",
                        "AB+",
                        "AB-",
                        "O+",
                        "O-",
                      ]}
                      label="Blood Group"
                    />

                    <Textinput
                      label="identification mark"
                      type="text"
                      placeholder=" "
                      name="identification_mark"
                      //required
                      register={register}
                    />
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-0">
                        Identity Information
                      </h4>
                    </div>
                    <Textinput
                      label="aadhar card "
                      type="text"
                      placeholder=" "
                      name="aadhar_card"
                      //required
                      register={register}
                    />

                    <div className="file-input">
                      <p className="file-label">Upload AAdhar Card</p>
                      <Fileinput
                        name="basic"
                        selectedFile={selectedFile}
                        onChange={handleFileChange}
                      />
                    </div>
                    <Textinput
                      label="pan card"
                      type="text"
                      placeholder=" "
                      name="pan_card"
                      //required
                      register={register}
                    />
                    <div className="file-input">
                      <p className="file-label">Upload Pan Card</p>
                      <Fileinput
                        name="pncard"
                        selectedFile={selectedFileforPan}
                        onChange={handleFileChangeForPan}
                      />
                    </div>
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-0">
                        Bank Details
                      </h4>
                    </div>
                    <Textinput
                      label="bank name"
                      type="text"
                      placeholder=""
                      name="bank_name"
                      register={register}
                    />
                    <Textinput
                      label="bank account no"
                      type="text"
                      placeholder=" "
                      name="bank_account_no"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="Ifsc code"
                      type="text"
                      placeholder=" "
                      name="Ifsc_code"
                      //required
                      register={register}
                    />
                    <Textinput
                      label="bank branch name"
                      type="text"
                      placeholder=""
                      name="bank_branch_name"
                      register={register}
                    />

                    <Textinput
                      label="salary"
                      type="number"
                      placeholder=""
                      name="salary"
                      register={register}
                    />
                    <div className="file-input">
                      <p className="file-label">Upload Passbook</p>
                      <Fileinput
                        name="passbook"
                        selectedFile={selectedFileforPassbook}
                        onChange={handleFileChangeForPassbook}
                      />
                    </div>
                  </div>
                </div>
              )}
              {stepNumber === 2 && (
                <div>
                  <EducationFormRepeater />
                </div>
              )}
              {stepNumber === 3 && (
                <div>
                  <ExperienceFormRepeater></ExperienceFormRepeater>
                </div>
              )}
              {stepNumber === 4 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-0">
                        Salary Rivision
                      </h4>
                    </div>
                    <Textinput
                      label="new gross salary"
                      type="text"
                      placeholder=""
                      name="new_gross_salary"
                      register={register}
                    />
                    <Textinput
                      label="revision document"
                      type="text"
                      placeholder=""
                      name="revision_document"
                      register={register}
                    />
                    <div className="floating-label date-input">
                      <Flatpickr
                        value={picker}
                        id="hf-picker"
                        className="form-control py-2"
                        onChange={(date) => setPicker(date)}
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                      />
                      <label>Effective Date</label>
                    </div>
                  </div>
                </div>
              )}
              {stepNumber === 5 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-0">
                        Certification
                      </h4>
                    </div>
                    <Textinput
                      label="course name"
                      type="text"
                      placeholder=""
                      name="course_name"
                      register={register}
                    />
                    <Textinput
                      label="certification"
                      type="text"
                      placeholder=""
                      name="certification"
                      register={register}
                    />
                    <div className="floating-label date-input">
                      <Flatpickr
                        value={picker}
                        id="hf-picker"
                        className="form-control py-2"
                        onChange={(date) => setPicker(date)}
                        options={{
                          altInput: true,
                          altFormat: "F j, Y",
                          dateFormat: "Y-m-d",
                        }}
                      />
                      <label>certification dates</label>
                    </div>
                  </div>
                </div>
              )}

              {stepNumber === 6 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-0">
                        User Profile Settings{" "}
                      </h4>
                    </div>
                    <Switch
                      className="mt-20"
                      label="Location Restriction "
                      activeClass="bg-primary-500"
                      value={checked}
                      onChange={() => setChecked(!checked)}
                    />

                    <Switch
                      label="blocked "
                      activeClass="bg-primary-500"
                      value={checked3}
                      onChange={() => setChecked3(!checked3)}
                    />

                    <Switch
                      label="Face Detection"
                      activeClass="bg-primary-500"
                      value={checked4}
                      onChange={() => setChecked4(!checked4)}
                    />
                    <Switch
                      label="App Access"
                      activeClass="bg-primary-500"
                      value={checked5}
                      onChange={() => setChecked5(!checked5)}
                    />
                    <Switch
                      label="Website Access"
                      activeClass="bg-primary-500"
                      value={checked6}
                      onChange={() => setChecked6(!checked6)}
                    />
                    <Switch
                      label="Leave Accept Access "
                      activeClass="bg-primary-500"
                      value={checked7}
                      onChange={() => setChecked7(!checked7)}
                    />
                    <Switch
                      label="Biometric Access"
                      activeClass="bg-primary-500"
                      value={checked8}
                      onChange={() => setChecked8(!checked8)}
                    />
                    <Switch
                      label="Emp Id Verify"
                      activeClass="bg-primary-500"
                      value={checked9}
                      onChange={() => setChecked9(!checked9)}
                    />
                    <Switch
                      label="Chatting"
                      activeClass="bg-primary-500"
                      value={checked10}
                      onChange={() => setChecked10(!checked10)}
                    />
                    <Select
                      options={[
                        "Shift Policy 1",
                        "Shift Policy 2",
                        "Shift Policy 3",
                        "Shift Policy 4",
                      ]}
                      label="shift policy"
                    />
                    <Select
                      options={["Sunday", "Monday", "Weekend"]}
                      label="weekly off"
                    />
                    <Select
                      options={["Branch 1", "Branch 2", "Branch 3", "Branch 4"]}
                      label="Branch"
                    />
                  </div>
                </div>
              )}

              <div
                className={`${
                  stepNumber > 0 ? "flex justify-between" : " text-right"
                } mt-10`}
              >
                {stepNumber !== 0 && (
                  <Button
                    icon="ant-design:double-left-outlined"
                    text="prev"
                    className="btn-dark bg-blue-700"
                    onClick={handlePrev}
                  />
                )}
                <Button
                  text={stepNumber !== steps.length - 1 ? "next" : "submit"}
                  className="btn-dark bg-blue-700"
                  type="submit"
                  icon="ant-design:double-right-outlined"
                  iconPosition="right"
                  onClick={handleNext}
                />
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AddStaff;
