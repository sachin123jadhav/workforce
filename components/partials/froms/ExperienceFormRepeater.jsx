import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { useForm, useFieldArray } from "react-hook-form";
import Select from "@/components/ui/Select";
import Fileinput from "@/components/ui/Fileinput";
import Flatpickr from "react-flatpickr";

const ExperienceFormRepeater = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        test: [
          {
            company_name: "",
            designation: "",
            relieving_letter: "",
            year_of_experience: "",
            comments: "",
            salary_slip: "",
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
      <div className=" dark:bg-slate-800 -mx-6  px-6  mb-5">
        <div>
          <form>
            {fields.map((item, index) => (
              <div
                className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0"
                key={index}
              >
                <div className="lg:col-span-3 md:col-span-2 col-span-1">
                  <h4 className="text-2xl text-slate-800 dark:text-slate-300 mb-2">
                    Work Experience Information
                  </h4>
                </div>

                <Textinput
                  label="company name"
                  type="text"
                  placeholder=""
                  name={`test[${index}].company_name`}
                  id={`name${index}`}
                  register={register}
                  required
                />
                <Textinput
                  label="designation"
                  type="text"
                  placeholder=""
                  name={`test[${index}].designation`}
                  id={`name${index}`}
                  register={register}
                />
                <div className="file-input">
                  <p className="file-label">Upload relieving letter </p>
                  <Fileinput
                    name={`test[${index}].relieving_letter`}
                    id={`name${index}`}
                    selectedFile={selectedFileforMarksheet}
                    onChange={handleFileChangeForMarksheet}
                  />
                </div>
                <Textinput
                  label="year of experience"
                  type="text"
                  placeholder=""
                  name={`test[${index}].year_of_experience`}
                  id={`name${index}`}
                  register={register}
                />
                <Textinput
                  label="comments"
                  type="text"
                  placeholder=""
                  name={`test[${index}].comments`}
                  id={`name${index}`}
                  register={register}
                />
                <div className="file-input">
                  <p className="file-label">salary slip</p>
                  <Fileinput
                    name={`test[${index}].salary_slip`}
                    id={`name${index}`}
                    selectedFile={selectedFileforMarksheet}
                    onChange={handleFileChangeForMarksheet}
                  />
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

export default ExperienceFormRepeater;
