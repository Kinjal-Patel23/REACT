import React from 'react';
import './Home.css';
import discoverImg from './assets/about.webp';
import menuImg1 from './assets/menu-1.webp';
import menuImg2 from './assets/menu-2.webp';
import menuImg3 from './assets/menu-3.webp';
import menuImg4 from './assets/menu-4.webp';
import Button from './components/Button';
import drink1 from './assets/drink-1.webp';
import drink2 from './assets/drink-2.webp';
import drink3 from './assets/drink-3.webp';
import person1 from './assets/person_3.webp';
import person2 from './assets/person_2.webp';
import blog1 from './assets/image_1.webp';
import blog2 from './assets/image_2.webp';
import blog3 from './assets/image_3.webp';

const Home = () => {
    window.onload = function() {
        let count = document.querySelectorAll(".count");
      
        count.forEach(e => {
          let targetValue = +e.dataset.counter;
          let currentValue = 0;
          let speed = targetValue / 50;
      
          function updateCounter() {
            if (currentValue < targetValue) {
              currentValue += Math.floor(speed);
              if (currentValue > targetValue) {
                currentValue = targetValue;
              }
              e.innerText = currentValue;
            } else {
              e.innerText = targetValue;
            }
          }
      
          e.innerText = 0;
          setInterval(updateCounter, 25);
        });
      };
  
  return (
    <>
      <div className='numLocation'>
        <div className='info-box num'>
          <div className='info-icon numIcon'>
            <i className="ri-phone-fill"></i>
          </div>
          <div className='info-content subNum'>
            <p className='info-title contact'>000 (123) 456 7890</p>
            <p className='info-desc contactDesc'>A small river named Duden flows by their place and supplies.</p>
          </div>
        </div>
        <div className='info-box location'>
          <div className='info-icon locationIcon'>
            <i className="ri-compass-3-line"></i>
          </div>
          <div className='info-content subLocation'>
            <p className='info-title address'>198 West 21th Street</p>
            <p className='info-desc subAddress'>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
        </div>
        <div className='info-box time'>
          <div className='info-icon timeIcon'>
            <i className="ri-time-line"></i>
          </div>
          <div className='info-content dateDay'>
            <p className='info-title day'>Open Monday-Friday</p>
            <p className='info-desc dayTime'>8:00am - 9:00pm</p>
          </div>  
        </div>
      </div>

      <div className='discoverStory'>
        <div className='discoverStoryImg'>
          <img src={discoverImg} alt="Discover our story" />
        </div>
        <div className='discoverCont'>
          <div className='subDiscoverCont'>
            <p id='title' className='discoverTtl'>Discover</p>
            <p className='discoverMainTtl'>Our Story</p>
            <p className='discoverDesc'>On her way she met a copy. The copy warned the Little Blind Text, <br />
              that where it came from it would have been rewritten a thousand <br />
              times and everything that was left from its origin would be the word <br />
              "and" and the Little Blind Text should turn around and return to its <br />
              own, safe country. But nothing the copy said could convince her <br />
              and so it didn't take long until a few insidious Copy Writers <br />
              ambushed her, made her drunk with Longe and Parole and <br />
              dragged her into their agency, where they abused her for their.</p>
          </div>
        </div>
      </div>

      <div className='services'>
        <div className='subServices'>
          <div className='service-item easyToOrder'>
            <div className='service-icon orderIcon'>
              <i className="ri-list-check-3"></i>
            </div>
            <p className='service-title orderTtl'>Easy to Order</p>
            <p className='service-desc orderDesc'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
          <div className='service-item delivery'>
            <div className='service-icon deliveryIcon'>
              <i className="ri-truck-line"></i>
            </div>
            <p className='service-title deliveryTtl'>Fastest Delivery</p>
            <p className='service-desc deliveryDesc'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
          <div className='service-item quality'>
            <div className='service-icon qualityIcon'>
              <i className="ri-cup-line"></i>
            </div>
            <p className='service-title qualityTtl'>Quality Coffee</p>
            <p className='service-desc qualityDesc'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
        </div>
      </div>

      <div className='ourMenu'>
        <div className='subOurMenu'>
          <div className='subOurMenuCont'>
            <p id='title' className='menuTtl'>Discover</p>
            <p className='meniMainTtl'>Our Menu</p>
            <p className='menuDesc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <button>View Full Menu</button>
          </div>
          <div className='menuImg'>
            <div className='subMenuImg1'>
              <div className='menuImg1'>
                <img src={menuImg1} alt="Menu item 1" />
              </div>
              <div className='menuImg2'>
                <img src={menuImg2} alt="Menu item 2" />
              </div>
            </div>
            <div className='subMenuImg2'>
              <div className='menuImg3'>
                <img src={menuImg3} alt="Menu item 3" />
              </div>
              <div className='menuImg4'>
                <img src={menuImg4} alt="Menu item 4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='counter'>
        <div className='subCounter'>
          <div className='counter-item branches'>
            <div className='iconBox'>
              <i className="fa-solid fa-mug-hot"></i>
            </div>
            <h3 className='count' data-counter="100">0</h3>
            <p className='branchesTtl'>Coffee Branches</p>
          </div>
          <div className='counter-item awards'>
            <div className='iconBox'>
              <i className="ri-award-fill"></i>
            </div>
            <h3 className='count' data-counter="85">0</h3>
            <p className='branchesTtl'>Number of Awards</p>
          </div>
          <div className='counter-item customer'>
            <div className='iconBox'>
              <i className="fa-solid fa-face-smile"></i>
            </div>
            <h3 className='count' data-counter="10567">0</h3>
            <p className='branchesTtl'>Happy Customer</p>
          </div>
          <div className='counter-item staff'>
            <div className='iconBox'>
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <h3 className='count' data-counter="900">0</h3>
            <p className='branchesTtl'>staff</p>
          </div>
        </div>
      </div>

      <div className='coffeeSeller'>
        <div className='subCoffeeSeller'>
          <div className='coffeeSellerTitle'>
            <p id='title' className='sellerTtl'>Discover</p>
            <p className='sellerMainTtl'>Best Coffee Sellers</p>
            <p className='sellerDesc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className='coffeeSellerCont'>
            {[menuImg1, menuImg2, menuImg3, menuImg4].map((img, index) => (
              <div key={index} className={`coffeeSellerBox${index + 1}`}>
                <div className='coffeeSellerImg'>
                  <img src={img} alt={`Coffee seller ${index + 1}`} />
                </div>
                <div className='coffeeSellerImgCont'>
                  <p className='coffeeName'>Coffee Capuccino</p>
                  <p className='coffeeNameDesc'>A small river named Duden flows by their place and supplies</p>
                  <p className='coffeePrice'>$5.90</p>
                  <Button />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='gallery'>
        <div className='galleryImgs1'></div>
        <div className='galleryImgs2'></div>
        <div className='galleryImgs3'></div>
        <div className='galleryImgs4'></div>
      </div>

      <div className='products'>
        <div className='productsTtl'>
          <p id='title' className='proTtl'>Discover</p>
          <p className='proMainTtl'>Our Products</p>
          <p className='proDesc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='productsMenu'>
          <a href="#">Main Dish</a>
          <a href="#" id='drinks'>Drinks</a>
          <a href="#">Desserts</a>
        </div>
        <div className='productsCont'>
          {[
            { img: drink1, name: 'Lemonade Juice' },
            { img: drink2, name: 'Pineapple Juice' },
            { img: drink3, name: 'Soda Drinks' }
          ].map((drink, index) => (
            <div key={index} className='juice'>
              <div className='juiceImg'>
                <img src={drink.img} alt={drink.name} />
              </div>
              <div className='juiceCont'>
                <p className='juiceName'>{drink.name}</p>
                <p className='juiceNameCont'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <p className='juicePrice'>$2.90</p>
                <Button />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='testimony'>
        <div className='testimonyTtl'>
          <p id='title' className='testimonyTitle'>Testimony</p>
          <p className='testimonyMainTtl'>Customers Says</p>
          <p className='testimonialDesc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className='clientReview'>
          <div className='review1'>
            <div className='reviewCont'>
              <p className='subReview'>"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small."</p>
            </div>
            <div className='clientInfo'>
              <div className='clientPhoto'>
                <img src={person1} alt="Louise Kelly" />
              </div>
              <div className='clientName'>
                <p className='personName'>Louise Kelly</p>
                <p className='designer'>Illustrator Designer</p>
              </div>
            </div>
          </div>
          <div className='review2'>
            <div className='reviewCont1'>
              <p className='subReview'>"Even the all-powerful Pointing has no control about 
                  the blind texts it is an almost unorthographic life One day however a 
                  small line of blind text by the name of Lorem Ipsum decided to leave 
                  for the far World of Grammar."</p>
            </div>
            <div className='clientInfo'>
              <div className='clientPhoto'>
                <img src={person2} alt="Louise Kelly" />
              </div>
              <div className='clientName'>
                <p className='personName'>Louise Kelly</p>
                <p className='designer'>Illustrator Designer</p>
              </div>
            </div>
          </div>
          <div className='review3'>
            <div className='reviewCont2'>
              <p className='subReview'>"Even the all-powerful Pointing has no control 
                  about the blind texts it is an almost unorthographic life One day 
                  however a small line of blind text by the name. "</p>
            </div>
            <div className='clientInfo'>
              <div className='clientPhoto'>
                <img src={person1} alt="Louise Kelly" />
              </div>
              <div className='clientName'>
                <p className='personName'>Louise Kelly</p>
                <p className='designer'>Illustrator Designer</p>
              </div>
            </div>
          </div>
          <div className='review4'>
            <div className='reviewCont3'>
              <p className='subReview'>"Even the all-powerful Pointing has no control about 
                  the blind texts it is an almost unorthographic life One day however."</p>
            </div>
            <div className='clientInfo'>
              <div className='clientPhoto'>
                <img src={person2} alt="Louise Kelly" />
              </div>
              <div className='clientName'>
                <p className='personName'>Louise Kelly</p>
                <p className='designer'>Illustrator Designer</p>
              </div>
            </div>
          </div>
          <div className='review5'>
            <div className='reviewCont4'>
              <p className='subReview'>"Even the all-powerful Pointing has no control about the 
                  blind texts it is an almost unorthographic life One day however a small 
                  line of blind text by the name. "</p>
            </div>
            <div className='clientInfo'>
              <div className='clientPhoto'>
                <img src={person1} alt="Louise Kelly" />
              </div>
              <div className='clientName'>
                <p className='personName'>Louise Kelly</p>
                <p className='designer'>Illustrator Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mainBlog'>
        <div className='subMainBlog'>
          <div className='mainBlogTtl'>
            <p className='mainBlogTitle'>Recent from blog</p>
            <p className='mainBlogDesc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className='mainBlogCont'>
            {[blog1, blog2, blog3].map((blog, index) => (
              <div key={index} className='blogBox'>
                <div className='blogBoxImg'>
                  <img src={blog} alt={`Blog post ${index + 1}`} />
                </div>
                <div className='blogBoxCont'>
                  <div className='blogDate'>
                    <p className='blogDateYear'>Sept 10, 2018</p>
                    <p className='blogAdmin'>Admin</p>
                    <p className='blogMsg'><i className="ri-message-2-fill"></i>3</p>
                  </div>
                  <p className='pizzaNm'>The Delicious Pizza</p>
                  <p className='pizzaCont'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;