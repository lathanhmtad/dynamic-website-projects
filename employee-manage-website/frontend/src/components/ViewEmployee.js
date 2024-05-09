import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import EmployeeServices from "../services/EmployeeServices"

const ViewEmployee = () => {

    const { id } = useParams()

    const [employee, setEmployee] = useState({})

    useEffect(() => {
        EmployeeServices.getEmployeesById(id).then(res => {
            setEmployee(res.data)
        })
    }, [])

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3 mt-4">
                <h3 className="text-center mt-4">View Employee Details</h3>

                <div className="card-body">
                    <div className="mb-3">
                        <label>Employee Id: </label>
                        <span className="text-info"> {employee.id}</span>
                    </div>
                    <div className="mb-3">
                        <label>Employee First Name: </label>
                        <span className="text-info"> {employee.firstName}</span>
                    </div>
                    <div className="mb-3">
                        <label>Employee Last Name: </label>
                        <span className="text-info"> {employee.lastName}</span>
                    </div>
                    <div className="mb-3">
                        <label>Employee Email Id: </label>
                        <span className="text-info"> {employee.emailId}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee