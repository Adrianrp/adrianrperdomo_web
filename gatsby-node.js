const path = require(`path`);
exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
  if (node.internal.type === `BehanceProjects`) {
    const {createNodeField} = boundActionCreators;
    // const fileNode = getNode(node.parent);
    // console.log(`\n`, getNode(node));
    createNodeField({
      node,
      name: 'slug',
      value: `/${node.name}/`
    })
  }
};
exports.createPages = ({graphql, boundActionCreators}) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
    {
  allBehanceProjects {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  } 
}
    `).then(result => {
      result.data.allBehanceProjects.edges.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/single-work.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      });
      resolve()
    })
  })
};