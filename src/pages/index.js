import React from "react"
import Gallery from '../components/gallery';

export default (data) => {
  return (
    <div style={{clear: 'both'}}>
      <h1>Works</h1>
      <Gallery imagesObj={data}/>
    </div>
  )
}


export const query = graphql`
  query GalleryImageQuery {
  allBehanceProjects {
    edges {
      node {
        id
        name
        covers {
          size_115
          size_202
          size_230
          size_404
          size_original
        }
      }
    }
  }
}
  
`;