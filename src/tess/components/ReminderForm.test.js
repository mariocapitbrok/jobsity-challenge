import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReminderForm from "components/ReminderForm";

// Mock props
const mockOnSave = jest.fn();
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

// Helper function to render the ReminderForm component
const renderReminderForm = (props = {}) => {
  return render(
    <ReminderForm
      onSave={mockOnSave}
      day={day}
      month={month}
      year={year}
      {...props}
    />
  );
};

describe("ReminderForm", () => {
  beforeEach(() => {
    mockOnSave.mockClear();
  });

  it("should add a new reminder when valid data is submitted", () => {
    renderReminderForm();

    // Set reminder text within the character limit
    const reminderTextInput = screen.getByPlaceholderText(
      "Reminder text (max 30 chars)"
    );
    fireEvent.change(reminderTextInput, {
      target: { value: "Buy groceries" },
    });

    // Click the save button
    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    // Expect onSave to be called with the correct reminder details
    expect(mockOnSave).toHaveBeenCalledTimes(1);

    // Get the arguments from the mockOnSave call
    const callArgs = mockOnSave.mock.calls[0][0];

    // Assert the properties of the reminder object
    expect(callArgs).toEqual({
      text: "Buy groceries",
      city: {
        name: "London,UK",
        tempForecast: "21.5° C",
      },
      datetime: expect.any(String), // Since datetime is dynamic, we use expect.any(String)
      id: expect.any(Number), // The id is dynamic, so we use expect.any(Number)
    });
  });

  it("should show an error message if reminder text exceeds 30 characters", () => {
    renderReminderForm();

    // Set reminder text that exceeds 30 characters
    const reminderTextInput = screen.getByPlaceholderText(
      "Reminder text (max 30 chars)"
    );
    fireEvent.change(reminderTextInput, {
      target: { value: "This reminder text is way too long to be accepted" },
    });

    // Click the save button
    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    // Expect error message to be displayed
    expect(
      screen.getByText("Reminder must be 30 characters or less.")
    ).toBeInTheDocument();
    expect(mockOnSave).not.toHaveBeenCalled();
  });
});
