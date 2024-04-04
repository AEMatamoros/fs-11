// import React, { Component } from "react";

import styled from "styled-components";
import Button from "./shared/Button";
import CustomSubtitle from "./shared/Subtitle";

const CustomTutorList = styled.ul`
  width: 100%;
  background-color: white;
  padding: 16px;
  min-height: 200px;
`;
const CustomTutorItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: 16px;
  align-items: center;
`;

// export default class TutorList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showForm: false,
//       form: {
//         firstName: "Alexis ",
//         lastName: "Matamoros",
//         phone: "96947546",
//         email: "alexis@gmail.com",
//         city: "Buenavista",
//         options: "",
//         patronymic: "",
//       },
//     };
//     this.handleOnChange = this.handleOnChange.bind(this);
//     this.addTutor = this.addTutor.bind(this);
//   }

//   handleOnChange(e) {
//     // e.target.value.length > 7
//     this.setState((oldState) => {
//       return { form: { ...oldState.form, [e.target.name]: e.target.value } };
//     });
//   }

//   addTutor() {
//     let oldFatherState = { ...this.props.content };
//     oldFatherState.tutors.push({ ...this.state.form });
//     this.props.setNewFatherState(oldFatherState);
//   }

//   render() {
//     return (
//       <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
//         {/* <h3 style={{ width: "100%", fontWeight: 700 }}>Profesores</h3> */}
//         <CustomSubtitle>Profesores</CustomSubtitle>
//         <CustomTutorList>
//           {this.props.content.tutors.map((tutor, index) => (
//             <CustomTutorItem key={index}>
//               {tutor.firstName}
//               {tutor.lastName}
//               {tutor.patronymic}
//               {tutor.phone}
//               {tutor.email}
//               {tutor.city}
//               {tutor.options}
//             </CustomTutorItem>
//           ))}
//           {this.state.showForm && (
//             <form className="shadow-lg p-4 w-50">
//               <div className="mb-2">
//                 <label htmlFor="firstName">Nombre</label>
//                 <input
//                   value={this.state.form.firstName}
//                   onChange={this.handleOnChange}
//                   type="text"
//                   name="firstName"
//                   className="form-control"
//                 />
//               </div>
//               <div className="mb-2">
//                 <label htmlFor="lastName">Apellido</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-control"
//                   value={this.state.form.lastName}
//                   onChange={this.handleOnChange}
//                 />
//               </div>
//               <div className="mb-2">
//                 <label htmlFor="phone">Telefono</label>

//                 <input
//                   type="text"
//                   name="phone"
//                   className="form-control"
//                   onChange={this.handleOnChange}
//                 />
//               </div>
//               <div className="mb-2">
//                 <label htmlFor="email">Correo</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   onChange={this.handleOnChange}
//                 />
//               </div>
//               <div className="mb-2">
//                 <label htmlFor="city">Ciudad</label>
//                 <select
//                   name="city"
//                   id="city"
//                   className="form-control"
//                   onChange={this.handleOnChange}
//                 >
//                   {this.props.content.cities.map((city) => (
//                     <option value={city} key={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <Button type="button" onClick={this.addTutor}>
//                 Agregar Maestro
//               </Button>
//             </form>
//           )}
//         </CustomTutorList>
//         <div className="my-2">
//           <Button
//             onClick={() => {
//               this.setState({ showForm: !this.state.showForm });
//             }}
//           >
//             Nuevo Maestro
//           </Button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

export default function TutorList({ content, setNewFatherState }) {
  const [form, setForm] = useState({
    firstName: "Alexis ",
    lastName: "Matamoros",
    phone: "96947546",
    email: "alexis@gmail.com",
    city: "Buenavista",
    options: "",
    patronymic: "",
  });

  const [showForm, setShowForm] = useState(false);

  function handleOnChange(e) {
    setForm((oldState) => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  }

  function addTutor() {
    let oldFatherState = { ...content };
    oldFatherState.tutors.push({ ...form });
    setNewFatherState(oldFatherState);
  }
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      {/* <h3 style={{ width: "100%", fontWeight: 700 }}>Profesores</h3> */}
      <CustomSubtitle>Profesores</CustomSubtitle>
      <CustomTutorList>
        {content.tutors.map((tutor, index) => (
          <CustomTutorItem key={index}>
            {tutor.firstName}
            {tutor.lastName}
            {tutor.patronymic}
            {tutor.phone}
            {tutor.email}
            {tutor.city}
            {tutor.options}
          </CustomTutorItem>
        ))}
        {showForm && (
          <form className="shadow-lg p-4 w-50">
            <div className="mb-2">
              <label htmlFor="firstName">Nombre</label>
              <input
                value={form.firstName}
                onChange={handleOnChange}
                type="text"
                name="firstName"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="lastName">Apellido</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={form.lastName}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone">Telefono</label>

              <input
                type="text"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="city">Ciudad</label>
              <select
                name="city"
                id="city"
                className="form-control"
                value={form.city}
                onChange={handleOnChange}
              >
                {content.cities.map((city) => (
                  <option value={city} key={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <Button type="button" onClick={addTutor}>
              Agregar Maestro
            </Button>
          </form>
        )}
      </CustomTutorList>
      <div className="my-2">
        <Button
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Nuevo Maestro
        </Button>
      </div>
    </div>
  );
}
