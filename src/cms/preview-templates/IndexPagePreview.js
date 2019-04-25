import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return (
      <IndexPageTemplate
        coverimage1={data.coverimage1}
        h1TitleA={data.h1TitleA}
        h1TitleB={data.h1TitleB}
        pSubtitleA={data.pSubtitleA}
        pSubtitleB={data.pSubtitleB}
        imgSection1={data.imgSection1}
        h2Section1={data.h2Section1}
        pSubtitleSection1={data.pSubtitleSection1}
        pSection1={data.pSection1}
        coverimage2={data.coverimage2}
        h2Section2={data.h2Section2}
        pSubtitleSection2={data.pSubtitleSection2}
        h2Section3={data.h2Section3}
        pSubtitleSection3A={data.pSubtitleSection3A}
        pSubtitleSection3B={data.pSubtitleSection3B}
        section4={data.section4}
        coverimage3={data.coverimage3}
        h2Section5={data.h2Section5}
        pSection5A={data.pSection5A}
        pSection5B={data.pSection5B}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
