# Job Listing Application

## Overview

This application is a job listing platform that allows users to sign up, verify their email, and log in to access job listings. The application is built using [Next.js](https://nextjs.org/) and [NextAuth.js](https://next-auth.js.org/) for authentication.

## Features

- **Sign Up**: Users can create a new account by providing their name, email, and password.
- **Email Verification**: Upon signing up, users receive an email verification link. They must verify their email address to activate their account.
- **Login**: After verifying their email, users can log in to their account.
- **Job Listings**: Authenticated users can access job listings.
- **Google OAuth**: Users can sign up or log in using their Google account.

## Tech Stack

- **Frontend**: React.js (with Next.js)
- **Backend**: Next.js API routes
- **Authentication**: NextAuth.js (including Google OAuth)
- **Styling**: Tailwind CSS
- **Cookies**: js-cookie for managing authentication tokens

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or later)
- npm or yarn

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Miheret-Girmachew/next_auth.git
```

```bash

npm install
```

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

EMAIL_SERVER=smtp://username:password@smtp.server.com
EMAIL_FROM=your-email@example.com
```

```bash
npm run dev
```
![pagevi](https://github.com/user-attachments/assets/458568c0-8928-41c7-89b4-978122047b7d)
![pagevii](https://github.com/user-attachments/assets/0b3827e9-a634-4a15-8d87-9ce7b1a9fe13)
![pagei](https://github.com/user-attachments/assets/9a8ead0e-e952-4df7-9a86-92e8ab67fd0c)
![pageii](https://github.com/user-attachments/assets/2ce4ab8e-9830-4ad7-b956-716d5ddb3b9a)
![pageiii](https://github.com/user-attachments/assets/036849a6-0cc9-4b29-ab08-94ebdd3f718f)
![pageiv](https://github.com/user-attachments/assets/b49f9473-f4a3-47aa-accb-b3237323678e)
![pagev](https://github.com/user-attachments/assets/119c8a6a-1467-49a7-9aef-e6961174cd76)

