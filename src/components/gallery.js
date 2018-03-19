import React from 'react';
import Grid from 'material-ui/Grid';

export default (props) => {

  return (
    (
      <Grid container spacing={8}>
          {
            props.imagesObj.data.allBehanceProjects.edges.map(({node}, index) =>
            <Grid key={index} item xs={12} sm={2}>
              <img style={{marginBottom: 0}} key={node.id} src={node.covers.size_230} />
            </Grid>)
          }
      </Grid>
    )
  )
};
