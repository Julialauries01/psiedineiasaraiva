import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg1 from '../../images/background/line-bg1.png';
import ptImg1 from '../../images/shap/circle-orange.png';
import ptImg2 from '../../images/shap/plus-orange.png';
import ptImg3 from '../../images/shap/circle-dots.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp5 work-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:" no-repeat", backgroundPosition: "center", backgroundSize: "100%"}}>
					<div className="container-sm">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Meu trabalho</h6>
							<h2 className="title">Com o que eu trabalho ?</h2>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">01</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Crianças</h5>
										<p>Atendo crianças em um ambiente adaptado especialmente para elas</p>
									</div>
									<Link to="/booking" className="btn btn-primary light">Ver mais <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx active">
									<div className="work-num-bx">02</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Adolescentes</h5>
										<p>Ajudo adolescentes a explorar seus desafios e descobrir novas habilidades para uma vida equilibrada e satisfatória</p>
									</div>
									<Link to="/services" className="btn btn-primary light">Ver mais <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
							<div className="col-lg-4 col-sm-6 mb-30">
								<div className="work-bx">
									<div className="work-num-bx">03</div>
									<div className="work-content">
										<h5 className="title text-secondary mb-10">Adultos</h5>
										<p>Juntos, poderemos trabalhar as diversas demandas e obstáculos da vida adulta.</p>
									</div>
									<Link to="/contact-us" className="btn btn-primary light">Ver mais <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate1" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate3" src={ptImg3} alt=""/>
				</section>
				
			</>
		);
	}
}

export default aboutSection;