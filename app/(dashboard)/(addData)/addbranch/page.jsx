"use client";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
// import LeafletMap from "@/components/ui/LeafletMap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLocation } from "@/store/mapdata";

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

  const dispatch = useDispatch();

  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const [center, setCenter] = useState([20.5937, 78.9629]);
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (data) => {
    // alert("alert of onsubmit");
    console.log("data", data);
    console.log("Stored Input Data:", formData);
  };

  const location_Data = useSelector((state) => state.mapdata);
  console.log("location_Data", location_Data);

  useEffect(() => {
    console.log("In use effect of location_data")
    if (location_Data) {
      setLat(location_Data.latitude);
      setLong(location_Data.longitude);
    }
  }, [location_Data]);

  useEffect(() => {
    console.log("you call me in add branch");
    dispatch(setLocation(locdata));
  }, []);

  useEffect(() => {
    console.log("in use effect when change locdata");
    if (locdata) {
      console.log("locdata", locdata);
      dispatch(setLocation(locdata));
    }
    // console.log("Location found:", clickedCoordinates);
  }, [locdata]);

  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        // setClickedCoordinates([lat, lng]);
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
            <input type="text" defaultValue={lat} />
            <input type="text" defaultValue={long} />
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
              // {...register("address", { required: true })}
              // value={formData.address}
              onChange={handleInputChange}
              error={errors.address}
            />{" "}
            <Textinput
              name="branchManager"
              label="Branch Manager"
              type="Branch_Manager"
              placeholder="Branch Manager"
              register={register}
              // {...register("branchManager", { required: true })}
              // value={formData.branchManager}
              onChange={handleInputChange}
              error={errors.branchManager}
            />{" "}
            <Textinput
              name="branchNo"
              label="Branch No"
              type="Branch_No"
              placeholder="Branch No"
              register={register}
              // {...register("branchNo", { required: true })}
              // value={formData.branchNo}
              onChange={handleInputChange}
              error={errors.branchNo}
            />{" "}
            <Textinput
              name="email"
              label="email"
              type="email"
              register={register}
              // {...register("email", { required: true })}
              // value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Textinput
              name="latitude"
              label="latitude"
              type="latitude"
              // value={location_Data.latitude}
              register={register}
              // {...register("email", { required: true })}
              // value={formData.email}
              onChange={handleInputChange}
              error={errors.latitude}
            />
            <Textinput
              name="longitude"
              label="longitude"
              type="longitude"
              // value={location_Data.longitude}
              register={register}
              // {...register("email", { required: true })}
              // value={formData.email}
              onChange={handleInputChange}
              error={errors.longitude}
            />
            <Textinput
              name="radius"
              label="radius"
              type="radius"
              register={register}
              // {...register("email", { required: true })}
              // value={formData.email}
              onChange={handleInputChange}
              error={errors.radius}
            />
          </div>

          <div className="mt-8">
            {/* <LeafletMap /> */}
            <div>
              <MapContainer
                center={center}
                zoom={10}
                style={{ width: "100%", height: "500px" }}
                onClick={(e) => console.log(e)}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MyComponent></MyComponent>

                {clickedCoordinates && (
                  <Marker position={clickedCoordinates}>
                    <Circle
                      center={clickedCoordinates}
                      fillColor="blue"
                      radius={500}
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
