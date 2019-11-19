export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dd40e07cc266bfb8947ccdd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7hgsbvjm',
                  apiId: 'b6d33d6f-67f7-4ccb-a67e-5a3b0c4f4f45'
                },
                {
                  buildHookId: '5dd40e081b40ff1589afe756',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-x295ovmm',
                  apiId: '9ce87bb2-aa1b-45f4-b85b-c3c4d1036162'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ijakaric/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-x295ovmm.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
