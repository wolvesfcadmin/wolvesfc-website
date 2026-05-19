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
            { 
              name: 'label', 
              title: 'Button Label', 
              type: 'string', 
              description: 'e.g., "Membership Form" or "Membership Fees"' 
            },
            {
              name: 'actionType',
              title: 'Button Action',
              type: 'string',
              options: {
                list: [
                  { title: 'Link to a URL (e.g., Google Form)', value: 'link' },
                  { title: 'Open a Text Modal (e.g., Fees Info)', value: 'modal' }
                ],
                layout: 'radio'
              },
              initialValue: 'link'
            },
            { 
              name: 'url', 
              title: 'Button Link/URL', 
              type: 'string', 
              description: 'Use if action is set to Link.',
              hidden: ({ parent }) => parent?.actionType !== 'link'
            },
            {
              name: 'modalContent',
              title: 'Modal Pop-up Content',
              type: 'text',
              description: 'Type the text to appear in the pop-up. Use Enter for line breaks.',
              hidden: ({ parent }) => parent?.actionType !== 'modal'
            }
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