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
    // UPDATED FIELD: Array of Images
    defineField({
      name: 'images',
      title: 'Team Photos / Headshots',
      type: 'array',
      description: 'Optional: Upload one or more squad photos or executive profile pictures. Multiple photos will display as a 10-second slideshow.',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'details',
      title: 'Details / Training Info',
      type: 'text',
      description: 'Add coaching info, training times, or role descriptions. Hitting Enter here will create line breaks on the website.',
    }),
    defineField({
      name: 'sliderSpeed',
      title: 'Slider Transition Time (in seconds)',
      type: 'number',
      description: 'How many seconds should each image display before transitioning? (Leave blank to default to 10 seconds)',
      initialValue: 10,
      validation: (Rule) => Rule.min(2).max(60), // Prevents admins from setting it so fast it causes seizures!
    }),
  ],
  preview: {
    select: {
      title: 'teamName',
      subtitle: 'category',
      media: 'images.0', // Shows the first image in the array as the studio thumbnail
    },
  },
})