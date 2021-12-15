const writeCards = (names, eventName) => {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(
      `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return messages;
}

const countDown = (num) => {
  let counter = num;
  while (counter >= 0) {
    console.log(counter);
    counter--;
  }
}

countDown(10);
