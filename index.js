let nodes = document.querySelectorAll("td");
let cells = [[], [], [], [], [], []];
let cnt = 0;
for (let i = 0; i < 6; i++) {
   for (let j = 0; j < 6; j++) {
      cells[i][j] = nodes[cnt];
      cnt++;
   }
}

function Check_type(node) {
   let row, col, cnt, nodeColor;
   for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
         if (cells[i][j] == node) {
            row = i;
            col = j;
            // const computedStyle = window.getComputedStyle(cells[i][j])
            // nodeColor = computedStyle.background;
            nodeColor = cells[i][j].classList.item(0);
            break;
         }
      }
   }
   if (nodeColor == null) {
      // len = 0;
      // type = "";
      return [0, ""];
   }
   //horizontal
   cnt = 0;
   if (col == 0) {
      if (cells[row][1].classList.item(0) == nodeColor) {
         type = "horizontal";
         // for(let i=0;i<3;i++){
         //    if(cells[row][i].style.backgroundColor==nodeColor){
         //       cnt++
         //    }else break
         // }
         // len = cnt
         if (cells[row][2].classList.item(0) == nodeColor) len = 3;
         else len = 2;
         return [len, type];
      }
   } else if (col == 5) {
      if (cells[row][4].classList.item(0) == nodeColor) {
         type = "horizontal";
         // for(let i=5;i>=3;i--){
         //    if(cells[row][i].style.backgroundColor==nodeColor){
         //       cnt++
         //    }else break
         // }
         if (cells[row][3].classList.item(0) == nodeColor) len = 3;
         else len = 2;
         return [len, type];
      }
   } else {
      if (
         cells[row][col - 1].classList.item(0) == nodeColor &&
         cells[row][col + 1].classList.item(0) != nodeColor
      ) {
         type = "horizontal";
         for (let i = col; i >= 0; i--) {
            if (cells[row][i].classList.item(0) == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return [len, type];
      } else if (
         cells[row][col + 1].classList.item(0) == nodeColor &&
         cells[row][col - 1].classList.item(0) != nodeColor
      ) {
         type = "horizontal";
         for (let i = col; i < 6; i++) {
            if (cells[row][i].classList.item(0) == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return [len, type];
      } else if (
         cells[row][col + 1].classList.item(0) == nodeColor &&
         cells[row][col - 1].classList.item(0) == nodeColor
      ) {
         type = "horizontal";
         len = 3;
         return [len, type];
      }
   }
   //vertical
   type = "vertical";
   if (row == 0) {
      for (let i = 0; i <= 2; i++) {
         if (cells[i][col].classList.item(0) == nodeColor) {
            cnt++;
         } else break;
      }
      len = cnt;
      return [len, type];
   } else if (row == 5) {
      for (let i = 5; i >= 3; i--) {
         if (cells[i][col].classList.item(0) == nodeColor) {
            cnt++;
         } else break;
      }
      len = cnt;
      return [len, type];
   } else {
      if (
         cells[row - 1][col].classList.item(0) == nodeColor &&
         cells[row + 1][col].classList.item(0) != nodeColor
      ) {
         for (let i = row; i >= 0; i--) {
            if (cells[i][col].classList.item(0) == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return [len, type];
      } else if (
         cells[row + 1][col].classList.item(0) == nodeColor &&
         cells[row - 1][col].classList.item(0) != nodeColor
      ) {
         for (let i = row; i < 6; i++) {
            if (cells[i][col].classList.item(0) == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return [len, type];
      } else if (
         cells[row + 1][col].classList.item(0) == nodeColor &&
         cells[row - 1][col].classList.item(0) == nodeColor
      ) {
         len = 3;
         return [len, type];
      }
   }
}
let chosen, len, type, cell;
nodes.forEach((node) => {
   node.addEventListener("click", () => {
      let [length, TYPE] = Check_type(node);
      console.log("len: " + length + " , type: " + TYPE);
      if (length > 0) {
         chosen = true;
         len = length;
         type = TYPE;
         cell = node;
      }
   });
});
function goUp() {
   if (type == "vertical") {
      let row, col, topIndex, nodeColor;
      for (let i = 0; i < 6; i++) {
         for (let j = 0; j < 6; j++) {
            if (cells[i][j] == cell) {
               row = i;
               col = j;
               nodeColor = cells[i][j].classList.item(0);
               break;
            }
         }
      }
      for (let i = row; i >= 0; i--) {
         if (cells[i][col].classList.item(0) == nodeColor) {
            topIndex = i;
         } else break;
      }
      if (topIndex > 0 && cells[topIndex - 1][col].classList.item(0) == null) {
         console.log('can')
      }else console.log('nocan')
   }
}
document.addEventListener("keydown", (key) => {
   if (chosen) {
      if (key.code == "ArrowUp") {
         goUp();
         chosen = false
      } else if (key.code == "ArrowDown") {
         goDown();
      } else if (key.code == "ArrowLeft") {
         goLeft();
      } else if (key.code == "ArrowRight") {
         goRight();
      }
   }
});
