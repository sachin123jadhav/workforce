"use client"
import EmployeeDashboard from '@/components/Dashboard/employeeDashboard/EmployeeDashboard';
import React from 'react'


const page = ({params}) => {
  const user_id = params.EmployeeDashboard;
 
  return (
    <>
  
      <EmployeeDashboard user_id = {user_id} /> 
    </>
  )
}

export default page