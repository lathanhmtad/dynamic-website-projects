import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import EmployeeServices from '../services/EmployeeServices'

const ListEmployee = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        EmployeeServices.getEmployees().then(res => {
            setEmployees(res.data)
        })
    }, [])

    const deleteEmployee = (id) => {
        EmployeeServices.deleteEmployee(id).then(res => {
            setEmployees(employees.filter(item => item.id !== id))
        })
    }

    return (
        <div className="mt-4">
            <h2 className='text-center'>Employees List</h2>

            <Link to={'/create-or-update-employee/-1'} className="btn btn-primary mb-2">Create Employee</Link>


            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link to={`/create-or-update-employee/${employee.id}`} className="btn btn-info">Update</Link>
                                        <button onClick={() => deleteEmployee(employee.id)} type="button" className="btn btn-danger ms-2 ">Delete</button>
                                        <Link to={`/view-employee/${employee.id}`} className="btn btn-warning ms-2">View</Link>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee