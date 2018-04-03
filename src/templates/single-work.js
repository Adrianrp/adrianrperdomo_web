import React from 'react';
import Gallery from '../components/gallery';

export default ({data}) => {
  console.log(data);
  return <div>
    <img src={data.behanceProjects.modules[1].src} alt={data.behanceProjects.name}/>
    <p>{data.behanceProjects.name}</p>
    {/*<Gallery imagesObj={data}/>*/}
  </div>
};

export const query = graphql`
  query SingleWorkQuery($slug: String!) {
    behanceProjects(fields: { slug: { eq: $slug } }) {
      name
      modules {
        src
      }
    }
  }
`;