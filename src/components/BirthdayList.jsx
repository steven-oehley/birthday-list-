import { useState } from "react";

import { data } from "../assets/data";
import BirthdayItem from "./BirthdayItem";

const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState(data);

  const handleRemoveBirthday = (id) => {
    setBirthdays((prevBirthdays) =>
      prevBirthdays.filter((birthday) => birthday.id !== id)
    );
  };

  return (
    <div className="p-4 ring-2 ring-secondary rounded-md bg-secondary">
      {birthdays.length > 0 ? (
        birthdays.map((birthday) => (
          <BirthdayItem
            key={birthday.id}
            {...birthday}
            onClose={handleRemoveBirthday}
          />
        ))
      ) : (
        <p className="text-3xl text-center">No birthdays to show</p>
      )}

      <button
        aria-label="Remove birthday"
        className="btn btn-warning btn-block mt-4"
        onClick={() => setBirthdays([])}
      >
        Clear List
      </button>
    </div>
  );
};
export default BirthdayList;
