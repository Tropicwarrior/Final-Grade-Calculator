export default function App() {
  const [dGrade, setdGrade] = React.useState([
    function GradeList({ dGrade }) {
      return (
        <ul>
          {" "}
          {grade.map((dGrade) => (
            <li key={dGrade.id}>{dGrade.text}</li>
          ))}
        </ul>
      );
    },
    function AdddGrade({ setdGrade }) {
      const inputRef = React.useRef();

      function handleAdddGrade(event) {
        event.preventDefault();
        const text = event.target.elements.adddGrade.value;
        const dGrade = {
          id: 4,
          text,
          done: false,
        };
        setGrade((prevdGrade) => {
          return prevDgrade.concat(dGrade);
        });
      }
      return (
        <form onSubmit={handleAddDgrade}>
          <input name="addDgrade" placeholder="Add dGrade" ref={inputRef} />
          <button type="submit"> submit</button>
        </form>
      );
    },
  ]);
}
