import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class widgetTag extends Component{
	render(){
		return(
			<>
				<div className="widget widget_tag_cloud">
					<h4 className="widget-title">Tags</h4>
					<div className="tagcloud"> 
						<Link to="#">Psicóloga</Link> 
						<Link to="#">Terapia</Link> 
						<Link to="#">Ajuda</Link> 
						<Link to="#">Crianças</Link> 
						<Link to="#">Autismo</Link> 
						<Link to="#">Atendimento</Link>

					</div>
				</div>
				
			</>
		);
	}
}

export default widgetTag;