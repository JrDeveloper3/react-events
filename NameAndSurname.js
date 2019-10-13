import React from 'react';

export default class NameAndSurname extends React.Component{
  constructor(props){
    super(props);
  
    this.state = {
      name : props.name,
      surname : props.surname
    }
  }

  // funcion que recibe el evento onChange del Input
  onInputChange = (event) => {
    const {name, value} = event.target;

    // cambiara el estado del elemento segun el name que tenga
    this.setState({
      [name] : value
    });
  }

  render() {
    const { name, surname} = this.state;

    return (
      <div>
        <h1>{name} {surname}</h1>

        <input 
          type= "text"
          value= {name}
          onChange={this.onInputChange}
          placeholder="Name"
          name="name"
        />

         <input 
          type= "text"
          value= {surname}
          onChange={this.onInputChange}
          placeholder="Surname"
          name="surname"
        />
      </div>
    )
  }
}