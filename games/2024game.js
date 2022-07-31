import readline from "readline";

const game = [
  [2, 0, 2, 0],
  [0, 0, 0, 0],
  [2, 2, 2, 2],
  [2, 0, 0, 0],
];

const move = (dir) => {
  for (let i = 0; i < game.length; i++) {
    if (dir === "left") {
      let newArr = [];

      for (let j = 0; j < game.length; j++) {
        if (game[i][j] != 0) {
          newArr.push(game[i][j]);
        }
      }

      while (newArr.length != game.length) {
        newArr.unshift(0);
      }

      for (let j = game.length-1; j <= 0; j--) {
        if (newArr[j] === newArr[j + 1]) {
          newArr[j + 1] += newArr[j];
          newArr[j] = 0;
        }
      }

      game[i] = newArr;
    }

    //   if (dir === "right") {
    //     if (game[i][j - 1] === game[i][j]) {
    //       game[i][j - 1] += game[i][j];
    //       game[i][j] = 0;
    //     }

    //     for (let j = 0; j < game.length - 1; j++) {
    //       if (game[i][j - 1] === 0) {
    //         game[i][j - 1] = game[i][j];
    //         game[i][j] = 0;
    //       }
    //     }
    //   }

    //   if (dir === "down") {
    //     if (game[j + 1][i] === game[j][i]) {
    //       game[j + 1][i] += game[j][i];
    //       game[j][i] = 0;
    //     }

    //     for (let j = 0; j < game.length - 1; j++) {
    //       if (game[j + 1][i] === 0) {
    //         game[j + 1][i] = game[j][i];
    //         game[j][i] = 0;
    //       }
    //     }
    //   }

    //   if (dir === "up") {
    //     if (game[j - 1][i] === game[j][i]) {
    //       game[j - 1][i] += game[j][i];
    //       game[j][i] = 0;
    //     }

    //     for (let j = 1; j < game.length - 1; j++) {
    //       if (game[j - 1][i] === 0) {
    //         game[j - 1][i] = game[j][i];
    //         game[j][i] = 0;
    //       }
    //     }
    //   }
    // }
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (ans) => {
  if (ans == "end") {
    console.log("end");
    rl.close();
  }

  move(ans);
  console.log(game);
  quest();
};

const quest = () =>
  rl.question("Choose direction: ", (ans) => {
    askQuestion(ans);
  });

quest();
