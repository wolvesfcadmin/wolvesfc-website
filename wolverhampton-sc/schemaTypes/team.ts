import { defineField, defineType } from 'sanity'

export const team = defineType({
  name: 'team',
  title: 'Teams & Executive',
  type: 'document',
  fields: [
    defineField({
      name: 'teamName',
      title: 'Team or Role Name',
      type: 'string',
      description: 'e.g., "Under 8", "Super League", or "President"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Executive Members', value: 'Executive Members' },
          { title: 'Senior Teams', value: 'Senior Teams' },
          { title: 'Junior Teams', value: 'Junior Teams' }
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    }),
    // NEW FIELD: Display Order
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Enter a number (1, 2, 3) to control the order this team appears within its category.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Person Name',
      type: 'string',
      description: 'e.g., "R. Smithdorf (Snr)" or "Foundation Skills"',
    }),
    defineField({
      name: 'image',
      title: 'Team Photo / Headshot',
      type: 'image',
      description: 'Optional: Upload a squad photo or executive profile picture.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'details',
      title: 'Details / Training Info',
      type: 'text',
      description: 'Add coaching info, training times, or role descriptions. Hitting Enter here will create line breaks on the website.',
    })
  ],
  preview: {
    select: {
      title: 'teamName',
      subtitle: 'category',
      media: 'image',
    },
  },
})