import React, { Component } from 'react';

class appointmentForm extends Component{
	render(){
		return(
			<>
				
				<div className="appointment-form form-wraper">
					<h3 className="title">Solicitar Agendamento</h3>
					<form action="#">
						<div className="form-group">
							<select className="form-select form-control">
								<option defaultValue>Agendamento</option>
								<option defaultValue="1">Criança</option>
								<option defaultValue="2">Adolescente</option>
								<option defaultValue="3">Adulto</option>
							</select>
						</div>
						<div className="form-group">
							<select className="form-select form-control">
								<option defaultValue>Edineia</option>
							</select>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Seu nome"/>
						</div>
						<div className="form-group">
							<input type="number" className="form-control" placeholder="Número de telefone"/>
						</div>
						<button type="submit" className="btn btn-secondary btn-lg">Solicitar Agendamento</button>
					</form>
				</div>
			
			</>
		);
	}
}

export default appointmentForm;