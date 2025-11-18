import { createContactFromForm } from './followUpBoss';

export async function submitContactForm(formData: FormData) {
  try {
    // Send to Follow Up Boss
    const fubResult = await createContactFromForm(formData);
    
    if (!fubResult.success) {
      // Only log in development to avoid console errors in production
      if (import.meta.env.DEV) {
        console.error('Follow Up Boss submission failed:', fubResult.error);
      }
      // Continue anyway - don't fail the form submission
    }

    // You can also send email notifications here if needed
    // For now, we'll just return success
    return {
      success: true,
      message: 'Thank you for your submission! We\'ll contact you within 24 hours.',
      fubSuccess: fubResult.success,
      fubMessage: fubResult.message,
    };
  } catch (error) {
    // Only log in development to avoid console errors in production
    if (import.meta.env.DEV) {
      console.error('Form submission error:', error);
    }
    return {
      success: false,
      message: 'There was an error submitting your form. Please try again or call us directly.',
    };
  }
}
