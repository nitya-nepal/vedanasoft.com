import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import './all.sass';
// import "../sass/layout.scss";

import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-16x16.png'
          sizes='16x16'
        />

        <link
          rel='mask-icon'
          href='/img/safari-pinned-tab.svg'
          color='#ff4400'
        />
        <meta name='theme-color' content='#fff' />

        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='/' />
        <meta property='og:image' content='/img/og-image.jpg' />

        {/* <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
          integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u'
          crossorigin='anonymous'
        /> */}

        <link
          rel='stylesheet'
          href='/plugins/bootstrap/css/bootstrap.min.css'
        />
        <link rel='stylesheet' href='/plugins/Ionicons/css/ionicons.min.css' />
        <link rel='stylesheet' href='/plugins/animate-css/animate.css' />
        <link
          rel='stylesheet'
          href='/plugins/magnific-popup/dist/magnific-popup.css'
        />
        <link rel='stylesheet' href='/plugins/slick-carousel/slick/slick.css' />
        <link
          rel='stylesheet'
          href='/plugins/slick-carousel/slick/slick-theme.css'
        />

        <link rel='stylesheet' href='/css/style.css' />
      </Helmet>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
