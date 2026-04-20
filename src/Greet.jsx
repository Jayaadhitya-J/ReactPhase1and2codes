let isLoggedIn = true;

function Greet({ name, age }) {
  function toggle() {
    isLoggedIn = !isLoggedIn;
    console.log(isLoggedIn); // changes, but UI won't update
  }

  return (
    <>
      <button onClick={toggle}>Toggle</button>

      {isLoggedIn ? (
        <h1>Hello {name}, you are {age} years old</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </>
  );
}

export default Greet;