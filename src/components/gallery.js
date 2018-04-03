import React from 'react';
import Grid from 'material-ui/Grid';
import Link from 'gatsby-link';

export default (props) => {

  return (
    (
      <Grid container spacing={8}>
          {
            props.imagesObj.data.allBehanceProjects.edges.map(({node}, index) =>
            <Grid key={index} item xs={12} sm={2}>
              <Link to={node.name}>
                <img style={{marginBottom: 0}} key={node.id} src={node.covers.size_230} />
              </Link>
            </Grid>)
          }
      </Grid>
    )
  )
};
