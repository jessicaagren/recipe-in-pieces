export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'string'}],
    },

    {
      name: 'instructions',
      title: 'Instructions',
      type: 'text',
    },
  ],
}
