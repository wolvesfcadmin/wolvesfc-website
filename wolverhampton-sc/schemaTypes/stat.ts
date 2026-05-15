import { defineField, defineType } from 'sanity'

export const stat = defineType({
  name: 'stat',
  title: 'Stats & Achievements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Heading / Number',
      type: 'string',
      description: 'e.g., "2025", "100+", or "CAF Licensed Coaches"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add each achievement as a separate line item. We will automatically add the hyphen (-) on the website.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})