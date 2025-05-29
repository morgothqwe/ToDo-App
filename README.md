# Todo List Application

A simple, elegant Todo List application built with vanilla JavaScript, HTML, and CSS. This app allows users to add, delete, and mark tasks as completed, with persistent storage using the browser's `localStorage`. The project follows an MVC (Model-View-Controller) architecture for maintainability and scalability.

## Features

- **Add Tasks**: Create new tasks with a minimum of 3 characters.
- **Delete Tasks**: Remove tasks with a single click.
- **Mark Tasks as Completed**: Toggle task completion with a checkbox, visually indicated by a strikethrough.
- **Persistent Storage**: Tasks are saved to `localStorage` and persist across page reloads.
- **Responsive Design**: Clean, modern UI with a dark theme, styled using CSS custom properties.
- **Event Delegation**: Efficient event handling for task interactions.
- **Input Validation**: Prevents adding empty or short tasks.

## Demo

Try the live demo at: [https://todo-app-keiwan.netlify.app/](https://todo-app-keiwan.netlify.app/)

## Installation

To run the application locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Open the Application**:

   - Open `index.html` in a web browser (e.g., Chrome, Firefox) directly, as no server is required.
   - Alternatively, use a local development server (e.g., with VS Code's Live Server extension or `npx http-server`).

3. **Dependencies**:
   - The app uses [Phosphor Icons](https://unpkg.com/phosphor-icons) for icons, loaded via CDN.
   - No additional installations are required.

## Usage

1. **Add a Task**:

   - Enter a task in the input field (minimum 3 characters).
   - Click the "+" button to add the task to the list.

2. **Mark as Completed**:

   - Click the checkbox next to a task to toggle its completion status (strikethrough indicates completed).

3. **Delete a Task**:

   - Click the "X" icon next to a task to remove it.

4. **Persistence**:
   - Tasks are automatically saved to `localStorage` and loaded on page refresh.

## File Structure

```
your-repo-name/
├── index.html        # Main HTML file with app structure
├── main.css          # Stylesheet with reset, variables, and layout
├── model.js          # Data layer (state management and localStorage)
├── view.js           # View layer (DOM manipulation and event handling)
├── controller.js     # Controller layer (connects model and view)
└── README.md         # Project documentation
```

### File Descriptions

- **index.html**: Defines the app’s structure, including input form and task list container.
- **main.css**: Contains CSS styles with custom properties for theming and responsive layout.
- **model.js**: Manages task data (add, delete, complete) and handles `localStorage`.
- **view.js**: Handles DOM rendering and event listeners for user interactions.
- **controller.js**: Coordinates between model and view, initializing the app and handling events.

## Code Highlights

- **MVC Architecture**: Separates concerns for better maintainability.
- **Event Delegation**: Uses a single event listener for delete and complete actions, improving performance.
- **Local Storage**: Persists tasks across sessions using `localStorage`.
- **Input Validation**: Ensures tasks meet minimum length requirements.
- **Commented Code**: Each file includes detailed comments for easy understanding and maintenance.

## Testing

- **Live Demo**: Visit [https://todo-app-keiwan.netlify.app/](https://todo-app-keiwan.netlify.app/) to test the app.
- **Local Testing**:
  - Add tasks, mark some as completed, and refresh to verify persistence.
  - Test invalid inputs (e.g., <3 characters) to ensure validation works.
  - Check console for errors if DOM elements are missing.
- **Accessibility**: Test with a screen reader to ensure usability.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and includes comments for clarity.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Phosphor Icons](https://phosphoricons.com/) for the icon set.
- Inspired by modern todo list applications with a focus on simplicity and performance.

```

```
