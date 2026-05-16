import { defineField, defineType } from 'sanity'

export const joinCta = defineType({
  name: 'joinCta',
  title: 'Join CTA Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'e.g., "Join The Pack"',
    }),
    defineField({
      name: 'description',
      title: 'Description Text',
      type: 'text',
      description: 'e.g., "Ready to be part of a winning tradition? Register now..."',
    }),
    defineField({
      name: 'buttons',
      title: 'Action Buttons',
      type: 'array',
      description: 'Add the buttons that will appear below the text.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Button Label', type: 'string', description: 'e.g., "Membership Form"' },
            { name: 'url', title: 'Button Link/URL', type: 'string', description: 'e.g., a link to a Google Form or PDF. Use "#" as a placeholder.' }
          ]
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Join CTA Content'
      }
    }
  }
})