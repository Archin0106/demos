import React from 'react'
import { useFormik } from "formik";
export default function AddContact() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: ''
        },
        onSubmit: values => {
            console.log(values);
        }
    });
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-2">
                            <input id="firstname" required name="firstname" onChange={formik.handleChange} value={formik.values.firstname} type="text" className="form-control form-control-sm" placeholder="First Name" />
                        </div>
                        <div className="mb-2">
                            <input id="lastname" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} type="text" className="form-control form-control-sm" placeholder="Last Name" />
                        </div>
                        <div className="mb-2">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}