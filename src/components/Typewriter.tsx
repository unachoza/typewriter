interface TypewriterProps {
    letters: string[];
  }

  const Typewriter = ({letters}: TypewriterProps): JSX.Element => {
    return (
        <>
            <h1>Typewriter</h1>
            <ul>
                {letters.map((letter, i) => (
                    <li key={i}>{letter}</li>
                ))}
            </ul>
        </>
    );
}

export default Typewriter;