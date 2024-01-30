"use "
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
import Link from "next/link";
import moment from "moment";
import { getAssignquicklinksData, assingquicklinkSelector } from "@/store/allquicklinks";
import { getuserroleData, userRolesSelector } from "@/store/userrole";



const AssignQuickLink = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const token = useSelector((state) => state.auth.isAuth.token);
  const [quicklinkData, setquicklinkData] = useState([]);
  const userRoles = useSelector(userRolesSelector);
  const quicklinkSelector = useSelector(assingquicklinkSelector);

  useEffect(() => {

    dispatch(getAssignquicklinksData(token, setLoader));
    dispatch(getuserroleData(token));
  }, []);

  useEffect(() => {
    if (userRoles) {
      dispatch(getAssignquicklinksData(token, setLoader));
    }
  }, [userRoles]);

  useEffect(() => {
    if (quicklinkSelector) {
      setquicklinkData(quicklinkSelector);
      console.log(quicklinkSelector)
    }
  }, [quicklinkSelector]);

  console.log("quicklinkData", quicklinkData)



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
      Header: "Title",
      accessor: "title",
      Cell: (row) => {
        return <span className="lowercase">{row?.cell?.value}</span>;
      },
    },
    {
      Header: "Link",
      accessor: "link",
      Cell: (row) => {
        return <span className="lowercase"><Link href={row?.cell?.value}>{row?.cell?.value}</Link></span>;
      },
    },



  ];

  const TABLE_ROWS = quicklinkData?.data?.map((item, index) => {
    console.log(item)
    return {
      item: item,
      id: index + 1,
      title: item.title,
      link: item.link,
    };
  });
  console.log("table rows", TABLE_ROWS)
  return (
    <>
      {loader ? "loading..." : userRoles?.data?.quicklink?.quicklink?.includes("Show") ?
        TABLE_ROWS && TABLE_COLUMNS && (
          <DataTable
            TABLE_COLUMNS={TABLE_COLUMNS}
            TABLE_ROWS={TABLE_ROWS}
            title="Quicklink"
          //   TableModal={StaffModal}
          />
        ) : "You Dont Have Permission"}
    </>
  )
}

export default AssignQuickLink