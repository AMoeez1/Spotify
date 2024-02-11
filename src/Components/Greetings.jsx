
function Greetings() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  }else if (hours >= 17 && hours < 20) {
    timeOfDay = 'Evening';} 
  else {
    timeOfDay = 'night';
    // styles.color = "#04756F";
  }

  return (
    <h1 className="mt-16 font-bold text-start text-3xl text-gray"> Good {timeOfDay}!</h1>
  )
}

export default Greetings