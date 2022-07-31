class binaryNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class binaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(node) {
    if (this.root === null) this.root = node;
    else this.add(this.root, node);
  }

  add(node, newNode) {
    if (node.val < newNode.val) {
      if (node.right === null) node.right = newNode;
      else this.add(node.right, newNode);
    } else {
      if (node.left === null) node.left = newNode;
      else this.add(node.left, newNode);
    }
  }

  getHeight() {
    return this.height(this.root);
  }

  height(root) {
    if (root == null) return 0;
    else {
      /* compute height of each subtree */
      let lheight = this.height(root.left);
      let rheight = this.height(root.right);
      /* use the larger one */
      if (lheight > rheight) return lheight + 1;
      else return rheight + 1;
    }
  }

  printLevelOrder() {
    var h = this.getHeight();
    var i;
    for (i = 1; i <= h; i++) this.printCurrentLevel(this.root, i);
  }

  printCurrentLevel(root, level) {
    if (root == null) return;
    if (level == 1) console.log(root.val + " ");
    else if (level > 1) {
      this.printCurrentLevel(root.left, level - 1);
      this.printCurrentLevel(root.right, level - 1);
    }
  }

  trav = {
    dfs: () => this.traverse(this.root),
    bfs: () => this.travBFS(this.root),
  };

  traverse(root) {
    if (!root) return;
    this.traverse(root.left);
    this.traverse(root.right);
  }

  get(target) {
    return this.search(this.root, target);
  }

  search(root, key) {
    // Base Cases: root is null
    // or key is present at root
    if (root == null || root.val == key) return root;

    // Key is greater than root's key
    if (root.val < key) return this.search(root.right, key);

    // Key is smaller than root's key
    return this.search(root.left, key);
  }

  travBFS(root, data = []) {
    if (root == null) return;
    data.push([
      root.left ? root.left.val : null,
      root.right ? root.right.val : null,
    ]);
    this.travBFS(root.left, data);
    this.travBFS(root.right, data);
    return data;
  }

  invert() {
    this.inv(this.root);
  }

  inv(root) {
    if (root == null) return;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    this.inv(root.left);
    this.inv(root.right);
  }
}

const tree = new binaryTree();

tree.insert(new binaryNode(2));
tree.insert(new binaryNode(1));
tree.insert(new binaryNode(0));
tree.insert(new binaryNode(3));

tree.insert(new binaryNode(5));
tree.insert(new binaryNode(6));
tree.insert(new binaryNode(7));

tree.insert(new binaryNode(8));

tree.insert(new binaryNode(9));

tree.insert(new binaryNode(10));

console.log(tree.get(10));
