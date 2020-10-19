const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")



exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		// Returns paths like (on Windows)
		// content\workshops\cms-created-test\index.md
		// content\links\link.md
		const relativePath = path.relative(`.`, node.fileAbsolutePath);
		const splitPath = relativePath.split(path.sep);

		// TODO
		// Modify so any markdown not matching these categories still has slug so no error occurs

		if (splitPath.length === 4 && splitPath[0] === `content` && splitPath[1] === `workshops`) {
			const slug = createFilePath({ node, getNode, basePath: `` });
			createNodeField({
				node,
				name: `slug`,
				value: `/workshops${slug}`,
			});

		// Create slug for files in src/pages/
		} else if (splitPath.length === 3 && splitPath[0] === `src` && splitPath[1] === `pages`) {
			const slug = createFilePath({ node, getNode, basePath: `src/pages/` });
			createNodeField({
				node,
				name: `slug`,
				value: slug,
			});
			createNodeField({
				node,
				name: `mainPage`,
				value: true,
			})
		}
	}
}

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	// TODO
	// Set allMarkdownRemark limit
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
						}
						fileAbsolutePath
					}
				}
			}
		}
  `);

	result.data.allMarkdownRemark.edges.map(({ node }) => {
		if (node === null || node.fields === null || !(`slug` in node.fields)) {
			console.warn(`The markdown file titled "${node.frontmatter.title}" does not have a slug. A page will not be created for it.`);
			return;
		}
		/* if (node.fields.jsComponent !== null) {
			createPage({
				path: node.fields.slug,
				component: node.fields.jsComponent,
				context: {
					slug: node.fields.slug,
				},
			});
		}  */
		else {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/blog-post.js`),
				context: {
					slug: node.fields.slug,
				},
			});
		}
	});
}