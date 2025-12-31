# Hairbnb - Airbnb Clone

A full-stack Airbnb clone application built with React, Redux, and Vite. This project features property listings, booking system, user authentication, host dashboard, and real-time updates.

## Features

- 🏠 **Property Listings** - Browse and search stays with filters and labels
- 📅 **Booking System** - Reserve stays with date picker and guest selection
- 👤 **User Authentication** - Login/signup functionality
- 🎯 **Advanced Search** - Filter by location, dates, guests, and amenities
- 📊 **Host Dashboard** - View bookings, performance metrics, and income analytics
- 💝 **Wishlist** - Save favorite properties
- ⭐ **Reviews & Ratings** - View and manage stay reviews
- 🗺️ **Interactive Maps** - Google Maps integration for property locations
- 📱 **Responsive Design** - Mobile and desktop optimized layouts
- 🔔 **Real-time Updates** - Socket.io integration for live notifications
- 📸 **Image Upload** - Cloudinary integration for image management

## Tech Stack

### Frontend
- **React 18** - UI library
- **Redux** - State management
- **React Router v6** - Routing
- **Vite** - Build tool and dev server
- **SCSS** - Styling

### Key Libraries
- **Material-UI** - Component library
- **React Date Range** - Date picker component
- **Google Maps React** - Map integration
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **Formik** - Form management
- **React Hot Toast** - Notifications
- **Swiper** - Image carousel

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sprint4-hairbnb-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── assets/          # Static assets (fonts, images, styles)
├── cmps/            # Reusable components
├── customHooks/     # Custom React hooks
├── pages/           # Page components
├── services/        # API and utility services
└── store/           # Redux store, actions, and reducers
```

## Key Pages

- **StayIndex** - Main page with stay listings
- **StayDetails** - Individual stay details and booking
- **StayEdit** - Create/edit property listings (host)
- **Dashboard** - Host dashboard with analytics
- **UserOrder** - User booking management
- **UserWishList** - Saved properties

## Services

- **stay.service.js** - Property management
- **order.service.js** - Booking management
- **user.service.js** - User authentication
- **socket.service.js** - Real-time updates
- **cloudinary-service.js** - Image uploads
- **http.service.js** - HTTP client wrapper

## Features in Detail

### Search & Filters
- Location-based search with region options
- Date range selection
- Guest count (adults, children, infants, pets)
- Amenity filters
- Property type labels

### Booking Flow
1. Select dates and guests
2. View pricing breakdown
3. Confirm reservation
4. Receive real-time booking confirmation

### Host Features
- Property listing management
- Booking requests dashboard
- Income analytics by month
- Performance metrics
- Order status management

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is for educational purposes.
