import { defineField, defineType } from 'sanity'

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true, // Allows admins to crop the logo in the dashboard
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility (e.g., "MSD Consulting Logo")',
        })
      ]
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Link to the sponsor\'s website',
    }),
    defineField({
      name: 'tier',
      title: 'Sponsorship Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Kit Sponsor', value: 'Kit Sponsor' },
          { title: 'Kit Supplier', value: 'Kit Supplier' },
          { title: 'General Partner', value: 'General Partner' }
        ],
        layout: 'radio'
      }
    })
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'tier',
      media: 'logo',
    },
  },
})