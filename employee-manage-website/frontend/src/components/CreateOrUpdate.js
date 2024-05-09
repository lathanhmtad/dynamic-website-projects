import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom'

import EmployeeService from '../services/EmployeeServices'

const CreateOrUpdate = () => {
    const navigate = useNavigate();

    const { id } = useParams()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveClick = () => {

        let employee = formData
        if (id == -1) {
            EmployeeService.createEmployee(employee).then(res => {
                navigate('/employees')
            })
        } else {
            EmployeeService.updateEmployee(employee, id).then(res => {
                navigate('/employees')
            })
        }

    };

    const handleCancelClick = () => {
        navigate('/employees')
    }

    useEffect(() => {

        if (id != -1) {
            EmployeeService.getEmployeesById(id).then(res => {
                let employee = res.data
                setFormData(employee)
            })
        }

    }, [])

    const getTitle = () => {
        if (id == -1) {
            return 'Create Employee'
        }
        return 'Update Employee'
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 mt-5">
                        <h3 className="text-center mt-4">{getTitle()}</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-4">
                                    <label>First Name</label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label>Last Name</label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label>Email Id</label>
                                    <input
                                        placeholder="Email Address"
                                        name="emailId"
                                        className="form-control"
                                        value={formData.emailId}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <button type="button" className="btn btn-success" onClick={handleSaveClick}>
                                    Save
                                </button>
                                <button type="button" className="btn btn-danger mx-2" onClick={handleCancelClick}>
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrUpdate