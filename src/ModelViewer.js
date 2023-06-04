/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

function ModelViewer({ src, alt, ...props }) {
  return <model-viewer src={src} alt={alt} {...props} />;
}

export default ModelViewer;
