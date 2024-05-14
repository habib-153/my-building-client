## Introduction

Welcome to the My Building! This website is designed to help the owners to manage their buildings from the comfort of their own home. With various features such as displaying apartments, handling agreements, managing payments, announcing updates, and more, this website aims to streamline the management process.

### Want to visit? here are the [Live Link](https://a-12-my-building.web.app) and some credentials.

### Credentials for several Roles:
- **User :**
    - **Email :** user@gmail.com
    - **Password :** User@123
- **Doctor :**
    - **Email :** member@gmail.com
    - **Password :** Member@123
- **Admin :**
    - **Email :** admin@gmail.com
    - **Password :** Admin@123

## Objective

The main goal of this project is to create a fully functional, responsive, and easy-to-navigate website for building management. By implementing modern technologies and best practices, we aim to deliver a seamless experience for both the owner and the residents..

## Features
- **Secure User Auth System:** Utilizes Firebase for multi-method registration.
- **Role-based Access Control:** Distinct privileges for user, member, and Admin roles.
- **Responsive Design:** A sleek and adaptive layout optimized for mobile, tablet, and desktop viewing.
- **Payment Processing:** Employs Stripe for convenient and protected online transactions.
- **Data Fetching:** Uses TanStack Query exclusively for efficient and organized data retrieval through GET methods.
- **Role-Based Access Control:** Streamlined interfaces catering specifically to Owner, Member, and Administrator needs.
- **Simplified Agreements:**Effortlessly track and record binding contracts directly on the platform.
- **Centralized Dashboard:** Simultaneously view current leasing details and important announcements.
- **Adjustable Permissions:** Modify access levels assigned to specific accounts when required.

## Technology:

- **React.js:**  Versatile and widely adopted JavaScript library for constructing user interfaces.
- **TanStack Query v5:** TanStack Query v5 is a powerful data fetching library that simplifies complex data fetching logic in React applications.
- **Stripe:** Stripe is a secure and flexible payment processing platform, ensuring seamless and reliable transactions.
- **Authentication:** Firebase Authentication provides simple yet secure authentication services
- **Swiper.js::** Lightweight, feature-rich library for creating animated slideshow interfaces.
- **Jwt**
- **ExpressJs**: It is used for server side.
- **Tailwind CSS**
- **MongoDB**

## Environment Variables:

- **VITE_APIKEY:** Firebase API key for authentication and accessing Firebase services. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_AUTHDOMAIN:** Firebase authentication domain. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_PROJECTID:** Firebase project ID. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_STORAGEBUCKET:** Firebase storage bucket for storing user-generated content. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_MESSAGINGSENDERID:** Firebase messaging sender ID for sending notifications. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_APPID:** Firebase application ID. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_GOOGLE_APIKEY:** Api key for google map.
- **VITE_PAYMENT_GATEWAY_PK:** Api key for Stripe Payment.
- **VITE_IMAGE_HOSTING_KEY:** This is used on registration page for uploading image , taken from imagebb (obtain from Firebase console: [imgbb api](https://api.imgbb.com/))


<!-- ### **To run run locally you also need to [clone](https://github.com/TeamTechTitans/VirtualDoc-Backend) the server repository.** -->

## Instructions:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/habib-153/my-building-client.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd my-building-client
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env.local` file:**

   - Create a `.env.local` file in the root directory of your project.
   - Copy the required environment variables from the provided `.env.example` file.

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **View the app:**

   - Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.

That's it! You've successfully set up and run the app locally.

Server Repo: [Server Repo](https://github.com/habib-153/my-building-server)
