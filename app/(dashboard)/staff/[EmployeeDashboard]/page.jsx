"use client"
import React from 'react'
import employeeDashboard from '@/components/Dashboard/employeeDashboard/employeeDashboard';

const page = (params) => {
  const id = params.EmployeeDashboard;
  console.log(id)
  return (
    <>
    <employeeDashboard></employeeDashboard>
    </>
  )
}

export default page