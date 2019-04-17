import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
// import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import computer from '../img/computer.png';
// import inventory from "../img/inventory.png";
import onlineshop from '../img/onlineshop.png';
import presentation from '../img/presentation.png';
import smartphone from '../img/smartphone.png';
import www from '../img/www.png';
// import work from "../img/work.png";

export const IndexPageTemplate = ({
  image,
  title,
  // heading,
  subheading,
  // mainpitch,
  // description,
  intro,
  main,
}) => (
  <>
    <section
      className='hero'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        height: 300,
      }}
    >
      <div className='hero-body'>
        <h1 className='title'>{title}</h1>
        <h2 className='subtitle'>{subheading}</h2>
      </div>
    </section>
    <div>
      {/* <section
        className='hero is-primary is-large'
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>{title}</h1>
            <h2 className='subtitle'>{subheading}</h2>
          </div>
        </div>
      </section> */}
      {/* <div
      className='margin-top-0'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className='hero'>
        <h1 className='title is-size-3-mobile is-size-2-tablet is-size-1-widescreen'>
          {title}
        </h1>
        <h3 className='subtitle is-size-5-mobile is-size-5-tablet is-size-4-widescreen'>
          {subheading}
        </h3>
      </div>
    </div> */}
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column'>HOW WE WORK</div>
            </div>
            <div className='columns'>
              <div className='column'>
                <div className='card'>
                  <div className='card-image'>
                    <figure className='image is-2by1'>
                      <img
                        src='https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt='Placeholder image'
                      />
                    </figure>
                  </div>
                  <div className='card-content'>
                    <div className='media'>
                      <div className='media-content'>
                        <p className='title is-4'>Project Initiation</p>
                        <p className='subtitle is-6'>Project Initiation</p>
                      </div>
                    </div>

                    <div className='content'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                    </div>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='card'>
                  <div className='card-image'>
                    <figure className='image is-2by1'>
                      <img
                        src='https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt='Placeholder image'
                      />
                    </figure>
                  </div>
                  <div className='card-content'>
                    <div className='media'>
                      <div className='media-content'>
                        <p className='title is-4'>Contracts</p>
                        <p className='subtitle is-6'>Contracts</p>
                      </div>
                    </div>

                    <div className='content'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                    </div>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='card'>
                  <div className='card-image'>
                    <figure className='image is-2by1'>
                      <img
                        src='https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt='Placeholder image'
                      />
                    </figure>
                  </div>
                  <div className='card-content'>
                    <div className='media'>
                      <div className='media-content'>
                        <p className='title is-4'>Mockup, Design and Develop</p>
                        <p className='subtitle is-6'>
                          Mockup, Design and Develop
                        </p>
                      </div>
                    </div>

                    <div className='content'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                    </div>
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='card'>
                  <div className='card-image'>
                    <figure className='image is-2by1'>
                      <img
                        src='https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        alt='Placeholder image'
                      />
                    </figure>
                  </div>
                  <div className='card-content'>
                    <div className='media'>
                      <div className='media-content'>
                        <p className='title is-4'>Test and Launch</p>
                        <p className='subtitle is-6'>Test and Launch</p>
                      </div>
                    </div>

                    <div className='content'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                      <a>@bulmaio</a>.<a href='#'>#css</a>
                      <a href='#'>#responsive</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div
                    className='content grey-background'
                    style={{ background: '#efefef' }}
                  >
                    <div className='title'>
                      <h2 className='title has-text-centered is-1'>
                        OUR SERVICES
                      </h2>
                    </div>
                    <div className='block '>
                      <div className='columns is-3 has-text-centered'>
                        <div className='column'>
                          <img src={www} alt='website' />
                          <p>WEBSITE</p>
                        </div>
                        <div className='column'>
                          <img src={computer} alt='web application' />
                          <p>WEB APPLICATION</p>
                        </div>
                        <div className='column'>
                          <img src={onlineshop} alt='ecommerce site' />
                          <p>ECOMMERCE SITE</p>
                        </div>
                      </div>
                      <div className='columns is-2 has-text-centered'>
                        <div className='column is-half'>
                          <img src={smartphone} alt='mobile app' />
                          <p>MOBILE APPLICATION</p>
                        </div>
                        <div className='column'>
                          <img src={presentation} alt='seo services' />
                          <p>SEO SERVICES</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="tile">
                    <h3 className="subtitle">Image of services</h3>
                  </div> */}
                  </div>
                  {/* <div className="content">
                  <div className="tile">
                    <h2 className="title">{mainpitch.title}</h2>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div> */}
                  <div className='title '>
                    <h2 className='title has-text-centered is-1'>
                      OUR PRODUCTS
                    </h2>
                  </div>
                  <Features gridItems={intro.blurbs} />

                  <div className='columns' style={{ background: '#efefef' }}>
                    <div className='column is-12'>
                      <h3 className='has-text-weight-semibold is-size-2'>
                        {main && main.heading}
                      </h3>
                      <p>{main.description}</p>
                    </div>
                  </div>
                  <div
                    className='columns is-multiline'
                    style={{ background: '#efefef' }}
                  >
                    <div className='column is-4'>
                      <section className='section'>
                        <div className='has-text-centered'>
                          <div
                            style={{
                              width: '240px',
                              display: 'inline-block',
                            }}
                          >
                            <PreviewCompatibleImage
                              imageInfo={{ ...main.image1 }}
                            />
                          </div>
                        </div>
                        <p>{main.image1.alt}</p>
                      </section>
                    </div>
                    <div className='column is-4'>
                      <section className='section'>
                        <div className='has-text-centered'>
                          <div
                            style={{
                              width: '240px',
                              display: 'inline-block',
                            }}
                          >
                            <PreviewCompatibleImage
                              imageInfo={{ ...main.image2 }}
                            />
                          </div>
                        </div>
                        <p>{main.image2.alt}</p>
                      </section>
                    </div>
                    <div className='column is-4'>
                      <section className='section'>
                        <div className='has-text-centered'>
                          <div
                            style={{
                              width: '240px',
                              display: 'inline-block',
                            }}
                          >
                            <PreviewCompatibleImage
                              imageInfo={{ ...main.image3 }}
                            />
                          </div>
                        </div>
                        <p>{main.image3.alt}</p>
                      </section>
                    </div>
                  </div>
                  {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products/">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog/">
                      Read more
                    </Link>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
            fluid(maxWidth: 2048, maxHeight: 400, quality: 80) {
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
