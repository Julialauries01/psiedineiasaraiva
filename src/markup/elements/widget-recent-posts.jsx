import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import recentBlogImg1 from "../../images/blog/recent-blog/pic1.jpg";
import recentBlogImg2 from "../../images/blog/recent-blog/pic2.jpg";
import recentBlogImg3 from "../../images/blog/recent-blog/pic3.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";



class WidgetRecentPosts extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Posts recentes</h4>
					<div className="widget-post-bx">
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={blogGridPic1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title"><Link to="/blog-details">A Importância do acompanhamento psicológico nos casos de Autismo</Link></h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i className="far fa-calendar-alt"></i>  21 Junho 2024</li>
								</ul>
							</div>
						</div>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title"><Link to="/blog-details">Textinho</Link></h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i className="far fa-calendar-alt"></i> 20 July 2021</li>
								</ul>
							</div>
						</div>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title"><Link to="/blog-details">The 10 Steps Needed For Putting.</Link></h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i className="far fa-calendar-alt"></i> 19 July 2021</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				
			</>
		);
	}
}

export default WidgetRecentPosts;