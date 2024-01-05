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
import { getAssignHolidayData, assingholidaySelector } from "@/store/allholiday";
import Link from "next/link";
import moment from "moment";
import { getuserroleData, userRolesSelector } from "@/store/userrole";


const AssignQuickLink = () => {

  
  return (
    <div>AssignQuickLink</div>
  )
}

export default AssignQuickLink