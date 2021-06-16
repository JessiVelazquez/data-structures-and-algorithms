let unorderedTest =
{root:
{value: 55,
  left: {
    value: 2,
    left: {
      value: 60,
      left: {},
      right:{}
    },
    right:{value: 44,
      left: {},
      right:{}
    }
  },
  right:{
    value: 40,
    left: {
      value: 22,
      left: {},
      right:{}
    },
    right:{
      value: 51,
      left: {},
      right:{}
    }
  }
}};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }
}

function sumLevels(BT) {
  let depth = 0;
  let lists = [];
  let _walk = (node, depth) => {
    if (!lists[depth]) {
      lists[depth] = new LL();
    }
    lists[depth].append(node.value);
    if (node.left) _walk(node.left, depth + 1);
    if (node.right) _walk(node.right, depth + 1);
  };
  _walk(BT.root);
  return lists;
}

let answer = sumLevels(unorderedTest);

console.log(answer);
