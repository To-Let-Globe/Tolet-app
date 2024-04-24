import '../style/blog.css'
import { Container } from 'react-bootstrap'
import image1 from '../assets/image/blog/image1.png'
import image2 from '../assets/image/blog/image2.png'
import image3 from '../assets/image/blog/image3.png'
import image4 from '../assets/image/blog/image4.png'
import image5 from '../assets/image/blog/image5.png'
import image6 from '../assets/image/blog/image6.png'
import Rectangle1 from '../assets/image/blog/Rectangle1.png'
import Rectangle2 from '../assets/image/blog/Rectangle2.png'
import Rectangle3 from '../assets/image/blog/Rectangle3.png'
import Rectangle4 from '../assets/image/blog/Rectangle4.png'
import Rectangle5 from '../assets/image/blog/Rectangle5.png'
import Rectangle6 from '../assets/image/blog/Rectangle6.png'
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <section className="blog">
      <Container>
        <div className="line"></div>
        <h1 className="insights">Our Insights and Stories</h1>
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="content">
          <div className="trending">
            <span className="cl">Trending</span>
            <span className="cla"> Latest</span>
          </div>
          <div className="box ">
            <div className="boxes bo1">
            <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                <div
                    className="box-img"
                    style={{ backgroundImage: `url(${image1})` }}
                ></div>
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
                        <Link to="/blog/blogpage"  style={{ textDecoration: 'none' }}>
                        <p className="Readmore">Read More </p>
                    </Link>
                    <i className="fa-solid fa-arrow-right arrow"></i>
                    </div>
                    <div className="boxdiv">
                    <div className="boxdiv1">
                        <div className="box-footer">
                        <div
                            className="short-image"
                            style={{ backgroundImage: `url(${image6})` }}
                        ></div>
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

            <div className="boxes bo2">
              <div
                className="box-img"
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
              <div className="box-content bo3">
                <div className="date">
                  2 Nov, 23
                  <div className="vertical-line">|</div>
                  <div className="featured">Featured Updates</div>
                </div>
                <h2 className="heading">
                  Collaboration and Partnership Update!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero reprehenderit natus, voluptas at amet minus ab Lorem
                  ipsum dolor sit amet consectetur
                </p>
                <div className="read">
                  <p className="Readmore">Read More</p>
                  <i className="fa-solid fa-arrow-right arrow"></i>
                </div>
                <div className="boxdiv">
                  <div className="boxdiv1">
                    <div className="box-footer">
                      <div
                        className="short-image"
                        style={{ backgroundImage: `url(${image6})` }}
                      ></div>
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
                <hr className="hr2" />
              </div>
            </div>

            <div className="boxes bo4">
              <div
                className="box-img"
                style={{ backgroundImage: `url(${image3})` }}
              ></div>
              <div className="box-content">
                <div className="date">
                  2 Nov, 23
                  <div className="vertical-line">|</div>
                  <div className="featured">Featured Updates</div>
                </div>
                <h2 className="heading">
                  Collaboration and Partnership Update!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero reprehenderit natus, voluptas at amet minus ab Lorem
                  ipsum dolor sit amet consectetur
                </p>
                <div className="read">
                  <p className="Readmore">Read More</p>
                  <i className="fa-solid fa-arrow-right arrow"></i>
                </div>
                <div className="boxdiv">
                  <div className="boxdiv1">
                    <div className="box-footer">
                      <div
                        className="short-image"
                        style={{ backgroundImage: `url(${image6})` }}
                      ></div>
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
                <hr className="hr4" />
              </div>
            </div>

            <div className="boxes bo5">
              <div
                className="box-img"
                style={{ backgroundImage: `url(${image4})` }}
              ></div>
              <div className="box-content">
                <div className="date">
                  2 Nov, 23
                  <div className="vertical-line">|</div>
                  <div className="featured">Featured Updates</div>
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
                  <p className="Readmore">Read More</p>
                  <i className="fa-solid fa-arrow-right arrow"></i>
                </div>
                <div className="boxdiv">
                  <div className="boxdiv1">
                    <div className="box-footer">
                      <div
                        className="short-image"
                        style={{ backgroundImage: `url(${image6})` }}
                      ></div>
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
              </div>
              <hr className="hr5" />
            </div>

            <div className="boxes bo6">
              <div
                className="box-img"
                style={{ backgroundImage: `url(${image5})` }}
              ></div>
              <div className="box-content">
                <div className="date">
                  2 Nov, 23
                  <div className="vertical-line">|</div>
                  <div className="featured">Featured Updates</div>
                </div>
                <h2 className="heading">
                  Collaboration and Partnership Update!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero reprehenderit natus, voluptas at amet minus ab Lorem
                  ipsum dolor sit amet consectetur
                </p>
                <div className="read">
                  <p className="Readmore">Read More</p>
                  <i className="fa-solid fa-arrow-right arrow"></i>
                </div>
                <div className="boxdiv">
                  <div className="boxdiv1">
                    <div className="box-footer">
                      <div
                        className="short-image"
                        style={{ backgroundImage: `url(${image6})` }}
                      ></div>
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
                <hr className="hr6" />
              </div>
            </div>

            <div className="boxes bo7">
              <div
                className="box-img"
                style={{ backgroundImage: `url(${image6})` }}
              ></div>
              <div className="box-content">
                <div className="date">
                  2 Nov, 23
                  <div className="vertical-line">|</div>
                  <div className="featured">Featured Updates</div>
                </div>
                <h2 className="heading">
                  Collaboration and Partnership Update!
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero reprehenderit natus, voluptas at amet minus ab Lorem
                  ipsum dolor sit amet consectetur
                </p>
                <div className="read">
                  <p className="Readmore">Read More</p>
                  <i className="fa-solid fa-arrow-right arrow"></i>
                </div>
                <div className="boxdiv">
                  <div className="boxdiv1">
                    <div className="box-footer">
                      <div
                        className="short-image"
                        style={{ backgroundImage: `url(${image6})` }}
                      ></div>
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
                <hr className="hr7" />
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
        <h2 className="categories">Categories</h2>
        <div className="column-img">
          <div className="columnbox">
            <img src={Rectangle1} alt="img" style={{ width: '300px' }} />
            <div className="block">
              News & Events<i className="fa-solid fa-arrow-right arrow1"></i>
            </div>
          </div>
          <div className="columnbox">
            <img src={Rectangle2} alt="img" style={{ width: '300px' }} />
            <div className="block">
              Feature Updates<i className="fa-solid fa-arrow-right arrow2"></i>
            </div>
          </div>
          <div className="columnbox">
            <img src={Rectangle3} alt="img" style={{ width: '300px' }} />
            <div className="block">
              Brand Collaboration
              <i className="fa-solid fa-arrow-right arrow3"></i>
            </div>
          </div>
          <div className="columnbox">
            <img src={Rectangle4} alt="img" style={{ width: '300px' }} />
            <div className="block">
              Life at To-Let<i className="fa-solid fa-arrow-right arrow4"></i>
            </div>
          </div>
          <div className="columnbox">
            <img src={Rectangle5} alt="img" style={{ width: '300px' }} />
            <div className="block">
              Internship Campaigns
              <i className="fa-solid fa-arrow-right arrow5"></i>
            </div>
          </div>
          <div className="columnbox">
            <img src={Rectangle6} alt="img" style={{ width: '300px' }} />
            <div className="block">
              Giveway & Offers<i className="fa-solid fa-arrow-right arrow6"></i>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
