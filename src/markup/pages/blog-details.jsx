import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';


// Elements
import AuthorProfile from "../elements/author-profile";
/*import CommentList from "../elements/comment-list"; */
import CommentRespond from "../elements/comment-respond";
import WidgetTag from "../elements/widget-tag";
import WidgetSearch from "../elements/widget-search";
/*import WidgetGallery from "../elements/widget-gallery"; */
import WidgetRecentPosts from "../elements/widget-recent-posts";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import blogDefaultPic1 from "../../images/blog/default/pic2.jpg";
import blogDefaultPic4 from "../../images/blog/default/pic4.jpg";
import image3 from "../../images/gallery/pic3.jpg";
import image4 from "../../images/gallery/pic4.jpg";
import testPic1 from "../../images/testimonials/pic1.jpg";
import image1 from "../../images/gallery/pic1.jpg";
import image2 from "../../images/gallery/pic2.jpg";


const blogPost = [
	{ 
		id: 1,
		thumb: blogDefaultPic1,
		authorPic: testPic1,
		title: "A Importância do acompanhamento psicológico nos casos de Autismo",		
		author: "Edineia Saraiva",
		date: "28 Junho 2023",
		img1: image1,
		img2: image2,
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
		title: "In this hospital there are special surgeon",		
		author: "Edineia Saraiva",
		date: "20 July 2021",
		img1: image3,
		img2: image4,
		content: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content1: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content2: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content3: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
		content4: "Conteúdo do blog sobre a importância do acompanhamento psicológico nos casos de Autismo.", // Adicione o conteúdo aqui
	},
];

const BlogDetails = () => {
	const { id } = useParams();
	const post = blogPost.find(post => post.id === parseInt(id));

	if (!post) {
		return <div>Post não encontrado</div>;
	}
		return (
			<>
				<div className="page-content bg-white">
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Blog Details</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Blog Details</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single">
									<div className="post-media">
											<img src={post.thumb} alt=""/>
										</div>
										<div className="info-bx">
											<ul className="post-meta">
												<li className="author"><Link to="/blog-details"><img src={testPic1} alt=""/>{post.author}</Link></li>
												<li className="date"><i className="far fa-calendar-alt"></i> {post.date}</li>
											</ul>
											<div className="ttr-post-title">
												<h2 className="post-title">{post.title}</h2>
											</div>
											<div className="ttr-post-text">
												<p>{post.content}</p>
												<blockquote className="wp-block-quote">
													<p>{post.content1}</p>
												</blockquote>
												<p>{post.content2}</p>
												<ul className="wp-block-gallery columns-6 is-cropped">
													<li className="blocks-gallery-item"><img alt="" src={post.img1}/></li>
													<li className="blocks-gallery-item "><img alt="" src={post.img2}/></li>
												</ul>
												<p>{post.content2}</p>
												<p>{post.content3}</p>
											</div>
											<div className="ttr-post-footer">
												<div className="post-tags">
													<strong>Tags:</strong>
													<Link to="#">Autismo</Link> 
													<Link to="#">Infantil</Link> 
													<Link to="#">Terapia</Link> 
												</div>
												<div className="share-post ml-auto">
													<ul className="social-media mb-0">
														<li><strong>Siga:</strong></li>
													{/*	<li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li> */}
														<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/psi.edineiasaraiva/"><i className="fab fa-instagram"></i></a></li>
														{/*<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>*/}
													{/*	<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>*/}
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<AuthorProfile />
								{/*	
									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h4 className="widget-title">8 Comments</h4>
											
											<div className="clearfix"> 

												
											<CommentList /> 
												
											<CommentRespond />
												
											</div>

										</div>
									</div>
									*/}
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">
										
										<WidgetSearch />
										
										<WidgetRecentPosts />
										
									{/*	<WidgetGallery /> */}
										
										<WidgetTag />
										
									</aside>
								</div>
							</div>
						</div>
					</section>
					
				</div>
			
			</>
		);
	}


export default BlogDetails;