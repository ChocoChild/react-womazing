import React from 'react'
import ContentLoader from 'react-content-loader'

function Loading() {
  return (
    <ContentLoader 
    speed={2}
    width={400}
    height={604}
    viewBox="0 0 400 604"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <rect x="-25" y="34" rx="0" ry="0" width="400" height="600" /> 
    <rect x="110" y="148" rx="0" ry="0" width="36" height="0" /> 
    <rect x="52" y="146" rx="0" ry="0" width="58" height="2" /> 
    <rect x="168" y="198" rx="0" ry="0" width="0" height="1" /> 
    <rect x="84" y="495" rx="0" ry="0" width="111" height="38" />
  </ContentLoader>
  )
}

export default Loading