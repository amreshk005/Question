// degree of profanity
const profanityLevel = {
  bad: 2,
  abusing: 1,
  insulted: 1,
};

// List of Tweets
const tweets = ["Hey amresh you are bad man", "Hey amresh you have insulted me", "Hey amresh you are abusing me"];

tweets.forEach((e) => {
  let splited = e.split(" ");

  splited.forEach((item) => {
    if (profanityLevel[item] !== undefined) {
      console.log(profanityLevel[item]);
    }
  });
});
