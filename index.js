function processData(input) {
  var lines = input.split('\n');
  // var N = lines[0].split(' ')[0];
  // var T = lines[0].split(' ')[1];
  var LANE = lines[1].split(' ');
  lines.shift();
  lines.shift();
  
  // console.log('N ', N);
  // console.log('T ', T);
  // console.log('LANE ', LANE);

  for (var k=0;k<lines.length;k++) {
    var i = parseInt(lines[k].split(' ')[0]);
    var j = parseInt(lines[k].split(' ')[1]);
    // console.log('i j', i, j);
    console.log(belly(LANE, i, j));
  }
}

function belly(track, start, end) {
  var width = 3;

  for(var s=start, e=end;s<=e;s++) {
    if (track[s] === '1') {
      return 1;
    } 
    if (track[s] === '2') {
      width = 2;
    }
  }
  console.log
  return width;
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

-- Philips HR1869 126 € 80 mm --
the 71 é 30€ mais cara e é a mesma por o corpo em aço