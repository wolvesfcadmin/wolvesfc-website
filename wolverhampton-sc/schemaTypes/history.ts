import { defineField, defineType } from 'sanity'

export const history = defineType({
  name: 'history',
  title: 'Club History',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Heading',
      type: 'string',
      description: 'e.g., "Roots under apartheid sport" or "1958 — present"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Story / Details',
      type: 'text',
      description: 'The main paragraph text for this history block.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Enter a number (1, 2, 3) to control the order these appear on the page.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'displayOrder',
    },
  },
})