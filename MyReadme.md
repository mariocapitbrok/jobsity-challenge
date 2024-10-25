# React Interview Challenge

## Development Process and Key Steps

### Cloned the Repository

I started by cloning the provided repository to get a local copy of the project and analyze its existing structure.

### Downgraded React Version

The project initially used React 21, which was incompatible with some existing dependencies. To ensure compatibility, I downgraded React to version 17, which is stable and widely supported.

### Removed Existing Node Modules Folder

To avoid any potential issues with mismatched or corrupted dependencies, I removed the existing node_modules folder before reinstalling the dependencies.

### Installed Dependencies

After cleaning up the node_modules, I installed all required dependencies using npm install, ensuring that the correct versions were being used.

### Fixed Existing Bugs

- Initial Errors: There were some existing errors in the project, as shown in initial-errors-screenshot.png. To resolve these issues, I worked through the error messages and updated the relevant files.

  - Update getStore.js: I specifically updated the getStore.js file to resolve state management-related issues that were causing the application to crash.

### Configured Prettier Settings

To maintain a consistent code style, I configured my Prettier settings to match the project's format. This helped ensure that all files were formatted correctly and compiled successfully without style-related errors.

### Fixed Property Types in Calendar Components

identified and fixed type-related issues with the properties passed from CalendarGrid to CalendarDay. Proper typing is crucial to prevent runtime errors and to ensure that the components function as intended.

### Debugged manifest.json

The manifest.json file contained issues that prevented the app from being properly recognized as a Progressive Web App (PWA). I debugged and corrected these issues to ensure the manifest was correctly configured.

### Accomplished Requirements

I successfully completed all of the requirements outlined in the original challenge.

- Adding Reminders: Implemented functionality to allow users to add reminders (up to 30 characters) for any day and time.

- Editing Reminders: Enabled the ability to edit reminders, allowing users to modify the reminder text, city, date, and time.

- Weather Integration: Integrated with the VisualCrossing API to retrieve the average temperature for a reminder's date and location, adding meaningful context to the reminders.

- Weekend Styling: Customized the weekend cells in the calendar by changing their color to visually differentiate them from weekdays.

- Video Walkthrough: Recorded a video demonstrating the complete functionality of the calendar, including adding, editing, and displaying reminders, as well as fetching weather data. This video also explains key decisions and the development process from scratch.

### Enhanced UI/UX Experience

Dynamic Reminder Visualization: In addition to implementing the core reminder functionality, I enhanced the UI for managing multiple reminders. When multiple reminders are set for the same date, they can be visually grouped and dynamically adjusted to avoid overflow. A "show more" button appears if the number of reminders exceeds the available space, allowing users to see all reminders without compromising calendar readability.
