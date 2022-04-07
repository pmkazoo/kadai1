// //譜面データが入ったファイル
// //今回は変数
// const FILE = {
//     lineSize: 4,
//     timing: [
//       7849, 8192, 8592, 8936, 9360, 9536, 9731, 9888, 10288, 10465, 10657, 10832, 11199, 11568, 11930, 12395,
//       12584, 12759, 12951, 13904, 14248, 14616, 14984, 15415, 15609, 15781, 15958, 16352, 16533, 16704, 16897,
//       17273, 17625, 17993, 18249, 18609, 18913, 19730, 19935, 20555, 20735, 21330, 21503, 21697, 21887, 22088,
//       22764, 22952, 23147, 23351, 23545, 23896, 24287, 24697, 24889, 25848, 26040, 26593, 26784, 27344, 27536,
//       27713, 27904, 28088, 28298, 28897, 29072, 29432, 29625, 29977, 30376, 30746, 31176, 31360, 31960, 32136,
//       32714, 32888, 33448, 33642, 33816, 34009, 34208, 34945, 35136, 35519, 35713, 36040, 36416, 36840, 37032,
//       38009, 38181, 38768, 38931, 39514, 39703, 39881, 40081, 40273, 40464, 41010, 41200, 41578, 41819, 42081,
//       42465, 42914, 43296, 43487, 44241, 44578, 44993, 45383, 45592, 47160, 47320, 47681, 48015, 48441, 48632,
//       49025, 49199, 49536, 50152, 50345, 50674, 50913, 51089, 51384, 51689, 51865, 52119, 52344, 52534, 53161,
//       53337, 53681, 53952, 54135, 54416, 54656, 54848, 57401, 57720, 57887, 58264, 58457, 58873, 59215, 59641,
//       59815, 60426, 60602, 60776, 60952, 61313, 61486, 61848, 62226, 62687, 62870, 63058, 63585, 63777, 63969,
//       64345, 64536, 64917, 65297, 65737, 65919, 66204, 66897, 67074, 67330, 67632, 67978, 68336, 68714, 68904,
//       69664, 69840, 70036, 70427, 70616, 70962, 71344, 71752, 71947, 72577, 72753, 72934, 73120, 73464, 73656,
//       74013, 74411, 74825, 75015, 75209, 75719, 75914, 76104, 76514, 76714, 77064, 77472, 77864, 78041, 78361,
//       79009, 79184, 79366, 79737, 80065, 80448, 80881, 81056, 81410, 82183, 82551, 82946, 83313, 83713, 84409,
//       84921, 85097, 88336, 88665, 89033, 89399, 89833, 90010, 90186, 90384, 90784, 90961, 91137, 91317, 91673,
//       92015, 92410, 92841, 93048, 93225, 93418, 94337, 94719, 95082, 95448, 95881, 96057, 96241, 96418, 96833,
//       97011, 97186, 97363, 97744, 98161, 98601, 98793, 99121, 99449,
//     ],
//     line: [
//       2, 0, 1, 2, 1, 2, 1, 2, 0, 0, 3, 3, 0, 1, 2, 3, 0, 1, 3, 0, 2, 1, 0, 1, 2, 0, 0, 1, 3, 3, 1, 0, 1, 0, 3,
//       0, 3, 3, 2, 2, 1, 2, 0, 3, 2, 3, 2, 2, 3, 2, 3, 2, 3, 3, 0, 1, 1, 2, 0, 1, 1, 3, 3, 1, 0, 1, 3, 3, 1, 2,
//       0, 3, 3, 2, 0, 0, 3, 3, 1, 0, 1, 1, 0, 0, 3, 2, 1, 3, 0, 0, 3, 3, 2, 1, 0, 3, 3, 2, 0, 1, 3, 3, 1, 0, 2,
//       1, 3, 3, 1, 2, 0, 1, 3, 2, 0, 1, 3, 0, 3, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 3, 2, 0, 0, 1, 1, 3, 2, 1, 3,
//       1, 1, 3, 0, 1, 3, 3, 0, 2, 3, 3, 2, 2, 3, 0, 1, 0, 2, 0, 1, 2, 2, 0, 1, 2, 3, 2, 1, 1, 2, 2, 2, 1, 3, 0,
//       2, 2, 2, 1, 3, 2, 2, 1, 0, 3, 0, 3, 1, 0, 0, 3, 2, 1, 0, 3, 1, 1, 0, 3, 2, 1, 0, 2, 2, 2, 1, 0, 2, 1, 0,
//       2, 0, 2, 3, 3, 3, 2, 2, 2, 3, 0, 2, 3, 1, 0, 1, 1, 0, 2, 1, 0, 0, 2, 3, 2, 1, 2, 1, 0, 1, 1, 0, 3, 1, 0,
//       2, 0, 3, 3, 2, 0, 2, 3, 1, 3, 1, 3, 1, 3, 1, 2, 3, 1, 3, 2,
//     ],
//   };
  
//譜面データが入ったファイル
//今回は変数
// const FILE = {
//   lineSize: 3,
//   timing: [
//     7849, 8192, 8592, 8936, 9360, 9536, 9731, 9888, 10288, 10465, 10657, 10832, 11199, 11568, 11930, 12395,
//     12584, 12759, 12951, 13904, 14248, 14616, 14984, 15415, 15609, 15781, 15958, 16352, 16533, 16704, 16897,
//     17273, 17625, 17993, 18249, 18609, 18913, 19730, 19935, 20555, 20735, 21330, 21503, 21697, 21887, 22088,
//     22764, 22952, 23147, 23351, 23545, 23896, 24287, 24697, 24889, 25848, 26040, 26593, 26784, 27344, 27536,
//     27713, 27904, 28088, 28298, 28897, 29072, 29432, 29625, 29977, 30376, 30746, 31176, 31360, 31960, 32136,
//     32714, 32888, 33448, 33642, 33816, 34009, 34208, 34945, 35136, 35519, 35713, 36040, 36416, 36840, 37032,
//     38009, 38181, 38768, 38931, 39514, 39703, 39881, 40081, 40273, 40464, 41010, 41200, 41578, 41819, 42081,
//     42465, 42914, 43296, 43487, 44241, 44578, 44993, 45383, 45592, 47160, 47320, 47681, 48015, 48441, 48632,
//     49025, 49199, 49536, 50152, 50345, 50674, 50913, 51089, 51384, 51689, 51865, 52119, 52344, 52534, 53161,
//     53337, 53681, 53952, 54135, 54416, 54656, 54848, 57401, 57720, 57887, 58264, 58457, 58873, 59215, 59641,
//     59815, 60426, 60602, 60776, 60952, 61313, 61486, 61848, 62226, 62687, 62870, 63058, 63585, 63777, 63969,
//     64345, 64536, 64917, 65297, 65737, 65919, 66204, 66897, 67074, 67330, 67632, 67978, 68336, 68714, 68904,
//     69664, 69840, 70036, 70427, 70616, 70962, 71344, 71752, 71947, 72577, 72753, 72934, 73120, 73464, 73656,
//     74013, 74411, 74825, 75015, 75209, 75719, 75914, 76104, 76514, 76714, 77064, 77472, 77864, 78041, 78361,
//     79009, 79184, 79366, 79737, 80065, 80448, 80881, 81056, 81410, 82183, 82551, 82946, 83313, 83713, 84409,
//     84921, 85097, 88336, 88665, 89033, 89399, 89833, 90010, 90186, 90384, 90784, 90961, 91137, 91317, 91673,
//     92015, 92410, 92841, 93048, 93225, 93418, 94337, 94719, 95082, 95448, 95881, 96057, 96241, 96418, 96833,
//     97011, 97186, 97363, 97744, 98161, 98601, 98793, 99121, 99449,
//   ],
//   line: [
//     2, 0, 1, 2, 1, 2, 1, 2, 0, 0, 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0,
//     0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2,
//     2, 0, 1, 2, 1, 2, 1, 2, 0, 0, 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0,
//     0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2,
//     2, 0, 1, 2, 1, 2, 1, 2, 0, 0, 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0,
//     0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2,
//     2, 0, 2, 1, 2, 1, 2, 2, 2, 0, 0, 2, 0, 1, 0, 1, 1, 0, 2, 1, 0, 0, 2, 1, 2, 1, 2, 1, 0, 1, 1, 0, 0, 1, 0,
//     2, 0, 1, 1, 2, 0, 2, 2, 1, 0, 1, 0, 1, 2, 1, 2, 2, 1, 0, 2,
//   ],
//   janken: [
//     0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2,
//     2, 0, 1, 2, 1, 2, 1, 2, 0, 0, 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0,
//     0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2,
//     2, 0, 1, 2, 1, 2, 1, 2, 0, 0, 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0,
//     0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2,
//     2, 0, 1, 2, 1, 2, 1, 2, 0, 0, 2, 0, 0, 1, 2, 1, 0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 1, 2, 1, 0, 1, 0, 0,
//     0, 1, 0, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 1, 2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1, 2,
//     2, 1, 2, 1, 1, 0, 1, 1, 2, 0, 1, 1, 2, 2, 1, 0, 1, 0, 2, 1,
//   ],
// };

const FILE = {
  lineSize: 3,
  timing: [
    5000, 7000,
    12584,16897,
    17273,22088,
    22764,27536,
    27713,32136,
    32714,37032,
    38009,42081,
    42465,48632,
    49025,53161,
    53337,59641,
    59815,63969,
    64345,68904,
    69664,73656,
    74013,78361,
    79009,84409,
    84921,91673,
    92015,96833,
    97011,99449,
  ],
  line: [
    2,1,
    0,2,
    2,0,
    0,2,
    2,0,
    0,2,
    1,0,
    0,1,
    2,0,
    0,2,
    2,0,
    0,2,
    2,0,
    0,2,
    1,0,
    0,1,
    0,2,
    1,0,
  ],
};
