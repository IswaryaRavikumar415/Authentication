import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



const Register = (props) => {

  const formik = useFormik  ({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    },

    validationSchema:yup.object({
      name:yup.string()
      .strict()
      .trim()
      .required("Name is required")
      .min(3,"Minimum 3 characters required")
      .max(15,"Maximum 15 characters only"),
      email:yup.string()
      .email()
      .required("Email is required"),
      password:yup.string()
      .required("Password is required"),
      confirmPassword:yup.string()
      .oneOf([yup.ref('password'),null],"Confirm password and Password must be same")
      .required("Confirm Password is required")
    }),
    onSubmit:(data)=>{
      console.log(data);
      axios.post('http://localhost:5000/api/register',data)
      .then(res =>{
        toast.success("User registered successfully");
          props.history.push('/login');    
      })
      .catch(err =>{
          toast.error(err.response.data);
      })
    }
  })
  return(
    <div className="container mt-4">
      <div className="jumbotron">
      <form autoComplete="off" onSubmit = {formik.handleSubmit}>
          <h3>Register</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
          className="form-control"
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          />
          {formik.errors.name ?
          <div className="text-danger">{formik.errors.name}</div>
          : null
        }
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
          className="form-control"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          />
          {formik.errors.email ?
          <div className="text-danger">{formik.errors.email}</div>
          : null
        }
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
          className="form-control"
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          />
          {formik.errors.password ?
          <div className="text-danger">{formik.errors.password}</div>
          : null
        }
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
          className="form-control"
          type="text"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword ?
          <div className="text-danger">{formik.errors.confirmPassword}</div>
          : null
        }
        </div>
        <div className= "d-flex justify-content-between">
        <button className="btn btn-primary">Submit</button>
        <a
        href="#"
        onClick={() => {
            window.location.href='login'
        }}
        >
        Login
        </a>
        </div>
      </form>
      </div>
    </div>
  );
}
export default Register;