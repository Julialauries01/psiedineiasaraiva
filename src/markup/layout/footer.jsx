import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import Logo from '../../images/logo.png';
import footerBg from '../../images/background/footer.jpg';
import ptImg1 from '../../images/shap/wave-blue.png';
import ptImg2 from '../../images/shap/circle-dots.png';
import ptImg3 from '../../images/shap/plus-blue.png';
import ptImg4 from '../../images/shap/wave-blue.png';

// Social Images
import facebook from '../../images/social/facebook.png';
import twitter from '../../images/social/twitter.png';
import instagram from '../../images/social/instagram.png';
import linkedin from '../../images/social/linkedin.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer" style={{backgroundImage: "url("+footerBg+")"}}>
					<div className="footer-top">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_info">
										<div className="footer-logo">
											<Link to="/"><img src={Logo} alt=""/></Link>
										</div>
										<div className="ft-contact">
											<p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
											<div className="contact-bx">
<a href="https://wa.me/5516992091665" target="_blank" rel="noopener noreferrer">
    <div className="icon">
        <i className="fas fa-phone-alt"></i>
    </div>
</a>
												<div className="contact-number">
													<span>Contate-me</span>
													<h4 className="number">(16) 99209-1665</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget ml-50">
										<h3 className="footer-title">Links Rápidos</h3>
										<ul>
											<li><Link to="/about-us"><span>Sobre mim</span></Link></li>
											<li><Link to="/services"><span>Serviços</span></Link></li>
											{/*<li><Link to="/booking"><span>Booking</span></Link></li> */}
										{/*<	<li><Link to="/faq"><span>Faq's</span></Link></li>*/}
											<li><Link to="/blog-grid"><span>Blogs</span></Link></li>
										{/*<	<li><Link to="/team"><span>Out Team</span></Link></li>*/}
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-6">
									<div className="widget footer_widget">
										<h3 className="footer-title">Meus serviços</h3>
										<ul>
											<li><span>Autismo</span></li>
											<li><span>TDAH</span></li>
											<li><span>Luto</span></li>
											<li><span>Ansiedade</span></li>
											<li><span>Depressão</span></li>
											<li><span>Outros</span></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-3 col-md-6">
									<div className="widget widget_form">
										<h3 className="footer-title">Entre em contato</h3>
										<form className="subscribe-form subscription-form mb-30">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Endereço de Email" type="email"/>
											</div>
											<button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100">Contate-me agora</button>	
										</form>
										<div className="footer-social-link">
											<ul>
												{/* <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={facebook} alt=""/></a></li> */}
												{/* <li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={twitter} alt=""/></a></li>*/}
												<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/psi.edineiasaraiva"><img src={instagram} alt=""/></a></li>
												{/* <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/"><img src={linkedin} alt=""/></a></li>*/}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer-bottom">
							<div className="row">
								<div className="col-12 text-center">
									<p className="copyright-text">Copyright © 2023 Design & Developed by <a href="https://themeforest.net/user/themetrades" rel="noreferrer" target="_blank" className="text-secondary">ThemeTrades</a></p>
								</div>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate1" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg3} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;