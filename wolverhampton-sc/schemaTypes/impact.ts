import { defineField, defineType } from 'sanity'

export const impact = defineType({
  name: 'impact',
  title: 'Community Impact',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Heading',
      type: 'string',
      description: 'e.g., "300 Active Members" or "90% from underserved communities"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Details / Paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Enter a number (1, 2, 3, 4) to control the order these appear on the page.',
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