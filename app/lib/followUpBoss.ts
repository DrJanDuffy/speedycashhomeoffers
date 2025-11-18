// Follow Up Boss API Configuration and Utilities
const FOLLOW_UP_BOSS_API_KEY =
  process.env.FOLLOW_UP_BOSS_API_KEY || "fka_0N4mnNODqvIKx7eE1oGoXyldRpk0eEgKgO";
const FOLLOW_UP_BOSS_BASE_URL = "https://api.followupboss.com/v1";

export interface FollowUpBossContact {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  source?: string;
  tags?: string[];
  notes?: string;
}

export interface FollowUpBossResponse {
  success: boolean;
  message?: string;
  contactId?: string;
  error?: string;
}

/**
 * Create a new contact in Follow Up Boss
 */
export async function createFollowUpBossContact(
  contact: FollowUpBossContact
): Promise<FollowUpBossResponse> {
  try {
    const response = await fetch(`${FOLLOW_UP_BOSS_BASE_URL}/people`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${FOLLOW_UP_BOSS_API_KEY}`,
      },
      body: JSON.stringify({
        firstName: contact.firstName,
        lastName: contact.lastName,
        emails: [{ address: contact.email, type: "work" }],
        phones: contact.phone ? [{ number: contact.phone, type: "mobile" }] : [],
        addresses: contact.address
          ? [
              {
                street: contact.address,
                city: contact.city,
                state: contact.state,
                zipCode: contact.zipCode,
                type: "home",
              },
            ]
          : [],
        source: contact.source || "Website Contact Form",
        tags: contact.tags || ["Website Lead"],
        notes: contact.notes || "",
      }),
    });

    // Read response as text first to check for HTML (can only read body once)
    const responseText = await response.text().catch(() => "");

    // Check if we got HTML instead of JSON (common with error pages)
    if (
      responseText.trim().startsWith("<!DOCTYPE") ||
      responseText.trim().startsWith("<html") ||
      responseText.trim().startsWith("<!doctype")
    ) {
      throw new Error(`Follow Up Boss API returned HTML error page (${response.status})`);
    }

    if (!response.ok) {
      // Try to parse as JSON for error details
      let errorData: any = {};
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        try {
          errorData = JSON.parse(responseText);
        } catch {
          // If JSON parse fails, use text as error message
          throw new Error(
            `Follow Up Boss API error: ${response.status} - ${responseText.substring(0, 100)}`
          );
        }
      } else {
        // Non-JSON error response
        throw new Error(
          `Follow Up Boss API error: ${response.status} - ${responseText.substring(0, 100)}`
        );
      }

      // Handle 401 Unauthorized specifically
      if (response.status === 401) {
        // Only log in development to avoid console errors in production
        if (import.meta.env.DEV) {
          console.error("Follow Up Boss API: 401 Unauthorized - API key may be invalid or expired");
        }
        return {
          success: false,
          error: "API authentication failed. Please check API key configuration.",
        };
      }

      throw new Error(
        `Follow Up Boss API error: ${response.status} - ${errorData.message || "Unknown error"}`
      );
    }

    // Success case - parse JSON response
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Follow Up Boss API returned non-JSON response");
    }

    let data: any;
    try {
      data = JSON.parse(responseText);
    } catch (err) {
      throw new Error(
        `Failed to parse Follow Up Boss API response: ${err instanceof Error ? err.message : "Unknown error"}`
      );
    }

    return {
      success: true,
      message: "Contact created successfully in Follow Up Boss",
      contactId: data.id,
    };
  } catch (error) {
    // Only log in development to avoid console errors in production
    if (import.meta.env.DEV) {
      console.error("Follow Up Boss API Error:", error);
    }
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Create a contact from form data
 */
export async function createContactFromForm(formData: FormData): Promise<FollowUpBossResponse> {
  const name = formData.get("name") as string;
  const [firstName, ...lastNameParts] = name.split(" ");
  const lastName = lastNameParts.join(" ") || "";

  const contact: FollowUpBossContact = {
    firstName: firstName || "",
    lastName: lastName,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    address: formData.get("street") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zipCode: formData.get("zip") as string,
    source: (formData.get("hear-about") as string) || "Website Contact Form",
    tags: ["Website Lead", "Cash Home Buyer Inquiry"],
    notes: (formData.get("home-details") as string) || "",
  };

  return await createFollowUpBossContact(contact);
}

/**
 * Test the Follow Up Boss API connection
 */
export async function testFollowUpBossConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${FOLLOW_UP_BOSS_BASE_URL}/people`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${FOLLOW_UP_BOSS_API_KEY}`,
      },
    });

    return response.ok;
  } catch (error) {
    // Only log in development to avoid console errors in production
    if (import.meta.env.DEV) {
      console.error("Follow Up Boss connection test failed:", error);
    }
    return false;
  }
}
