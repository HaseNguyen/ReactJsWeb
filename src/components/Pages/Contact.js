import React, { Component } from "react";
import Field from "../Common/Field";
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    section: [
        [
            { name: 'name', element: 'input', type: 'text', placeholder: 'Your Name' },
            { name: 'email', element: 'input', type: 'email', placeholder: 'Your Email*' },
            { name: 'phone', element: 'input', type: 'text', placeholder: 'Your Phone Number*' }
        ],
        [
            { name: 'message', element: 'textarea', type: 'text', placeholder: 'Type your message*' }
        ]
    ]

}

class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>

                    <form onSubmit ={this.props.handleSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            {fields.section.map((section, sectionIndex) => {
                                console.log("Rendering section", sectionIndex, "with", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field
                                                {...field}
                                                key={i}
                                                value={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                            />
                                        })}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>

                        <div className="d-none"
                            id="submitErrorMessage">
                            <div className="text-center text-danger mb-3">
                                Error sending message!</div>
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-primary btn-xl text-uppercase "
                                id="success"
                                type="submit"
                                // onClick={e => this.submitForm}
                                >Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('You must give us your name').min(3,'Common bro, yout name is longer than that'),
        email: Yup.string().email('You must give us your email'),
        phone:Yup.string().max(10, 'Hey bro, your phone number is too long'),
        message: Yup.string().max(100, 'Your information should be limited to 100 characters')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log("VALUES", values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);