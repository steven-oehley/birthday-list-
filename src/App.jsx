import BirthdayList from "./components/BirthdayList";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto p-1">
      <h1 className="text-2xl font-bold text-center mt-2 mb-8">
        Birthday Reminder
      </h1>
      <BirthdayList />
    </div>
  );
};

export default App;
