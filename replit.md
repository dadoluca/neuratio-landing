# Neuratio AI Landing Page

## Overview

This is a modern, AI-powered customer service landing page for Neuratio, targeting machinery manufacturers. The application is built as a full-stack solution with a React frontend and Express.js backend, designed to capture leads through a contact form and provide information about Neuratio's AI customer service platform.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: Custom context-based language switching (EN/IT)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Email Service**: SendGrid for transactional emails
- **Data Storage**: In-memory storage with option for PostgreSQL via Drizzle ORM
- **Session Management**: Connect-pg-simple for PostgreSQL sessions

### Design System
- **Theme**: Professional aqua green (#1cd5be) primary color scheme
- **Typography**: Inter font family for modern readability
- **Components**: Radix UI primitives with custom styling
- **Responsive**: Mobile-first design approach
- **Animations**: CSS transitions and professional loading states

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling and language toggle
- **Hero**: Full-screen landing section with animated loading and CTA buttons
- **About**: Founder profiles with professional imagery
- **Contact**: Lead capture form with real-time validation
- **Problems/Benefits**: Feature showcase sections
- **Footer**: Company information and quick links

### Backend Services
- **Contact API**: `/api/contact` endpoint for form submissions
- **Email Service**: Automated email notifications and auto-replies
- **Storage Layer**: Abstracted storage interface supporting multiple backends
- **Error Handling**: Centralized error management with proper HTTP status codes

### Shared Schema
- **User Management**: Basic user schema for potential future authentication
- **Contact Requests**: Lead capture with company information and messages
- **Validation**: Zod schemas for type-safe data validation

## Data Flow

1. **User Interaction**: Visitors browse the landing page and fill out contact forms
2. **Form Submission**: Frontend validates data using Zod schemas and submits via React Query
3. **Backend Processing**: Express server validates data, stores contact requests, and triggers emails
4. **Email Notifications**: SendGrid sends notifications to company and auto-replies to users
5. **Response Handling**: Frontend displays success/error messages using toast notifications

## External Dependencies

### Email Service
- **SendGrid**: Transactional email service for contact form notifications
- **Configuration**: Requires `SENDGRID_API_KEY` environment variable
- **Features**: HTML/text email templates, auto-reply functionality

### Database (Optional)
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL
- **Neon Database**: Serverless PostgreSQL for production
- **Configuration**: Requires `DATABASE_URL` environment variable

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component collection

## Deployment Strategy

### Vercel Configuration
- **Build Command**: `npm run build` - Compiles both frontend and backend
- **Output Directory**: `dist/public` for static assets
- **API Routes**: Server functions deployed as Vercel functions
- **Rewrites**: API requests routed to serverless functions, static files served from CDN

### Environment Variables
- **SENDGRID_API_KEY**: Required for email functionality
- **DATABASE_URL**: Optional for persistent storage
- **NODE_ENV**: Automatically set by deployment platform

### Asset Management
- **Static Assets**: Images and SVGs in `attached_assets` directory
- **Build Optimization**: Vite handles asset optimization and bundling
- **CDN Distribution**: Vercel CDN for global asset delivery

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 28, 2025. Initial setup