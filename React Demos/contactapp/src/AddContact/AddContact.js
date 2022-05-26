import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'

export default function AddContact() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            city: '',
            phone: ''
        },
        onSubmit: values => {
            fetch('http://localhost:3001/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => { console.log('Contact Added Successfully') })
        },
        validationSchema: yup.object().shape({
            firstname: yup.string()
                .min(3, 'FirstName is too short')
                .max(10, 'FirstName is too long')
                .required('FirstName cannot be left blank'),
            lastname: yup.string()
                .min(3, 'LastName is too short')
                .max(10, 'LastName is too long')
                .required('LastName cannot be left blank'),
            email: yup.string()
                .email('Invalid Email Address')
                .required('Email cannot be left blank'),
            city: yup.string()
                .required('City cannot be left blank'),
            phone: yup.string()
                .required('Phone cannot be left blank')
        }),

    });
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-dark text-light py-3 text-center rounded">
                        <h2>Add Contact</h2>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mt-2">
                            <input id="firstname" name="firstname" type="text" value={formik.values.firstname} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="First Name" />
                            {formik.errors.firstname ? <span className="text-danger">{formik.errors.firstname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="lastname" name="lastname" type="text" value={formik.values.lastname} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Last Name" />
                            {formik.errors.lastname ? <span className="text-danger">{formik.errors.lastname}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="email" name="email" type="text" value={formik.values.email} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Email" />
                            {formik.errors.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="city" name="city" type="text" value={formik.values.city} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="City" />
                            {formik.errors.city ? <span className="text-danger">{formik.errors.city}</span> : null}
                        </div>
                        <div className="mt-2">
                            <input id="phone" name="phone" type="text" value={formik.values.phone} onChange={formik.handleChange} className="form-control form-control-sm" placeholder="Phone" />
                            {formik.errors.phone ? <span className="text-danger">{formik.errors.phone}</span> : null}
                        </div>
                        <div className="mt-2 text-center">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}