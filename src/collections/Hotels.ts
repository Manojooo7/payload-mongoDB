import type { CollectionConfig } from 'payload'

export const Hotels: CollectionConfig = {
  slug: 'hotels',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
  upload: true,
}
