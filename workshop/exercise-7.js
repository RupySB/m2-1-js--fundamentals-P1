// Q7
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

for (let time = 0; time < 24; time++) {
  let job = "train";
  if (time > 21 || time < 6) {
    job = "sleep";
  }
  if (time === 7) {
    job = "eat";
  } else if (time === 13) {
    job = "eat";
  } else if (time === 18) {
    job = "eat";
  }
  console.log(`${time} You need to  ${job}`);
}
