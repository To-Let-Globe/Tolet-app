import "../../style/blog/blogmain.css"
import { Container, Typography } from "@mui/material"
import {Col, Row} from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';

import image1 from '../../assets/image/blog/blog1/image1.png'
import image2 from '../../assets/image/blog/blog2/image2.png'
import image3 from '../../assets/image/blog/blog3/image1.jpg'
import image4 from '../../assets/image/blog/blog4/image1.jpg'
import image5 from '../../assets/image/blog/blog1/image1.png'
import image6 from '../../assets/image/blog/blog6/image.png'
import { Link } from 'react-router-dom'
import { Category } from "../category"

export const Blog = ()=>{
    return(
        <Container className="blog-container">
            <div className="blog-header">
                <Typography variant="h1" className="insights text-center">
                Our Insights and Stories
                </Typography>
                <Typography variant="body1" className="lorem">
                Dive into a Sea of Endless Stories and Insights
                </Typography>
            </div>
            <div className="trending">
                <span className="cl">Trending</span>
                <span className="cla"> Latest</span>
            </div>
            <div className="content">
                <Carousel>

                <Carousel.Item>
                <Row xs={1} sm={2} lg={3}>
                    <Col className="md-5 mt-4">
                        <div className="box-1">

                            <Link to="/blog/blogpage-1"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image1} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    2 Nov, 23
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading"> Mastering Rental Property Finances: Budgeting and Financial Planning Tips</h2>
                                <p>In the dynamic landscape of real estate investment, managing rental property finances efficiently is paramount for success</p>
                                <div className="read">
                                    <Link to="/blog/blogpage-1">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Akarshi Mathur</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>10</span>
                                        <i className="fa-regular fa-heart"></i><span>5</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-2">

                            <Link to="/blog/blogpage-2"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image2} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    21 feb, 24
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading"> Maximizing Rental Property Income: Strategies for Indian Landlords!</h2>
                                <p>Investing in rental properties can be a lucrative venture for landlords in India, given the country's growing population {' '}</p>
                                <div className="read">
                                    <Link to="/blog/blogpage-2">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Divyanshi Shukla</p>
                                        <p className="designation">Designer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-3">

                            <Link to="/blog/blogpage-4"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image3} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    18 Nov, 23
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading"> PGs vs. Rental Flats: Making the Right Choice in Lucknow</h2>
                                <p>In Lucknow, as in many cities, individuals seeking accommodation are often faced with the decision between staying in a paying guest </p>
                                <div className="read">
                                    <Link to="/blog/blogpage-3">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Raunak Deep Srivastava</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-4">

                            <Link to="/blog/blogpage-4"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image4} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    22 Feb, 24
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading">Unlocking the Door to Hassle-Free Student Accommodations: Your Ultimate Guide with To-Let Globe</h2>
                                <p>In the world of rental property management, securing reliable tenants is the cornerstone of success. </p>
                                <div className="read">
                                    <Link to="/blog/blogpage-4">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Manthan Thool</p>
                                        <p className="designation">UI/UX Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-5">

                            <Link to="/blog/blogpage-5"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image5} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    2 Nov, 23
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading">The Pursuit of Affordable Living: Tips and Strategies for a Balanced Life</h2>
                                <p> In today's fast-paced world, the quest for affordable living is a priority for many. Whether you're a student, a young professional, or someone looking to downsize,</p>
                                <div className="read">
                                    <Link to="/blog/blogpage-4">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Baanipreet Kaur</p>
                                        <p className="designation">FrontEnd Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-6">

                            <Link to="/blog/blogpage-6"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image6} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    4 Jan, 24
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading">Finding the Right PG in Kota, Rajasthan</h2>
                                <p> Are you gearing up to embark on your academic journey in Kota, Rajasthan, famously known as the "coaching capital" of India? If so, finding the right accommodation is likely high on your  </p>
                                <div className="read">
                                    <Link to="/blog/blogpage-6">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Ramashankar</p>
                                        <p className="designation">Content Writer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>     
                </Row>
                </Carousel.Item>                
                <Carousel.Item>
                <Row xs={1} sm={2} lg={3}>
                    <Col className="md-5 mt-4">
                        <div className="box-1">

                            <Link to="/blog/blogpage-1"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image1} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    2 Nov, 23
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading"> Mastering Rental Property Finances: Budgeting and Financial Planning Tips</h2>
                                <p>In the dynamic landscape of real estate investment, managing rental property finances efficiently is paramount for success</p>
                                <div className="read">
                                    <Link to="/blog/blogpage-1">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Akarshi Mathur</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>10</span>
                                        <i className="fa-regular fa-heart"></i><span>5</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-2">

                            <Link to="/blog/blogpage-2"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image2} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    21 feb, 24
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading"> Maximizing Rental Property Income: Strategies for Indian Landlords!</h2>
                                <p>Investing in rental properties can be a lucrative venture for landlords in India, given the country's growing population {' '}</p>
                                <div className="read">
                                    <Link to="/blog/blogpage-2">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Divyanshi Shukla</p>
                                        <p className="designation">Designer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-3">

                            <Link to="/blog/blogpage-4"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image3} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    18 Nov, 23
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading"> PGs vs. Rental Flats: Making the Right Choice in Lucknow</h2>
                                <p>In Lucknow, as in many cities, individuals seeking accommodation are often faced with the decision between staying in a paying guest </p>
                                <div className="read">
                                    <Link to="/blog/blogpage-3">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Raunak Deep Srivastava</p>
                                        <p className="designation">Full Stack Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-4">

                            <Link to="/blog/blogpage-4"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image4} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    22 Feb, 24
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading">Unlocking the Door to Hassle-Free Student Accommodations: Your Ultimate Guide with To-Let Globe</h2>
                                <p>In the world of rental property management, securing reliable tenants is the cornerstone of success. </p>
                                <div className="read">
                                    <Link to="/blog/blogpage-4">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Manthan Thool</p>
                                        <p className="designation">UI/UX Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-5">

                            <Link to="/blog/blogpage-5"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image5} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    2 Nov, 23
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading">The Pursuit of Affordable Living: Tips and Strategies for a Balanced Life</h2>
                                <p> In today's fast-paced world, the quest for affordable living is a priority for many. Whether you're a student, a young professional, or someone looking to downsize,</p>
                                <div className="read">
                                    <Link to="/blog/blogpage-4">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Baanipreet Kaur</p>
                                        <p className="designation">FrontEnd Developer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>

                    <Col className="md-5 mt-4">
                        <div className="box-6">

                            <Link to="/blog/blogpage-6"  style={{ textDecoration: 'none' }}>
                                <div className="box-img"><img src={image6} alt='BlogImage' /></div>
                            </Link>

                            <div className="box-content">
                                <div className="date">
                                    4 Jan, 24
                                    <span className="vertical-line">|</span>
                                    <span className="featured">Featured Updates</span>
                                </div>
                                <h2 className="heading">Finding the Right PG in Kota, Rajasthan</h2>
                                <p> Are you gearing up to embark on your academic journey in Kota, Rajasthan, famously known as the "coaching capital" of India? If so, finding the right accommodation is likely high on your  </p>
                                <div className="read">
                                    <Link to="/blog/blogpage-6">
                                    <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                                    </Link>
                                </div>
                                <div className="box-footer">
                                    <div className="box-footer-1">
                                        <p className="name">Ramashankar</p>
                                        <p className="designation">Content Writer</p>
                                    </div>
                                    <div className="box-footer-2">
                                        <i className="fa-solid fa-eye"></i><span>0</span>
                                        <i className="fa-regular fa-heart"></i><span>0</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </Col>     
                </Row>
                </Carousel.Item>                
                </Carousel>
            </div>
            <Category/>

        </Container>
    )
}
