import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { useForm, useFieldArray } from "react-hook-form";
import Select from "@/components/ui/Select";
import Fileinput from "@/components/ui/Fileinput";
import Flatpickr from "react-flatpickr";

const EducationFormRepeater = () => {
  const [value, setDegreeValue] = useState("");
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        test: [
          {
            university: "",
            education_name: "",
            specialization: "",
            percentage: "",
            specialization: "",
            education_name: "",
            university: "",
          },
        ],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const index = 1;

  const handleChangeDegree = (e) => {
    setDegreeValue(e.target.value);
  };
  const optionsDegree = [
    {
      value: "Diploma",
      label: "Diploma",
    },
    {
      value: "BachelorDegree",
      label: "Bachelor's Degree",
    },
    {
      value: "MasterDegree",
      label: "Master's Degree",
    },
    {
      value: "Doctorate",
      label: "Doctorate (Ph.D.)",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];
  const [picker, setPicker] = useState(new Date());
  const [selectedFileforMarksheet, setSelectedFileforMarksheet] =
    useState(null);
  const handleFileChangeForMarksheet = (e) => {
    setSelectedFileforMarksheet(e.target.files[0]);
  };

  return (
    <div>
      <div className=" dark:bg-slate-800 -mx-6 px-6  mb-5">
        <div>
          <form>
            {fields.map((item, index) => (
              <div
                className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0"
                key={index}
              >
                <div className="lg:col-span-3 md:col-span-2 col-span-1">
                  <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-2">
                    Education Information
                  </h4>
                </div>
                <Select
                  label="Select Education"
                  options={optionsDegree}
                  onChange={handleChangeDegree}
                  value={value}
                />

                <Textinput
                  label="university Name"
                  type="text"
                  placeholder=""
                  name={`test[${index}].university`}
                  id={`name${index}`}
                  register={register}
                  required
                />
                <Textinput
                  label="Degree Name"
                  type="text"
                  placeholder=""
                  name={`test[${index}].education_name`}
                  id={`name${index}`}
                  register={register}
                />
                <Textinput
                  label="specialization"
                  type="text"
                  placeholder=""
                  name={`test[${index}].specialization`}
                  id={`name${index}`}
                  register={register}
                />
                <Textinput
                  label="percentage"
                  type="text"
                  placeholder=""
                  name={`test[${index}].percentage`}
                  id={`name${index}`}
                  register={register}
                />
                <Textinput
                  label="First Name"
                  type="text"
                  id={`name${index}`}
                  placeholder="First Name"
                  register={register}
                  name={`test[${index}].firstName`}
                />

                <div className="file-input">
                  <p className="file-label">Upload Marksheet</p>
                  <Fileinput
                    name="marksheet"
                    selectedFile={selectedFileforMarksheet}
                    onChange={handleFileChangeForMarksheet}
                  />
                </div>

                <Textinput
                  label="collge name"
                  type="text"
                  placeholder=""
                  name="collge_name"
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
                    name=""
                    onChange={(date) => setPicker(date)}
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      dateFormat: "Y-m-d",
                    }}
                  />
                  <label>Passout Date</label>
                </div>

                <div className="flex items-end space-x-5 lg:col-span-3 md:col-span-2 col-span-1 justify-items-end justify-end">
                  {index > 0 && (
                    <div className="flex-none relative">
                      <button
                        onClick={() => remove(index)}
                        type="button"
                        className="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                      >
                        <Icon icon="heroicons-outline:trash" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </form>

          <div className="mt-4">
            <Button
              text="Add Education"
              icon="heroicons-outline:plus"
              className="btn btn inline-flex justify-center        
              btn-dark"
              onClick={() => append()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFormRepeater;
