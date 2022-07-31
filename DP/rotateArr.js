const head = {
  val: 1,
  next: null,
};

const createList = (arr) => {
  for (let num of arr) {
    const obj = {
      val: num,
    };
  }

  const reqFunc = (tail) => {};
};

var rotateRight = function (head, k) {
  console.log(head.next.next.next.next.next);

  const reqFunc = (head) => {
    if (head === null) return;

    let temp = head.next;
    head.next = temp;
    reqFunc(temp);
  };

  for (let i = 0; i < k; i++) {
    reqFunc(head);
  }

  return head;
};
