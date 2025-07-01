interface ContactRequest {
  id: number;
  name: string;
  company: string;
  email: string;
  message: string | null;
  timestamp: Date;
  emailSent: boolean;
  autoReplySent: boolean;
}

interface InsertContactRequest {
  name: string;
  company: string;
  email: string;
  message: string | null;
  timestamp: Date;
  emailSent: boolean;
  autoReplySent: boolean;
}

class SimpleStorage {
  private contactRequests: Map<number, ContactRequest> = new Map();
  private currentContactId: number = 1;

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentContactId++;
    const request: ContactRequest = {
      ...insertRequest,
      id
    };
    
    this.contactRequests.set(id, request);
    return request;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }
}

export const storage = new SimpleStorage();