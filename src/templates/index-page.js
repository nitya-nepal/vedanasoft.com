import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';
// import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const IndexPageTemplate = ({
  image,
  aboutusimage,
  featurebg,
  contactusbg,
  testimonialpic,
  title,
  // heading,
  subheading,
  // mainpitch,
  // description,
  // intro,
  // main,
}) => (
  <>
    <section
      className='slider'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: '10% 0%',
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='block'>
              <h1 className='animated fadeInUp'>
                {title} <br /> &#38; {subheading}
              </h1>
              <p className='animated fadeInUp'>
                We love the Web and the work we do.We work closely with our
                clients to deliver <br /> the best possible solutions for their
                needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='about section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 col-sm-12'>
            <div className='block'>
              <div className='section-title'>
                <h2>About Us</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id{' '}
              </p>
            </div>
          </div>
          <div className='col-md-5 col-sm-12'>
            <div className='block'>
              <PreviewCompatibleImage imageInfo={{ image: aboutusimage }} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className='feature'
      style={{
        backgroundImage: `url(${
          !!featurebg.childImageSharp
            ? featurebg.childImageSharp.fluid.src
            : featurebg
        })`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-6'>
            <h2 className='section-subtitle'>WE BELIEVE IN GREAT IDEAS</h2>
            <p>
              Maecenas faucibus mollis interdum. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
              justo sit amet risus.
            </p>
            <p>
              Maecenas faucibus mollis interdum. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
              justo sit amet risus.
            </p>
            <p>
              Maecenas faucibus mollis interdum. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac
              cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
              justo sit amet risus.
            </p>
            {/* <a href="#" className="btn btn-view-works">View Works</a> */}
          </div>
        </div>
      </div>
    </section>
    <section className='service'>
      <div className='container'>
        <div className='row'>
          <div className='section-title'>
            <h2>Our Services</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, <br /> there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics
            </p>
          </div>
        </div>
        <div className='row '>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='icon ion-coffee' />
              <h4>Branding</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='ion-compass' />
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='ion-image' />
              <h4>App Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='ion-bug' />
              <h4>Start Up</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='ion-headphone' />
              <h4>Logo Design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='ion-leaf' />
              <h4>Development</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='ion-planet' />
              <h4>Brand Identity</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='service-item'>
              <i className='ion-earth' />
              <h4>Brand Identity</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className='call-to-action section-sm overly'
      style={{
        backgroundImage: `url(${
          !!contactusbg.childImageSharp
            ? contactusbg.childImageSharp.fluid.src
            : contactusbg
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='block'>
              <h2>We design delightful digital experiences.</h2>
              <p>
                Read more about what we do and our philosophy of design. Judge
                for yourself The work and results <br /> we’ve achieved for
                other clients, and meet our highly experienced Team who just
                love to design.
              </p>
              <Link className='btn btn-main btn-solid-border' to='/'>
                Tell Us Your Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className='testimonial'>
      <div className='container'>
        <div className='row'>
          <div className='section-title text-center'>
            <h2>Fun Facts About Us</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, <br /> there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='block'>
              <ul className='counter-box clearfix'>
                <li>
                  <div className='counter-item'>
                    <i className='ion-ios-chatboxes-outline' />
                    <h4 className='counter'>99</h4>
                    <span>Cups Of Coffee</span>
                  </div>
                </li>
                <li>
                  <div className='counter-item'>
                    <i className='ion-ios-glasses-outline' />
                    <h4 className='counter'>45</h4>
                    <span>Article Written</span>
                  </div>
                </li>
                <li>
                  <div className='counter-item'>
                    <i className='ion-ios-compose-outline' />
                    <h4 className='counter'>125</h4>
                    <span>Projects Completed</span>
                  </div>
                </li>
                <li>
                  <div className='counter-item'>
                    <i className='ion-ios-timer-outline' />
                    <h4 className='counter'>200</h4>
                    <span>Combined Projects</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-5 col-md-offset-1'>
            <div className='testimonial-carousel text-center'>
              <div className='testimonial-slider owl-carousel'>
                <div>
                  <i className='ion-quote' />
                  <p>
                    "This Company created an e-commerce site with the tools to
                    make our business a success, with innovative ideas we feel
                    that our site has unique elements that make us stand out
                    from the crowd."
                  </p>
                  <div className='user'>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: testimonialpic,
                      }}
                    />
                    <p>
                      <span>Rose Ray</span> CEO-Themefisher
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.shape({
      alt: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    image2: PropTypes.shape({
      alt: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    image3: PropTypes.shape({
      alt: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        aboutusimage={frontmatter.aboutusimage}
        featurebg={frontmatter.featurebg}
        contactusbg={frontmatter.contactusbg}
        testimonialpic={frontmatter.testimonialpic}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1298, maxHeight: 700, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutusimage {
          childImageSharp {
            fluid(maxWidth: 457, maxHeight: 406, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featurebg {
          childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1564, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contactusbg {
          childImageSharp {
            fluid(maxWidth: 1298, maxHeight: 312, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        testimonialpic {
          childImageSharp {
            fluid(maxWidth: 80, maxHeight: 80, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
