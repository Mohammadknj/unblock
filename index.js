let nodes = document.querySelectorAll("td");
let cells = [[], [], [], [], [], []];
let cnt = 0;
for (let i = 0; i < 6; i++) {
   for (let j = 0; j < 6; j++) {
      cells[i][j] = nodes[cnt];
      cnt++;
   }
}

function Check_type(node, len, type) {
   let row, col, cnt;
   for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
         if (cells[i][j] == node) {
            row = i;
            col = j;
            break;
         }
      }
   }
   let nodeColor = node.style.backgroundColor;
   if (nodeColor == "#ffffff") {
      len = 0;
      type = "";
      return;
   }
   //horizontal
   cnt = 0;
   if (col == 0) {
      if (cells[row][1].style.backgroundColor == nodeColor) {
         type = "horizontal";
         // for(let i=0;i<3;i++){
         //    if(cells[row][i].style.backgroundColor==nodeColor){
         //       cnt++
         //    }else break
         // }
         // len = cnt
         if (cells[row][2].style.backgroundColor == nodeColor) len = 3;
         else len = 2;
         return;
      }
   } else if (col == 5) {
      if (cells[row][4].style.backgroundColor == nodeColor) {
         type = "horizontal";
         // for(let i=5;i>=3;i--){
         //    if(cells[row][i].style.backgroundColor==nodeColor){
         //       cnt++
         //    }else break
         // }
         if (cells[row][4].style.backgroundColor == nodeColor) len = 3;
         else len = 2;
         return;
      }
   } else {
      if (
         cells[row][col - 1].style.backgroundColor == nodeColor &&
         cells[row][col + 1].style.backgroundColor != nodeColor
      ) {
         type = "horizontal";
         for (let i = col; i >= 0; i--) {
            if (cells[row][i].style.backgroundColor == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return;
      } else if (
         cells[row][col + 1].style.backgroundColor == nodeColor &&
         cells[row][col - 1].style.backgroundColor != nodeColor
      ) {
         type = "horizontal";
         for (let i = col; i < 6; i++) {
            if (cells[row][i].style.backgroundColor == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return;
      } else if (
         cells[row][col + 1].style.backgroundColor == nodeColor &&
         cells[row][col - 1].style.backgroundColor == nodeColor
      ) {
         type = "horizontal";
         len = 3;
         return;
      }
   }
   //vertical
   type = "vertical";
   if (row == 0) {
      for(let i=0;i<2;i++){
         if(cells[i][col].style.backgroundColor == nodeColor){
            cnt++
         }else break
      }
      len = cnt
      return;
   } else if (row == 5) {
      for(let i=5;i>=3;i--){
         if(cells[i][col].style.backgroundColor == nodeColor){
            cnt++
         }else break
      }
      len = cnt
      return;
   } else {
      if (
         cells[row - 1][col].style.backgroundColor == nodeColor &&
         cells[row + 1][col].style.backgroundColor != nodeColor
      ){
         for (let i = row; i >= 0; i--) {
            if (cells[i][col].style.backgroundColor == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return;
      }else if (
         cells[row + 1][col].style.backgroundColor == nodeColor &&
         cells[row - 1][col].style.backgroundColor != nodeColor
      ){
         for (let i = row; i < 6; i++) {
            if (cells[i][col].style.backgroundColor == nodeColor) {
               cnt++;
            } else break;
         }
         len = cnt;
         return;
      }else if (
         cells[row + 1][col].style.backgroundColor == nodeColor &&
         cells[row - 1][col].style.backgroundColor == nodeColor
      ){
         len = 3;
         return;
      }
   }
}
