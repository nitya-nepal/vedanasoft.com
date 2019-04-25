import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';
// import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const IndexPageTemplate = ({
  coverimage1,
  h1TitleA,
  h1TitleB,
  pSubtitleA,
  pSubtitleB,
  imgSection1,
  h2Section1,
  pSubtitleSection1,
  pSection1,
  coverimage2,
  h2Section2,
  pSubtitleSection2,
  h2Section3,
  pSubtitleSection3A,
  pSubtitleSection3B,
  section4,
  coverimage3,
  h2Section5,
  pSection5A,
  pSection5B,
}) => (
  <>
    <section
      className="slider"
      style={{
        backgroundImage: `url(${
          !!coverimage1.childImageSharp
            ? coverimage1.childImageSharp.fluid.src
            : coverimage1
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: '10% 0%',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h1 className="animated fadeInUp">
                {h1TitleA} <br /> {h1TitleB}
              </h1>
              <p className="animated fadeInUp">
                {pSubtitleA} <br /> {pSubtitleB}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div className="block">
              <div className="section-title">
                <h2>{h2Section1}</h2>
                <p>{pSubtitleSection1}</p>
              </div>
              <p>{pSection1}</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="block">
              <PreviewCompatibleImage
                imageInfo={{ image: imgSection1, alt: h2Section1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="feature"
      style={{
        backgroundImage: `url(${
          !!coverimage2.childImageSharp
            ? coverimage2.childImageSharp.fluid.src
            : coverimage2
        })`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-6">
            <h2 className="section-subtitle">{h2Section2}</h2>
            <p>{pSubtitleSection2}</p>
            {/* <a href="#" className="btn btn-view-works">View Works</a> */}
          </div>
        </div>
      </div>
    </section>
    <section className="service">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>{h2Section3}</h2>
            <p>
              {pSubtitleSection3A}
              <br />
              {pSubtitleSection3B}
            </p>
          </div>
        </div>
        <div className="row ">
          {section4.map((each, index) => (
            <div className="col-sm-6 col-md-3" key={`section-4-${index}`}>
              <div className="service-item">
                <i className={each.icon} />
                <h4>{each.h4}</h4>
                <p>{each.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section
      className="call-to-action section-sm overly"
      style={{
        backgroundImage: `url(${
          !!coverimage3.childImageSharp
            ? coverimage3.childImageSharp.fluid.src
            : coverimage3
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h2>{h2Section5}</h2>
              <p>
                {pSection5A}
                <br />
                {pSection5B}
              </p>
              <Link className="btn btn-main btn-solid-border" to="/">
                Tell Us Your Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  // description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // main: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   image1: PropTypes.shape({
  //     alt: PropTypes.string,
  //     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   }),
  //   image2: PropTypes.shape({
  //     alt: PropTypes.string,
  //     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   }),
  //   image3: PropTypes.shape({
  //     alt: PropTypes.string,
  //     image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  //   }),
  // }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        coverimage1={frontmatter.coverimage1}
        h1TitleA={frontmatter.h1TitleA}
        h1TitleB={frontmatter.h1TitleB}
        pSubtitleA={frontmatter.pSubtitleA}
        pSubtitleB={frontmatter.pSubtitleB}
        imgSection1={frontmatter.imgSection1}
        h2Section1={frontmatter.h2Section1}
        pSubtitleSection1={frontmatter.pSubtitleSection1}
        pSection1={frontmatter.pSection1}
        coverimage2={frontmatter.coverimage2}
        h2Section2={frontmatter.h2Section2}
        pSubtitleSection2={frontmatter.pSubtitleSection2}
        h2Section3={frontmatter.h2Section3}
        pSubtitleSection3A={frontmatter.pSubtitleSection3A}
        pSubtitleSection3B={frontmatter.pSubtitleSection3B}
        section4={frontmatter.section4}
        coverimage3={frontmatter.coverimage3}
        h2Section5={frontmatter.h2Section5}
        pSection5A={frontmatter.pSection5A}
        pSection5B={frontmatter.pSection5B}
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
        coverimage1 {
          childImageSharp {
            fluid(maxWidth: 1298, maxHeight: 700, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        h1TitleA
        h1TitleB
        pSubtitleA
        pSubtitleB
        imgSection1 {
          childImageSharp {
            fluid(maxWidth: 1298, maxHeight: 700, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        h2Section1
        pSubtitleSection1
        pSection1
        coverimage2 {
          childImageSharp {
            fluid(maxWidth: 1298, maxHeight: 700, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        h2Section2
        pSubtitleSection2
        h2Section3
        pSubtitleSection3A
        pSubtitleSection3B
        section4 {
          h4
          p
          icon
        }
        coverimage3 {
          childImageSharp {
            fluid(maxWidth: 1298, maxHeight: 700, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        h2Section5
        pSection5A
        pSection5B
      }
    }
  }
`;
