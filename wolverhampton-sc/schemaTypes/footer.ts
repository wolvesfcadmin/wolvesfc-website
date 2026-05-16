import { defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'physicalAddress',
      title: 'Physical Address',
      type: 'text',
      description: 'Use Enter for line breaks (e.g., separating the complex name from the suburb).',
    }),
    defineField({
      name: 'registeredAddress',
      title: 'Registered Address (Legal)',
      type: 'text',
    }),
    defineField({
      name: 'socials',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name (e.g., Facebook)', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'trainingTimes',
      title: 'Training Times',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'group', title: 'Group (e.g., Seniors)', type: 'string' },
            { name: 'times', title: 'Times (e.g., Tues & Thurs 18:30)', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'e.g., "2026 Wolverhampton Sports Club Cape Town. All rights reserved."',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings',
      }
    }
  }
})