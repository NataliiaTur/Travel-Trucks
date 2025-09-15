# 🚐 TravelTrucks

TravelTrucks is a modern web application for searching and renting camper vans. The platform allows users to easily find the perfect motorhome for their travels with detailed filtering and a convenient booking system.

## 🌟 Key Features

- **🔍 Advanced Search** - Filter by location, body type, and equipment
- **📋 Detailed Cards** - Complete information about each camper with photo gallery
- **⭐ Reviews System** - Real user reviews with ratings
- **❤️ Favorites List** - Save favorite campers (persists on page reload)
- **📅 Date Range Booking** - Select check-in and check-out dates with calendar
- **📱 Responsive Design** - Optimized for desktop devices
- **🚀 Fast Loading** - Pagination with "Load More" functionality
- **📝 Booking Form** - Simple and convenient reservation process
- **🔄 404 Error Handling** - Custom 404 page with auto-redirect
- **💾 Data Persistence** - Favorites and filters saved in localStorage

## 🛠️ Technologies

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **State Management:** Redux Toolkit with Redux Persist
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Date Picker:** react-day-picker
- **Styling:** CSS Modules
- **Icons:** Custom SVG sprite
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js (version 20.19.0 or newer)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Nataliiatur/travel-trucks.git
cd travel-trucks
```

2. Install dependencies:
   npm install

3. Create environment file:
   cp .env.example .env

4. Add your API URL to .env:
   VITE_API_BASE_URL=your_api_url_here

5. Start development server:
   npm run dev

6. Open browser:
   http://localhost:5173

Key Features
Filtering Options

Location: Search by city or region
Body Type: Van, Fully Integrated, Alcove
Equipment: AC, kitchen, bathroom, TV, and more

Camper Characteristics

Basic: transmission, engine, AC, bathroom, kitchen, TV, radio
Additional: refrigerator, microwave, gas, water
Details: form, length, width, height, tank, consumption

Booking System

Date Range Selection: Interactive calendar with range picking
Form Validation: Real-time field validation
Booking Confirmation: Complete booking data submission

Navigation

Home: Landing page with hero section
Catalog: Browse all available campers
Favorites: View saved favorite campers
404 Page: Custom error page with auto-redirect

📊 API Integration
The project uses MockAPI for data management:

Base URL: Configured via environment variables
Endpoints: /campers, /campers/:id

🔄 State Management

Redux Toolkit: Centralized state management
Redux Persist: Automatic persistence for favorites and filters
Selectors: Optimized data retrieval

Deployment
Build for production
npm run build

Deploy to Vercel
npm run deploy:vercel

Known Behavior

Filtering is performed server-side for optimal performance
Favorite campers are stored in localStorage
Pagination implemented via "Load More" button
Date validation prevents past date selection
Calendar auto-closes after range selection

👤 Author
Nataliia Tur

GitHub: @NataliiaTur
Email: turnatval@gmail.com
