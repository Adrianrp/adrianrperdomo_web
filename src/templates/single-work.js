import React from 'react';

export default ({data}) => {
  console.log(data);
  return <div>Holas single work

  </div>
};

export const query = graphql`
  query SingleWorkQuery($slug: String!) {
    behanceProjects(fields: { slug: { eq: $slug } }) {
      name
      covers {
        size_original
      }
    }
  }
`;