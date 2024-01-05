import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { API_HOST, defaultHeaders } from "@/configs/https";
import { useRouter } from "next/navigation";
import { getuserData, userDataSelector } from '@/store/userlist';
import DataTable from "@/components/partials/table/datatable";
import Icon from "@/components/ui/Icon";
import Textinput from "@/components/ui/Textinput";
import Tooltip from "@/components/ui/Tooltip";
import { getAssignEventsData, eventAssignSelector } from "@/store/allevent";
import Link from "next/link";
import moment from "moment";
import { getuserroleData, userRolesSelector } from "@/store/userrole";


const handleDownload = async (fileUrl) => {
    try {
      // Extract the filename from the URL
      const filename = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  
      // Fetch the file as a blob
      const response = await fetch(fileUrl);
      const blob = await response.blob();
  
      // Create a temporary URL for the blob
      const blobUrl = URL.createObjectURL(blob);
  
      // Creating a link and simulating a click to initiate the download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename; // Use the extracted filename
      document.body.appendChild(link);
      link.click();
  
      // Clean up: remove the link and revoke the blob URL
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
const AssignEvents = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loader, setLoader] = useState(true);
    const token = useSelector((state) => state.auth.isAuth.token);
    const [eventData, setEventData] = useState([]);
    const userRoles = useSelector(userRolesSelector);
    const eventdataSelector = useSelector(eventAssignSelector);



    console.log("userRoles", userRoles)
    useEffect(() => {

        dispatch(getAssignEventsData(token, setLoader));
        dispatch(getuserroleData(token));
    }, []);

    useEffect(() => {
        if (userRoles) {
            dispatch(getAssignEventsData(token, setLoader));
        }
    }, [userRoles]);

    useEffect(() => {
        if (eventdataSelector) {
            setEventData(eventdataSelector);
        }
    }, [eventdataSelector]);

    console.log(eventData)

    const TABLE_COLUMNS = [
        // Removed the checkbox column
        {
            Header: "Sr. No",
            accessor: "id",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },

        {
            Header: "Events",
            accessor: "event",
            Cell: (row) => {
                return (
                    <div>
                        <span className="inline-flex items-center">
                            <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600">
                                <img
                                    src={row?.cell?.value.event_image}
                                    alt=""
                                    className="object-contain w-full h-full rounded-full"
                                />
                            </span>
                            <span className="text-md text-slate-600 dark:text-slate-300 capitalize">
                                {row?.cell?.value.event_name}
                            </span>
                        </span>
                    </div>
                );
            },
        },
        {
            Header: "Event Description",
            accessor: "event_description",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },
        {
            Header: "Event Location",
            accessor: "event_location",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },



        {
            Header: "Start Date",
            accessor: "start_date",
            Cell: (row) => {
                return <span className="lowercase">{row?.cell?.value}</span>;
            },
        },
        {
            Header: "End Date",
            accessor: "end_date",
            Cell: (row) => {
                return <span className="lowercase">{row?.cell?.value}</span>;
            },
        },

        {
            Header: "Event Document",
            accessor: "event_document",
            Cell: (row) => {
                return <span >{row?.cell?.value}</span>;
            },
        },

    ];

    const TABLE_ROWS = eventData?.data?.map((item, index) => {
        console.log(item)
        return {
            item: item,
            id: index + 1,



            event: {
                event_name: item?.event_name,
                event_image: item?.event_image
                    ? `${API_HOST}${item?.event_image}`
                    : "/assets/images/avatar/user.png",
            },
            event_description: item.event_description,
            event_location: item.event_location,
            end_date: moment(item?.end_date).format("MMMM Do YYYY, h:mm a"),
            start_date: moment(item?.start_date).format("MMMM Do YYYY, h:mm a"),
            event_document: item?.document
                // ? `${API_HOST}${item?.document}`
                ? (
                    <>
                        <div className="flex space-x-3 rtl:space-x-reverse">
                            <Tooltip content="Download" placement="top" arrow animation="shift-away">
                                <button
                                    className="btn inline-flex justify-center btn-primary p-0 h-9 w-9 flex items-center justify-center text-xl"
                                    type="button"
                                    onClick={() => handleDownload(`${API_HOST}${item?.document}`)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                                    </svg>
                                </button>
                            </Tooltip>

                            <Tooltip content="View" placement="top" arrow animation="shift-away">
                                <Link href={{ pathname: `${API_HOST}${item?.document}` }} className="action-link">
                                    <button
                                        className="btn inline-flex justify-center btn-primary p-0 h-9 w-9 flex items-center justify-center text-xl"
                                        type="button"
                                    >
                                        <Icon icon="heroicons:eye" />
                                    </button>
                                </Link>
                            </Tooltip>

                            {/* Add other buttons or components as needed */}
                        </div>
                    </>
                )
                : null,


        };
    });

    return (
        <>
            {userRoles?.data?.event?.event?.includes("Show") ?
                TABLE_ROWS && TABLE_COLUMNS && (
                    <DataTable
                        TABLE_COLUMNS={TABLE_COLUMNS}
                        TABLE_ROWS={TABLE_ROWS}
                        title="Event List"
                    //   TableModal={StaffModal}
                    />
                ) : "You Dont Have Permission"}

        </>
    )
}

export default AssignEvents