export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60e32ac258230467adeee6ad',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-edb5ijvk',
                  apiId: '632cc3b7-cef2-4056-af53-87408d589b0c'
                },
                {
                  buildHookId: '60e32ac217a2762f6528842a',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-qoq2k4kh',
                  apiId: 'b4407ce4-999a-415c-ae51-665851073e88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonellwood/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-qoq2k4kh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
