import '../../style/blog/blog.css'
import '../../style/blog/blog4.css'
import { Container, Typography } from '@mui/material'
import image1 from '../../assets/image/blog/blog1/image1.png'
import image2 from '../../assets/image/blog/blog2/image2.png'
import image3 from '../../assets/image/blog/blog3/image1.jpg'
import image4 from '../../assets/image/blog/blog4/image1.jpg'

import image5 from '../../assets/image/blog/blog1/image1.png'

import Rectangle1 from '../../assets/image/blog/Rectangle1.png'
import Rectangle2 from '../../assets/image/blog/Rectangle2.png'
import Rectangle3 from '../../assets/image/blog/Rectangle3.png'
import Rectangle4 from '../../assets/image/blog/Rectangle4.png'
import Rectangle5 from '../../assets/image/blog/Rectangle5.png'
import Rectangle6 from '../../assets/image/blog/Rectangle6.png'
import { Link } from 'react-router-dom'

export const Blog = () => {
  return (
    <section className="blog">
      <Container className="blog-container">
        <Typography variant="h1" className="insights text-center">
        Our Insights and Stories
        </Typography>
        <Typography variant="body1" className="lorem">
        Dive into a Sea of Endless Stories and Insights
        </Typography>
        <div className="content">
          <div className="trending">
            <span className="cl">Trending</span>
            <span className="cla"> Latest</span>
          </div>
          <div className="row">
          <div className="col-md-4">
            <div className="boxes bo1">
                <Link to="/blog/blogpage-1"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image1} alt='BlogImage' style={{height:"auto", borderRadius:'16px'}}/></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        2 Nov, 23
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Mastering Rental Property Finances: Budgeting and Financial Planning Tips 
                    </h2>
                    <p>In the dynamic landscape of real estate investment, managing rental property finances efficiently is paramount for success
                    {' '}
                    </p>
                    <div className="read">
                        <Link to="/blog/blogpage-1"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                    
                      </Link>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Akarshi Mathur</div>
                        </div>
                        <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="boxes bo2">
                <Link to="/blog/blogpage-2"  style={{ textDecoration: 'none' }}>
                <div className="box-img"><img src={image2} alt='BlogImage'style={{height:"220px",borderRadius:'16px'}}/></div>
                </Link>
                <div className="box-content">
                    <div className="date">
                        21 feb, 24
                        <span className="vertical-line">|</span>
                        <span className="featured">Featured Updates</span>
                    </div>
                    <h2 className="heading">
                    Maximizing Rental Property Income: Strategies for Indian Landlords!
                    </h2>
                    <p>
                    Investing in rental properties can be a lucrative venture for landlords in India, given the country's growing population {' '}
                    </p>
                    
                    <div className="read">
                        <Link to="/blog/blogpage-2"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More <i className="fa-solid fa-arrow-right arrow"></i></p>
                      </Link>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div className="name">Divyanshi Shukla</div>
                        </div>
                        <div className="designation">Designer</div>
                    </div>
                    <div className="boxdiv2">
                        <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>14</span>
                        </div>
                        <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>32</span>
                        </div>
                    </div>
                    </div>
                    <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes bo3">
                <Link to="/blog/blogpage-3" style={{ textDecoration: 'none' }}>
                  <div className="box-img">
                    <img
                      src={image3}
                      style={{ height: '220px', borderRadius:'16px' }}
                      alt="BlogImage"
                    />
                  </div>
                </Link>
                <div className="box-content">
                  <div className="date">
                    18 Nov, 23
                    <span className="vertical-line">|</span>
                    <span className="featured">Featured Updates</span>
                  </div>
                  <h2 className="heading">
                    PGs vs. Rental Flats: Making the Right Choice in Lucknow
                  </h2>
                  <p>
                    In Lucknow, as in many cities, individuals seeking
                    accommodation are often faced with the decision between
                    staying in a paying guest 
                  </p>
                  <div className="read">
                    <Link
                      to="/blog/blogpage-3"
                      style={{ textDecoration: 'none' }}
                    >
                      <p className="Readmore">
                        Read More{' '}
                        <i className="fa-solid fa-arrow-right arrow"></i>
                      </p>
                    </Link>
                  </div>
                  <div className="boxdiv">
                    <div className="boxdiv1">
                      <div className="box-footer">
                        <div className="name">Raunak Deep Srivastava</div>
                      </div>
                      <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                      <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>0</span>
                      </div>
                      <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes bo4">
                <Link to="/blog/blogpage-4" style={{ textDecoration: 'none' }}>
                  <div className="box-img">
                    <img src={image4}
                    style={{ height: '215px', borderRadius:'16px' }} alt="BlogImage" />
                  </div>
                </Link>
                <div className="box-content">
                  <div className="date">
                    22 Feb, 24
                    <span className="vertical-line">|</span>
                    <span className="featured">Featured Updates</span>
                  </div>
                  <h2 className="heading">
                    Unlocking the Door to Hassle-Free Student Accommodations:
                    Your Ultimate Guide with To-Let Globe
                  </h2>
                  <p>
                  In the world of rental property management, securing reliable tenants is the cornerstone of success.
                  </p>
                  <div className="read">
                    <Link
                      to="/blog/blogpage"
                      style={{ textDecoration: 'none' }}
                    >
                      <p className="Readmore">
                        Read More{' '}
                        <i className="fa-solid fa-arrow-right arrow"></i>
                      </p>
                    </Link>
                  </div>
                  <div className="boxdiv">
                    <div className="boxdiv1">
                      <div className="box-footer">
                        <div className="name">Manthan Thool</div>
                      </div>
                      <div className="designation">UI/UX Developer</div>
                    </div>
                    <div className="boxdiv2">
                      <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>0</span>
                      </div>
                      <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                  <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes bo5">
                <Link to="/blog/blogpage" style={{ textDecoration: 'none' }}>
                  <div className="box-img">
                    <img src={image5} alt="BlogImage" />
                  </div>
                </Link>
                <div className="box-content">
                  <div className="date">
                    2 Nov, 23
                    <span className="vertical-line">|</span>
                    <span className="featured">Featured Updates</span>
                  </div>
                  <h2 className="heading">
                    Collaboration and Partnership Update!
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                  </p>
                  <div className="read">
                    <Link
                      to="/blog/blogpage"
                      style={{ textDecoration: 'none' }}
                    >
                      <p className="Readmore">
                        Read More{' '}
                        <i className="fa-solid fa-arrow-right arrow"></i>
                      </p>
                    </Link>
                  </div>
                  <div className="boxdiv">
                    <div className="boxdiv1">
                      <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                      </div>
                      <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                      <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                      </div>
                      <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                      </div>
                    </div>
                  </div>
                  <hr className="hr1" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="boxes bo6">
                <Link to="/blog/blogpage" style={{ textDecoration: 'none' }}>
                  <div className="box-img">
                    <img src={image5} alt="BlogImage" />
                  </div>
                </Link>
                <div className="box-content">
                  <div className="date">
                    2 Nov, 23
                    <span className="vertical-line">|</span>
                    <span className="featured">Featured Updates</span>
                  </div>
                  <h2 className="heading">
                    Collaboration and Partnership Update!
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero reprehenderit natus, voluptas at amet minus ab Lorem
                    ipsum dolor sit amet consectetur{' '}
                  </p>
                  <div className="read">
                    <Link
                      to="/blog/blogpage"
                      style={{ textDecoration: 'none' }}
                    >
                      <p className="Readmore">
                        Read More{' '}
                        <i className="fa-solid fa-arrow-right arrow"></i>
                      </p>
                    </Link>
                  </div>
                  <div className="boxdiv">
                    <div className="boxdiv1">
                      <div className="box-footer">
                        <div className="name">Bhaumik Kore</div>
                      </div>
                      <div className="designation">Full Stack Developer</div>
                    </div>
                    <div className="boxdiv2">
                      <div className="eyebox">
                        <i className="fa-solid fa-eye"></i>
                        <span>17</span>
                      </div>
                      <div className="eyebox">
                        <i className="fa-regular fa-heart"></i>
                        <span>22</span>
                      </div>
                    </div>
                  </div>
                  <hr className="hr1" />
                </div>
              </div>
            </div>
          </div>
          <div className="page-bar">
            <h4 className="next">{'<'} </h4>
            <div className="next">Previous</div>
            <div className="next">1</div>
            <div className="next">2</div>
            <div className="next">...</div>
            <div className="next">10</div>
            <div className="next">|</div>
            <div className="next">Next</div>
            <div className="next">{'>'}</div>
          </div>
        </div>
        <div className="column">
          <h5>Categories</h5>
        </div>
        <div className="columimg">
          <div className="coloumbox">
            <img src={Rectangle5} alt="img" width="300px" className="img" />
            <div className="block">
              <a href="/blog" className="column-header">
                News & Events
              </a>
              <i className="fa-solid fa-arrow-right arrow"></i>
            </div>
          </div>
          <div className="coloumbox">
            <img src={Rectangle4} alt="img" width="300px" className="img" />
            <div className="block">
              <a href="/blog" className="column-header">
                Feature Updates
              </a>
              <i className="fa-solid fa-arrow-right arrow"></i>
            </div>
          </div>
          <div className="coloumbox">
            <img src={Rectangle1} alt="img" width="300px" className="img" />
            <div className="block">
              <a href="/blog" className="column-header">
                Brand Collaboration
              </a>
              <i className="fa-solid fa-arrow-right arrow"></i>
            </div>
          </div>
          <div className="coloumbox">
            <img src={Rectangle2} alt="img" width="300px" className="img" />
            <div className="block">
              <a href="/blog" className="column-header">
                Life at To-Let
              </a>
              <i className="fa-solid fa-arrow-right arrow"></i>
            </div>
          </div>
          <div className="coloumbox">
            <img src={Rectangle6} alt="img" width="300px" className="img" />
            <div className="block">
              <a href="/blog" className="column-header">
                Internship Campaigns
              </a>
              <i className="fa-solid fa-arrow-right arrow"></i>
            </div>
          </div>
          <div className="coloumbox">
            <img src={Rectangle3} alt="img" width="300px" className="img" />
            <div className="block">
              <a href="/blog" className="column-header">
                Giveway & Offers
              </a>
              <i className="fa-solid fa-arrow-right arrow"></i>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
