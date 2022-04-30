import React, { useState,useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios"

 const BASE_URL = "https://dummy.restapiexample.com/api/v1/employees"

function Nine(){
const [category,setCategory] = useState([])
const [data,setData] = useState([])


useEffect(() => {
    const age = []
    const salary = []
    axios.get(BASE_URL).then(response => {
        response.data.data.map(item => {
            const {employee_salary,employee_age} = item
            age.push(employee_age)
            salary.push(employee_salary)
        })
        setCategory(salary)
        setData(age)
    })
},[])


return (
    <Chart 
    options = {{
        labels:"salary",
        xaxis:{
        categories:category
    }
}}

series = {[{
    name:"AGE",
    data:data
}]}
width = "700"
/>
)
}

export default Nine;