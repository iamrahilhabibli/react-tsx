// PascalCasing for react application for function component
function Message() {
  // Syntax below is JSX: JavaScript XLM
  const name = "Rahil";
  //   const name = "";  /* Toggle between name string empty and with name to see effect of dynamic use of  variables*/
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello World</h1>;
}

export default Message;
