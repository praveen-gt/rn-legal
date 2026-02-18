import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name is too long'),
  mobile: z
    .string()
    .min(8, 'Please enter a valid Australian phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Please enter a valid phone number'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(200, 'Email address is too long'),
  preferredContactTime: z.string().optional(),
  practiceArea: z
    .string()
    .min(1, 'Please select a practice area'),
  description: z
    .string()
    .min(10, 'Please provide a brief description of your matter (minimum 10 characters)')
    .max(2000, 'Description is too long (maximum 2000 characters)'),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, 'You must acknowledge the disclaimer to proceed'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
