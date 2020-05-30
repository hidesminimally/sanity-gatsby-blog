export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed2cf8402b1497f1fb58906',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tfgev7v5',
                  apiId: '9250d012-8257-42b0-89c4-2e5a8a6a23f4'
                },
                {
                  buildHookId: '5ed2cf847668340e83c1e029',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f871xh5f',
                  apiId: 'c515e07a-bc33-4920-b665-4dda7e60efed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lilshim/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f871xh5f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
