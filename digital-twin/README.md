📌 Overview

This project is a Digital Twin representing my professional identity, academic achievements , and career trajectory. It utilizes a RAG (Retrieval-Augmented Generation) pipeline to provide an interactive, AI-driven interface for recruiters and collaborators to explore my background in real-time.

This twin is part of the shared Ausbiz Data Analytics Internship Project and demonstrates advanced software engineering practices, including vector search and secure API integration.

🧠 What is a Digital Twin?

In the context of this internship:
The Real-World System: My professional history, including roles at Old Quarter Cafe and volunteer work at Sai Gon Children's Charity.
The Digital Twin: A Next.js-based web application with a memory bank (Vector Database).
The Interaction: A chatbot that "retrieves" facts from my career data to answer specific inquiries accurately.

🚀 Features

Intelligent RAG Pipeline: Uses vector embeddings to ensure responses are grounded in my actual CV data.
Agentic AI Interface: Powered by Groq/OpenAI to handle complex professional queries.
Multi-Database Architecture: Combines structured data (Neon Postgres) with semantic data (Upstash Vector).
Interactive UI: A modern, responsive portfolio interface bootstrapped with v0.

🛠 Tech Stack
TechnologyPurpose
Next.js (v0)               Frontend UI and project structure 
Upstash Vector             Semantic search and memory (1536-dimension index)
Neon PostgreSQL            Structured storage for profile metadata 
Groq / OpenAI              LLM inference and text embeddings
Tailwind CSS               Styling and responsive design

📁 Project Structure
digital-twin/
├── app/              # Core application logic and pages
├── components/       # Reusable UI components (Chatbot, Experience cards)
├── hooks/            # Custom React hooks for data fetching
├── lib/              # Utility functions and database clients
├── .env              # Local environment variables (NOT committed to GitHub)
└── README.md         # Professional documentation

▶️ How to Run
Clone the Shared Repo:

git clone https://github.com/donalddemaala16-ctrl/data-analytics-internship-project.git

Navigate to the folder:

cd digital-twin

Install Dependencies:

npm install

Configure Environment Variables:

Create a .env file and add your UPSTASH, NEON, and OPENAI credentials.

Run Locally:

npm run dev

🧪 How It Works (The Pipeline)

Data Ingestion: Professional data is chunked and turned into 1536-dimension vectors.

Vector Search: When a user asks a question, the system queries Upstash to find relevant "chunks" of my history.

Context Injection: The retrieved data is injected into a prompt for the LLM.

Inference: The LLM generates a professional response based only on the retrieved context.


⚠️ Security & Privacy (Compliance with Rule 6)

Personal career data (JSON/PDF) is not stored in this repository (submitted separately via LMS).

All API keys and database URLs are managed via .env and secured with .gitignore.