# 🏎️ F1 React - 2025 Driver Championship

This project is a web application built with **React**, **TypeScript**, and **Vite** that allows users to explore information about the 2025 F1 Driver Championship, purchase merchandise, and more.

## 🚀 Features

- **Animated Landing Page**: A homepage with smooth animations using **Framer Motion**.
- **Driver Championship**: View the driver standings table with an interactive search bar.
- **Detail Modal**: Click on a driver to see more information in a modal.
- **Merchandise Store**: Purchase merchandise with a functional shopping cart.
- **Notifications**: Visual notifications using **React Toastify**.
- **Smooth Transitions**: Page navigation with smooth animations.

## 🛠️ Technologies Used

- **React** + **TypeScript**
- **Vite**: For fast and efficient development.
- **Tailwind CSS**: For modern and responsive styling.
- **Framer Motion**: For fluid animations.
- **React Toastify**: For notifications.
- **React Router**: For page navigation.

## 📦 Installation

Follow these steps to run the project locally:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/f1-react.git
   cd f1-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

## 📂 Project Structure

```
f1-react/
├── src/
│   ├── components/       # Reusable components (DriverModal, etc.)
│   ├── data/             # Mock data (drivers, products, etc.)
│   ├── layouts/          # Main layout
│   ├── views/            # Main pages (LandingPage, ChampionshipPage, etc.)
│   ├── router.tsx        # Route configuration
│   ├── main.tsx          # Main entry point
│   └── index.css         # Global styles
├── public/               # Public assets (images, etc.)
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

## 🌟 Key Features

### 1. **Landing Page**

- Smooth animations with **Framer Motion**.
- Interactive navigation with links to different sections.

### 2. **HomePage**

- Displays an overview of the F1 2025 season.
- Highlights the **next race** with details like name, date, and location.
- Shows the **Top 10 Drivers** with their names, teams, points, and photos.
- Includes links to explore full standings, merchandise, and contact options.
- Modal functionality to display detailed driver information.

### 3. **Driver Championship**

- Interactive table with positions, teams, and points.
- Search bar to filter drivers.

### 4. **Merchandise Store**

- Product list with images, prices, and an "Add to Cart" button.
- Functional shopping cart with the ability to remove items.
- Notifications when adding products to the cart.

### 5. **Smooth Transitions**

- Page-to-page animations using **Framer Motion** and `AnimatePresence`.

## 🖼️ Screenshots

### Landing Page

![Landing Page](https://via.placeholder.com/800x400?text=Landing+Page)

### HomePage

![HomePage](https://via.placeholder.com/800x400?text=HomePage)

### Driver Standings Table

![Driver Standings Table](https://via.placeholder.com/800x400?text=Driver+Standings+Table)

### Merchandise Store

![Merchandise Store](https://via.placeholder.com/800x400?text=Merchandise+Store)

## 🧠 What I Learned

Working on this project allowed me to strengthen my skills in modern web development. Here are some key takeaways:

1. **React with TypeScript**:

   - Leveraged TypeScript to ensure type safety and improve code maintainability.
   - Created reusable and strongly-typed components like `DriverModal` and `StorePage`.

2. **State Management**:

   - Managed complex states such as the shopping cart and search functionality using React's `useState` hook.

3. **Animations with Framer Motion**:

   - Implemented smooth animations for page transitions and interactive elements, enhancing the user experience.

4. **Responsive Design with Tailwind CSS**:

   - Built a fully responsive UI that adapts seamlessly to different screen sizes.

5. **Routing and Navigation**:

   - Used `React Router` to create a multi-page application with smooth transitions between pages.

6. **Notifications with React Toastify**:

   - Added user-friendly notifications for actions like adding items to the cart.

7. **Performance Optimization**:
   - Utilized **Vite** for fast development and optimized builds.

This project not only improved my technical skills but also taught me how to create a polished and user-friendly application from start to finish.

## 🧑‍💻 Development

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build.

### Key Dependencies

- **React**: Library for building user interfaces.
- **TypeScript**: Static typing for JavaScript.
- **Vite**: Fast development tool.
- **Tailwind CSS**: CSS framework for styling.
- **Framer Motion**: Advanced animations.
- **React Toastify**: Visual notifications.

## 🤝 Contributions

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Thank you for checking out this project! If you have any questions or suggestions, feel free to open an issue or contact me. 😊
