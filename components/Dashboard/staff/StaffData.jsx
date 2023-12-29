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
import { getAllstaffData, staffdataSelector } from "@/store/staff";
import Link from "next/link";







const StaffData = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loader, setLoader] = useState(true);
    const token = useSelector((state) => state.auth.isAuth.token);
    const [staffData, setStaffData] = useState([]);
    const staffdataselector = useSelector(staffdataSelector);


    useEffect(() => {
        dispatch(getAllstaffData(token, setLoader));
    }, []);

    useEffect(() => {
        if (staffdataselector) {
            setStaffData(staffdataselector);
        }
    }, [staffdataselector]);

    console.log(staffData)


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
            Header: "User Name",
            accessor: "customer",
            Cell: (row) => {
                return (
                    <div>
                        <span className="inline-flex items-center">
                            <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600">
                                <img
                                    src={row?.cell?.value.profileImg}
                                    alt=""
                                    className="object-contain w-full h-full rounded-full"
                                />
                            </span>
                            <span className="text-md text-slate-600 dark:text-slate-300 capitalize">
                                {row?.cell?.value.name}
                            </span>
                        </span>
                    </div>
                );
            },
        },
        {
            Header: "Emp ID",
            accessor: "emp_id",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },

        {
            Header: "Contact Number",
            accessor: "contactnumber",
            Cell: (row) => {
                return <span>{row?.cell?.value}</span>;
            },
        },

        {
            Header: "email",
            accessor: "email",
            Cell: (row) => {
                return <span className="lowercase">{row?.cell?.value}</span>;
            },
        },
        {
            Header: "Department",
            accessor: "department",
            Cell: (row) => {
                return <span className="lowercase">{row?.cell?.value}</span>;
            },
        },

        {
            Header: "Designation",
            accessor: "designation",
            Cell: (row) => {
                return <span className="lowercase">{row?.cell?.value}</span>;
            },
        },
        {
            Header: "action",
            accessor: "action",
            Cell: (row) => {
                const id = row.row.original.item.id;
                return (
                    <div className="flex space-x-3 rtl:space-x-reverse">
                        <Tooltip
                            content="View"
                            placement="top"
                            arrow
                            animation="shift-away"
                        >
                            <Link
                                href={{ pathname: `/staff/${id}` }}
                                className="action-link"
                            >
                                <button
                                    className="btn inline-flex justify-center btn-primary  p-0 h-9 w-9 flex items-center justify-center text-xl"
                                    type="button"
                                >
                                    <Icon icon="heroicons:eye" />
                                </button>
                            </Link>
                        </Tooltip>
                        {/* <Tooltip
              content="Edit"
              placement="top"
              arrow
              animation="shift-away"
            >
              <button
                className="btn inline-flex justify-center btn-success  p-0 h-7 w-7 flex items-center justify-center text-xl"
                type="button"
                onClick={() => {
                  setEdit(true);
                  setEditData(row?.cell?.row?.original);
                }}
              >
                <Icon icon="heroicons:pencil-square" />
              </button>
            </Tooltip> */}
                        {/* <StaffModal edit={true} data={row?.cell?.row?.original} /> */}
                    </div>
                );
            },
        },
    ];

    const TABLE_ROWS = staffData?.data?.map((item, index) => {
        console.log(item)
        return {
            item: item,
            id: index + 1,

            emp_id: item.emp_id,

            customer: {
                name: item?.full_name,
                profileImg: item?.profile_image
                    ? `${API_HOST}${item?.profile_image}`
                    : "/assets/images/avatar/user.png",
            },
            email: item?.email,
            designation: item?.designation?.designation,
            department: item?.department?.department,
            contactnumber: item?.mobile_no,
            employment_type: item?.employment_type,
            joining_date: item?.joining_date,
            action: null,
        };
    });
    console.log("table rows", TABLE_COLUMNS, TABLE_ROWS)

    return (
        <>
            {TABLE_ROWS && TABLE_COLUMNS && (
                <DataTable
                    TABLE_COLUMNS={TABLE_COLUMNS}
                    TABLE_ROWS={TABLE_ROWS}
                    title="Staff List"
                //   TableModal={StaffModal}
                />
            )}
        </>
    )
}

export default StaffData