import React from 'react';
import Link from 'gatsby-link';
import Grid from 'material-ui/Grid';

const MenuLinks = props =>
  <li style={{display: 'flex', marginRight: '1rem'}}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>;

export default ({children, data}) => (

  <div style={{margin: `0 auto`, padding: `10px 1rem`}}>
    <Grid container>
      <Grid item xs={4} sm={2} style={{alignItems: 'stretch'}}>
        <header>
          <h3>{data.site.siteMetadata.title}</h3>
          <ul style={{listStyle: 'none', marginLeft: 0}}>
            <MenuLinks to="/">Other media</MenuLinks>
            <MenuLinks to="/profile/">Profile</MenuLinks>
            <MenuLinks to="/">Contact</MenuLinks>
          </ul>
          <Link to="/">
          </Link>
        </header>
      </Grid>
      <Grid style={{paddingTop: '50px'}} item xs={8} sm={10}>
        {children()}
      </Grid>
    </Grid>
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

