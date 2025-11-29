
### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/giakharabadze/balloon-adventure.git
cd balloon-adventure
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Technologies Used

- **PixiJS** - 2D WebGL renderer for creating interactive graphics
- **Vite** - Fast build tool and development server
- **@pixi/sound** - Audio management for game sounds

## 📁 Project Structure

```
balloon-adventure/
├── public/              # Static assets (images, sounds)
│   ├── balloon.png
│   ├── cloud.png
│   └── *.mp3           # Audio files
├── src/
│   ├── animations/     # Animation logic
│   ├── objects/        # Game object creation
│   ├── scenes/         # Game scenes (start, game, finish, lose)
│   ├── sounds/         # Audio management
│   ├── ui/             # UI components
│   ├── utils/          # Utility functions
│   ├── main.js         # Entry point
│   └── style.css       # Styles
├── index.html
└── package.json
```

## 🎯 Features

- ✨ Smooth balloon and cloud animations
- 🎵 Immersive sound effects (wind, balloon sound, explosion)
- 📊 Score tracking system
- 🎨 Beautiful sky-blue background
- 🎮 Multiple game scenes (start, game, finish, lose)
- 📱 Responsive design

## 🎨 Game Mechanics

- Balloon automatically moves and animates
- Clouds spawn and move across the screen
- Collision detection between balloon and clouds
- Landing animation when "Land" button is pressed
- Score increases over time during gameplay

## 📝 License

This project is private and not licensed for public use.

## 👤 Author

**giakharabadze**

- GitHub: [@giakharabadze](https://github.com/giakharabadze)

## 🙏 Acknowledgments

- Built with PixiJS for high-performance 2D graphics
- Powered by Vite for fast development experience

---

Enjoy playing Balloon Adventure! 🎈✨

