import React from 'react'

const Greetings = (props) => <h1>{props.name}</h1>
export function AppGreeting () {    
    return (
        <div className = 'container'>
            <Greetings name="hola, saludo primer mensaje"/>
            <Greetings name="hola, saludo segundo mensaje"/>
            <Greetings name="hola, saludo tercer mensaje"/>
        </div>
    );
};




export const Greeter = (props) => {
  return (
        <h1>
            hello, {props.first} {props.last}
        </h1>
  );
}



export function AppGreeter() {
    return(
        <div>
            <Greeter first="ana" last="velasquez"/>
            <Greeter first="santi" last="valencia"/>
        </div>
    );
}





const Greeter2 = ({first, last, estado}) => {
    return (
      <p>
        Hello, {first} tiene {last} años y esta {estado? "activo":"inactivo"} en el sistema.
      </p>
    );
  };
  export function AppGreeter2() {
    return (
      <div className = 'container'>
        <Greeter2 first = "santi" last = {20} estado = {true}/>
        <Greeter2 first = "andres" last = {11} estado = {false}/>
        <Greeter2 first = "daniel" last = {23} estado = {true}/>
      </div>
    );
  };
  
  
  // Funcion AppEmpleado
  const Empleado = (props) =>{
    return(
      <div>
        <p>Nombre: {props.emple.nombre}</p>
        <p>Edad: {props.emple.edad}</p>
        <p>Salario: {props.emple.salario}</p>
      </div>
    );
  };
  const empleado = {
    nombre: "cristian",
    edad: 14,
    salario: 3000
  };
  export function AppEmpleado() {
    return (
      <div className = 'container'>
        <Empleado emple = {empleado}/>
      </div>
    );
  };
  
  
  // Funcion AppFruta
  const Fruta = (props) => {
    const x = props.fru;
    const listItems = x.map((frutas) => <li>{frutas}</li>);
    return <ul>{listItems}</ul>
  };
  const frutas = ["uva","piña","fresa"];
  
  export function AppFrutas () {
    return (
      <div className = 'container'>
        <Fruta fru = {frutas}/>
      </div>
    );
  };
  
  
  function Avatar({cars, size}) {
    return (
      <img
        className = "avatar"
        src = {(cars.imageId)}
        alt = {cars.name}
        width = {size}
        height = {size}
      />
    );
  };
  
  export function Profile() {
    return (
      <>
        <div className = 'card'>
          <Avatar size={400}
            cars  = {{name: "Aston Martin Vulcan", imageId: "data:image/jpeg;base64,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" }}
        />{" "}
        </div>
        <div className = "card">
            <Avatar size = {400}
              cars = {{ name: "BMW", imageId: "data:image/jpeg;base64,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", }}
            />{" "}
        </div>
        <div className = "card">
            <Avatar size = {400}
              cars = {{ name: "Bugatti", imageId: "data:image/jpeg;base64,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", }}
            />{" "}
        </div>
      </>
    );
  };
  export function AppProfile() {
    return (
      <Profile/>
    );
  };