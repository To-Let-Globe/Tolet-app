import "../../style/blogpage.css"
// import { Container } from 'react-bootstrap';
// import image1 from '../assets/image/blogpage/1.png';
// import image2 from '../assets/image/blogpage/2.png';
// import image3 from '../assets/image/blogpage/3.png';
// import image4 from '../assets/image/blogpage/4.png';
// import image5 from '../assets/image/blogpage/5.png';
// import image6 from '../assets/image/blogpage/6.png';
import image7 from '../../assets/image/blogpage/7.png';
import image8 from '../../assets/image/blogpage/8.jpeg';
// import image9 from '../assets/image/blog/image1.png';
// import image10 from '../assets/image/blog/image2.png';
// import image11 from '../assets/image/blog/image3.png';
// import image12 from '../assets/image/blog/image4.png';
// import image13 from '../assets/image/blog/image5.png';
// import image14 from '../assets/image/blog/image6.png';
import Rectangle1 from '../../assets/image/blog/Rectangle1.png';
import Rectangle2 from '../../assets/image/blog/Rectangle2.png';
import Rectangle3 from '../../assets/image/blog/Rectangle3.png';
import Rectangle4 from '../../assets/image/blog/Rectangle4.png';
import Rectangle5 from '../../assets/image/blog/Rectangle5.png';
import Rectangle6 from '../../assets/image/blog/Rectangle6.png';

export const BlogPage = () => {
    return (
        <section className="blog">
            <div className="blodtext">
                <div className="time">
                    <h4 className="date">2 Nov, 2023 |</h4>
                    <h4 className="news">News & Events</h4>
                </div>
                <div className="blogheading">
                    <h1>Collaboration and Partnership update!</h1>
                </div>
                <div className="about">
                    <img src={image7} alt="img" />
                    <div className="aboutname">
                        <h5 className="name">Bhaumik Kore</h5>
                        <p className="designation">Full Stack Developer</p>
                    </div>
                </div>
                <div className="like">
                    <div className="seen">
                        <span><i className="fa-solid fa-eye"></i> 17</span>&nbsp;&nbsp;
                        <span><i className="fa-regular fa-heart"></i> 22</span>
                    </div>
                    <div className="read">6 min read</div>
                </div>
                <div className="hashtags">
                    <p>#BrandCollab2023</p>
                    <p>#InnovateTogether</p>
                </div>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem necessitatibus sit incidunt sed voluptates nisi optio accusantium totam dolores, expedita eius assumenda veniam aut natus illo nihil inventore culpa. Fugiat. Itaque placeat temnsectetur numq Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis distinctio dignissimos excepturi</p>
                </div>
                <div className="blogimg">
                    <img src={image8} alt="img" />
                </div>
                <div className="subtext">
                    <h1>Sub Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur neque cum aut dolore mollitia rerum quis enim ex officiis sunt accusamus alias eaque quasi. Sunt rerum nihil distinctio error tempore veniam, accusantium dolorum vel tempora qui perferendis, fugiat quos, doloremque pariatur reprehenderit numquam corporis officiis labore saepe voluptatibus? Rem accusantium non esse! Exercitationem, consequuntur. Nam ipsum consequatur corporis quam vel, mollitia debitis quae ratione veritatis id sit incidunt eius, deleniti voluptas tempora voluptates obcaecati temporibus saepe voluptatum exercitationem aperiam optio itaque natus perferendis? Voluptatem cum asperiores obcaecati saepe, aperiam consequatur nostrum iure quae sint necessitatibus dolore deleniti qui delectus!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, debitis. Laudantium commodi odio distinctio nam quis et labore delectus praesentium, soluta aut officiis doloremque dignissimos magni similique fugiat beatae architecto mollitia eum. Possimus, harum dolor sequi impedit natus ea excepturi cumque sapiente nesciunt iste aperiam deleniti illo porro, minima voluptatum necessitatibus laudantium quisquam saepe maiores, quia quo rem repellat aliquid incidunt. Suscipit unde nesciunt quasi sequi vel iure omnis tempora fugit, reiciendis, animi perspiciatis voluptatum voluptate, aliquam quas quisquam inventore illum veniam molestias enim laboriosam repellendus nemo! Eos, iste! Harum, quos! Eligendi cum perferendis porro, quod officiis magni nesciunt eveniet.</p>
                    <h1>Sub Heading</h1>
                    <ul className="list">
                        <li className="list1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className="list2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className="list3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li className="list4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    <h1>Sub Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tenetur neque cum aut dolore mollitia rerum quis enim ex officiis sunt accusamus alias eaque quasi. Sunt rerum nihil distinctio error tempore veniam, accusantium dolorum vel tempora qui perferendis, fugiat quos, doloremque pariatur reprehenderit numquam corporis officiis labore saepe voluptatibus? Rem accusantium non esse! Exercitationem, consequuntur. Nam ipsum consequatur corporis quam vel, mollitia debitis quae ratione veritatis id sit incidunt eius, deleniti voluptas tempora voluptates obcaecati temporibus saepe voluptatum exercitationem aperiam optio itaque natus perferendis? Voluptatem cum asperiores obcaecati saepe, aperiam consequatur nostrum iure quae sint necessitatibus dolore deleniti qui delectus!</p>
                    <div className="hashtag-div">
                        <h2># Hastag_One</h2>
                        <h2># Hastag_Two</h2>
                    </div>
                </div>
                <div className="column">
                    <h5>Categories</h5>
                </div>
                <div className="columimg">
                    <div className="coloumbox">
                        <img src={Rectangle5} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="news">News & Events</a><i className="fa-solid fa-arrow-right arrow1"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle4} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="featured1">Feature Updates</a><i className="fa-solid fa-arrow-right arrow2"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle1} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="brand">Brand Collaboration</a><i className="fa-solid fa-arrow-right arrow3"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle2} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="life-at-tolet">Life at To-Let</a><i className="fa-solid fa-arrow-right arrow4"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle6} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="internship-campaigns">Internship Campaigns</a><i className="fa-solid fa-arrow-right arrow5"></i></div>
                    </div>
                    <div className="coloumbox">
                        <img src={Rectangle3} alt="img" width="300px" className="img" />
                        <div className="block"><a href="/blog" className="giveaway">Giveway & Offers</a><i className="fa-solid fa-arrow-right arrow6"></i></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
