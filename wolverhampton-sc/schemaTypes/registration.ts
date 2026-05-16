import { defineField, defineType } from 'sanity'

export const registration = defineType({
  name: 'registration',
  title: 'Trust Registration (NPO/PBO)',
  type: 'document',
  fields: [
    defineField({
      name: 'npo',
      title: 'NPO Number',
      type: 'string',
      description: 'e.g., "139-715"',
    }),
    defineField({
      name: 'pbo',
      title: 'PBO Number',
      type: 'string',
      description: 'e.g., "930074041"',
    }),
    defineField({
      name: 'npc',
      title: 'NPC Number',
      type: 'string',
      description: 'e.g., "9170028261"',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Club Registration Numbers',
      }
    }
  }
})