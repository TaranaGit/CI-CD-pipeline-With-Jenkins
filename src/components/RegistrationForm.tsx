import React, { useState } from "react";
import Student from "../models/student";
import './RegistrationStyle.css';
import { Button, Form } from "react-bootstrap";

// Define the type that the registrationForm will receive

type RegistrationFormProps= {
  onFormSubmit: (formdata:Student) => void
}
const RegistrationForm = ({onFormSubmit}:RegistrationFormProps) => {

    const [student, setStudent] = useState<Student>({
        firstName:'',
        lastName:'',
        age:0,
        gradeNumber:0,
        address:''
// we did not add the grade, as it it optional.
    })
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
      onFormSubmit(student)
      //then make element value as empty-space
      setStudent({
        firstName:'',
        lastName:'',
        age:0,
        address:'',
        gradeNumber:0}
      )
    }
  return (
    <div className=" bg-blue-950 font-bold text-white pt-4 font-serif p-4 mt-4">
        <h1 className="text-center">Voter Registration Form</h1>
        {/* <p>Fill in this form to register</p> */}
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="firstname">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" required placeholder="firstName"  value={student.firstName} 
                onChange={(e)=>{setStudent((mostRecent)=>({...mostRecent, firstName:e.target.value}))
              }}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="lastName"  value={student.lastName}
            onChange={(e)=>{setStudent((mostRecent)=>({...mostRecent, lastName:e.target.value}))}}
              />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
      <Form.Label>Age</Form.Label>
      <Form.Control placeholder="age"
        //  value={student.age}
        onChange={(e)=>{setStudent((mostRecent)=>({...mostRecent, age:Number(e.target.value)}))}}
        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="address">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder="address"  value={student.address}
            onChange={(e)=>{setStudent((mostRecent)=>({...mostRecent, address:e.target.value}))}}
              />
      </Form.Group>


        <Button className="p-2" type="submit">Complete Registration</Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
