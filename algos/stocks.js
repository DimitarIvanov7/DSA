const test = [7, 1, 5, 3, 6, 4];

const test2 = [1, 4, 2];

const test3 = [2, 1, 4];

const getPrice = (arr) => {
  let f = 0;

  let l = arr.length - 1;

  let best_buy = Infinity;

  let best_sell = 0;

  while (f <= l) {
    console.log("f: " + f + " | l: " + l);
    if (arr[f] < arr[l]) {
      best_buy = Math.min(arr[f], best_buy);
      best_sell = Math.max(arr[l], best_sell);
      f++;
    } else {
      l--;
    }

    // if (arr[f] <= best_buy) {
    //   best_buy = arr[f];
    //   l--;
    // } else if (arr[l] >= best_sell) {
    //   best_sell = arr[l];
    //   f++;
    // } else if (arr[f] > best_buy) {
    //   f++;
    // } else if (arr[l] < best_sell) {
    //   l--;
    // }
  }

  return best_sell - best_buy === -Infinity ? 0 : best_sell - best_buy;
};

const secondTry = (arr) => {
  let max = 0;
  let diff = 0;
  let buy = arr[0];
  let sell;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < buy) buy = arr[i];

    sell = arr[i + 1];

    diff = sell - buy;

    if (diff > max) max = diff;
  }

  return max;
};

// const data = getPrice(test3);

const data = secondTry(test3);

console.log(data);
