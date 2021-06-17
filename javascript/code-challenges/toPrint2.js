

//-------SUM LEVELS OF BT--------\\
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



//------LL CONVERGE------\\
function convergingList(LL1, LL2) {
  if(!LL1 || LL2) return null;

  let current1 = LL1.head;
  let current2 = LL2.head;

  while(current1 !== current2) {
    current1 = (current1 === null) ? LL2.head : current1.next;
    current2 = (current2 === null) ? LL1.head : current2.next;
  }
  return current1;
}


function bubbleSort(array) {
  let noSwap;
  for (let i = array.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if(array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
}


//-------CONVERT TO ROMAN--------\\
let convertToRoman = function(num) {
  const dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  const rom = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let romanized = "";
  for ( let i = 0; i < dec.length; i++) {
    while (dec[i] <= num) {
      romanized += rom[i];
      num -= dec[i];
    }
  }
  return romanized;
};


convertToRoman(123);

