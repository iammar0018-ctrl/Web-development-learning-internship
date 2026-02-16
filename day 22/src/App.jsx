import Header from "./components/Header";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <Header title="Student Information" />

      <UserCard name="Ammar" age="21" country="Pakistan" />
      <UserCard name="Ahmad" age="22" country="Afghanistan" />
    </div>
  );
}

export default App;
