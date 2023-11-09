"use client";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Circle,
} from "react-leaflet";

const FormValidationSchema = yup.object({
  branchName: yup.string().required("Branch Name is Required"),
  address: yup.string().required("Address is Required"),
  branchManager: yup.string().required("Branch Manager is Required"),
  branchNo: yup.string().required("Branch No is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
});

export default function AddBrnach() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const [radius, setRadius] = useState(100);
  const [center, setCenter] = useState([18.530728828585875, 73.86214307956516]);
  const [clickedCoordinates, setClickedCoordinates] = useState(null);
  const [locdata, setLocData] = useState({
    latitude: "",
    longitude: "",
  });
  const [formData, setFormData] = useState({
    branchName: "",
    address: "",
    branchManager: "",
    branchNo: "",
    email: "",
    latitude: "",
    longitude: "",
    radius: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (data) => {
    data.latitude = locdata.latitude;
    data.longitude = locdata.longitude;
    console.log("data", data);
    console.log("Stored Input Data:", formData);
  };

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setClickedCoordinates([lat, lng]);
        setLocData({ latitude: lat, longitude: lng });
      },
    });
    return null;
  }
  return (
    <>
      <section>
        {" "}
        <div className="m-4 flex justify-between">
          <h5>Add New Branch</h5>{" "}
        </div>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="grid gap-5 grid-cols-2 divide-x">
          <div>
            <Textinput
              name="branchName"
              label="Branch Name"
              type="Branch_Name"
              placeholder="Branch Name"
              register={register}
              // {...register("branchName", { required: true })}
              // value={formData.branchName}
              onChange={handleInputChange}
              error={errors.branchName}
            />
            <Textinput
              name="address"
              label="Address"
              type="Address"
              placeholder="Address"
              register={register}
              onChange={handleInputChange}
              error={errors.address}
            />{" "}
            <Textinput
              name="branchManager"
              label="Branch Manager"
              type="Branch_Manager"
              placeholder="Branch Manager"
              register={register}
              onChange={handleInputChange}
              error={errors.branchManager}
            />{" "}
            <Textinput
              name="branchNo"
              label="Branch No"
              type="Branch_No"
              placeholder="Branch No"
              register={register}
              onChange={handleInputChange}
              error={errors.branchNo}
            />{" "}
            <Textinput
              name="email"
              label="email"
              type="email"
              register={register}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Textinput
              name="latitude"
              label="latitude"
              type="latitude"
              disabled
              defaultValue={locdata.latitude}
              register={register}
              onChange={handleInputChange}
              error={errors.latitude}
            />
            <Textinput
              name="longitude"
              label="longitude"
              type="longitude"
              disabled
              defaultValue={locdata.longitude}
              register={register}
              onChange={handleInputChange}
              error={errors.longitude}
            />
            <Textinput
              name="radius"
              label="radius"
              type="radius"
              register={register}
              defaultValue={radius}
              onChange={(e) => {
                setRadius(e.target.value);
                // handleInputChange(e);
                // console.log("object", radius);
              }}
              error={errors.radius}
            />
          </div>

          <div className="mt-8">
            <div>
              <MapContainer
                center={center}
                zoom={100}
                style={{ width: "100%", height: "500px" }}
                onClick={(e) => console.log(e)}
              >
                <TileLayer
                  url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                  maxZoom={20}
                  subdomains={["mt1", "mt2", "mt3"]}
                />
                <MyComponent />

                {clickedCoordinates && (
                  <Marker position={clickedCoordinates}>
                    <Circle
                      center={clickedCoordinates}
                      fillColor="blue"
                      radius={radius}
                    />
                  </Marker>
                )}
              </MapContainer>
            </div>
          </div>

          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}
