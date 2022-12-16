import { Picker } from "@react-native-picker/picker";
import React from "react";

const orderByOptions = [
  {
    label: "Latest repositories",
    value: "latest",
  },
  {
    label: "Highest rated repositories",
    value: "highRating",
  },
  {
    label: "Lowest rated repositories",
    value: "lowRating",
  },
];

const SortingPicker = ({ selectedValue, onChange }) => {
  return (
    <Picker
      prompt="Select an item..."
      selectedValue={selectedValue}
      onValueChange={onChange}
    >
      {orderByOptions.map((option) => (
        <Picker.Item
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </Picker>
  );
};

export default SortingPicker;
