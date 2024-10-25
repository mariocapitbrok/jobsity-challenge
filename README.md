<div align="center">
    <img src="https://media.licdn.com/dms/image/D4E0BAQETyObSEmZH-A/company-logo_200_200/0/1693956448491/jobsity_llc_logo?e=1723075200&v=beta&t=rGq4fY1cprFyIaSabim0_bgb-QLCbJUk6Es9dXuua1w"/>
</div>

# React Interview Challenge

## Description

This project is designed to test your knowledge of front-end web technologies and assess your ability to create front-end UI products with attention to detail, cross-browser compatibility, standards, and reusability.

## Assignment

The goal of this exercise is to create a demo calendar application using React.

You are provided a base application with a calendar page at `/calendar`. You must allow the user to create "reminder" cards, as described in the Mandatory features section.
![CalendarJobsity](/uploads/57147905a7a9cc1e0cf46e7886c76ef7/CalendarJobsity.png)

## Mandatory features

- Ability to add "_reminders_" (max. 30 characters) for a day and time specified by the user.
- Ability to include a city as a location for the reminder.
- Ability to edit reminders - including changing text, city, day, and time.
- Add a weather service call from [VisualCrossing](https://www.visualcrossing.com/weather/weather-data-services#) and get the average temperature forecast (e.g. 15° C) for the date of the calendar reminder based on the city.
- Change the weekend days cells' color
- You will need to **record a video explaining the code** you created, the decisions you made, its functionality, and demonstrating the complete operation of the challenge. _Remember to show the execution from scratch, it should not be running beforehand._

## Bonus (Optional)

- Properly handle overflow when multiple reminders appear on the same date.
- Unit test the functionality: *Ability to add "*reminders*" (max. 30 characters) for a day and time specified by the user.*

## Considerations

- Show us in the Readme all relevant information about your project.
- The project is completely focused on Front-end. Ignore the Back-end.
- Feel free to use small helper libraries for:
  -- UI Elements.
  -- Date/Time handling.
- We have implemented Redux thunk for state management, but you may use any state manager you are familiar with.
- Show us your capabilities in CSS and styling, if possible.
- Feel free to use Typescript if you prefer it

## How to deploy

- Run `npm install` | `yarn install` to install all dependencies.
- Run `npm start` | `yarn run` to run the app locally.
- You can find the project running on `localhost:3000`.

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
