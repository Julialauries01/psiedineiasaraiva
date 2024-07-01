import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Importação das Imagens
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import testPic1 from "../../images/testimonials/pic1.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogDefaultPic4 from "../../images/blog/default/pic4.jpg";


// Conteúdo do Blog
const blogPost = [
	{ 
		id: 1,
		thumb: blogGridPic1,
		authorPic: testPic1,
		title: "A Importância do acompanhamento psicológico nos casos de Autismo",		
		author: "Edineia Saraiva",
		date: "28 Junho 2023",
		content: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content1: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content2: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content3: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content4: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
	}, 
	{ 
		id: 2,
		thumb: blogDefaultPic4,
		authorPic: testPic1,
		title: "	A Importância do acompanhamento psicológico no casamento",		
		author: "Edineia Saraiva",
		date: "20 July 2021",
		content: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content1: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content2: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content3: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content4: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
	},
];

class BlogGrid extends Component{
	render(){
		return (
			<>
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Blog Grid 3</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Blog Grid 3</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								{blogPost.map((post, index) => (
									<div key={index} className="col-xl-4 col-md-6">
										<div className="blog-card mb-30">
											<div className="post-media">
												<Link to={`/blog-details/${post.id}`}><img src={post.thumb} alt=""/></Link>
											</div>
											<div className="post-info">
												<ul className="post-meta">
													<li className="author"><Link to={`/blog-details/${post.id}`}><img src={post.authorPic} alt=""/> {post.author}</Link></li>
													<li className="date"><i className="far fa-calendar-alt"></i> {post.date}</li>
												</ul>
												<h4 className="post-title"><Link to={`/blog-details/${post.id}`}>{post.title}</Link></h4>		
												<Link to={`/blog-details/${post.id}`} className="btn btn-outline-primary btn-sm">Leia mais <i className="btn-icon-bx fas fa-chevron-right"></i></Link>		
											</div>
										</div>							
									</div>
								))}
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="pagination-bx text-center mb-30 clearfix">
										<ul className="pagination">
											<li className="previous"><Link to="#">Prev</Link></li>
											<li className="active"><Link to="#">1</Link></li>
											<li><Link to="#">2</Link></li>
											<li><Link to="#">3</Link></li>
											<li className="next"><Link to="#">Next</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}
}

export default BlogGrid;
