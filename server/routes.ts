import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { sendContactEmail, sendAutoReply } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Send emails
      const emailSent = await sendContactEmail({
        name: validatedData.name,
        company: validatedData.company,
        email: validatedData.email,
        message: validatedData.message || undefined
      });

      const autoReplySent = await sendAutoReply({
        name: validatedData.name,
        company: validatedData.company,
        email: validatedData.email,
        message: validatedData.message || undefined
      });

      console.log("New contact request:", {
        name: contactRequest.name,
        company: contactRequest.company,
        email: contactRequest.email,
        message: contactRequest.message,
        timestamp: contactRequest.createdAt,
        emailSent,
        autoReplySent
      });

      res.json({ 
        success: true, 
        message: "Contact request submitted successfully",
        id: contactRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error submitting contact request:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact requests (for demo purposes)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
