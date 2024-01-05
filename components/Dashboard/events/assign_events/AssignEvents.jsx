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
import { getAssignEventsData ,eventAssignSelector } from "@/store/allevent";
import Link from "next/link";

const AssignEvents = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loader, setLoader] = useState(true);
    const token = useSelector((state) => state.auth.isAuth.token);
    const [eventData, setEventData] = useState([]);
    const eventdataSelector = useSelector(eventAssignSelector);


    useEffect(() => {
        dispatch(getAssignEventsData(token, setLoader));
    }, []);

    useEffect(() => {
        if (eventdataSelector) {
            setEventData(eventdataSelector);
        }
    }, [eventdataSelector]);

    console.log(eventData)



  return (
    
    <div>AssignEvents</div>
  )
}

export default AssignEvents