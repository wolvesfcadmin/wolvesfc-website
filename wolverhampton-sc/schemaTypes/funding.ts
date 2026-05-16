import { defineField, defineType } from 'sanity'

export const funding = defineType({
  name: 'funding',
  title: 'Funding Priorities',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Priority Title',
      type: 'string',
      description: 'e.g., "Junior transport subsidy" or "Kits, equipment & playing gear"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'amountZar',
      title: 'Amount (ZAR)',
      type: 'string',
      description: 'e.g., "≈ ZAR 100,000" or "ZAR 720,000"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'amountApproxGbp',
      title: 'Approximate Amount (GBP)',
      type: 'string',
      description: 'e.g., "≈ £4,547" (Optional)',
    }),
    defineField({
      name: 'note',
      title: 'Additional Note / Description',
      type: 'text',
      description: 'Optional explanation of what this funding provides.',
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
      subtitle: 'amountZar',
    },
  },
})