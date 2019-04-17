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
import work from '../img/work.png';

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
  <div>
    <div
      className='margin-top-0'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
          style={{
            // boxShadow:
            //   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            // backgroundColor: "rgb(255, 68, 0)",
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
          style={{
            // boxShadow:
            //   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            // backgroundColor: "rgb(255, 68, 0)",
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div className='content'>
                  <div className='tile has-text-centered'>
                    <h2 className='title is-1'>HOW WE WORK</h2>
                  </div>
                  <div className='tile is-centered'>
                    <img src={work} alt='work' />
                  </div>
                </div>
                <div className='content'>
                  <div className='tile'>
                    <h2 className='title has-text-centered is-3'>
                      OUR SERVICES
                    </h2>
                  </div>
                  <div className='block '>
                    <div className='columns is-3'>
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
                    <div className='columns is-2'>
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
                <div className='tile has-text-centered'>
                  <h2 className='title '>OUR PRODUCTS</h2>
                </div>
                <Features gridItems={intro.blurbs} />

                <div className='columns'>
                  <div className='column is-12'>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      {main && main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className='columns is-multiline'>
                  <div className='column is-6'>
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
                  <div className='column is-6'>
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
                  <div className='column is-6'>
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
