import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Title from "../core/Title";

const Footer = () => {
  return (
    <>
    <Title
      title="Get in touch"
      style="gradient"
    />
    <Formik
      initialValues= {{
        firstName: '',
        message: '',
        email: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, 'Name must be at least 3 characters long')
          .required('Required'),
        message: Yup.string()
          .min(20, 'Message must be 20 characters or more')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log("submit: ", data);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
      
      <Form className="pb-20">
        
          <div className="form-group mb-6">
            <label htmlFor="firstName"></label>
            <Field
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="firstName"
              type="text"
              label="firstName"
              name="firstName"
              placeholder="Name"
            />
            <ErrorMessage name="firstName" />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="email"></label>
            <Field 
              className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              type="email"
              label="email"
              name="email"
              placeholder="Email address"
            />
            <ErrorMessage name="email" />
          </div>

          <div className="form-group mb-6">
            <label htmlFor="message"></label>
            <Field
            as="textarea"
            className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="message"
            label="message"
            name="message"
            placeholder="Message"
            />
            <ErrorMessage name="message" />
          </div>
          
          <button
          type="submit"
          disabled={isSubmitting}
          className="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out">Send</button>
        </Form>
      )}
    </Formik> 
    </> 
  );
};

export default Footer;