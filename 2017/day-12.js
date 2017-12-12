let input = [
  [780, 1330],
  [264, 595, 1439],
  [296, 531, 1440],
  [207, 235, 1038],
  [554, 1295],
  [159, 568, 1381],
  [1134],
  [1472, 1977],
  [704],
  [783, 1082, 1795],
  [46, 653, 958],
  [55, 1931],
  [12],
  [537, 940],
  [1066, 1411, 1997],
  [1528],
  [27],
  [113, 370, 450, 982],
  [571],
  [1606],
  [803],
  [956],
  [181, 1126, 1431, 1737],
  [131, 162, 967, 1973],
  [526, 1914],
  [551, 1057],
  [1162, 1922],
  [16, 533, 1125],
  [468, 902, 1159],
  [29],
  [749, 1079, 1684],
  [1909, 1992],
  [1666],
  [426, 1662, 1883],
  [109],
  [307, 577, 727, 1763, 1948],
  [578],
  [92, 503, 1203, 1255],
  [38, 471],
  [615],
  [584, 1787],
  [591, 756],
  [888],
  [952],
  [1029],
  [45, 300, 596, 1393, 1486],
  [10, 1887],
  [592],
  [108],
  [1583],
  [1200],
  [51, 857],
  [965],
  [702, 1428],
  [1525],
  [11, 610],
  [1703],
  [1449],
  [1097],
  [1316, 1461, 1932],
  [107, 1010, 1504, 1824, 1912],
  [1677],
  [691, 714, 1530],
  [672, 1263, 1956],
  [825, 1016, 1370],
  [539, 1055, 1290],
  [1287],
  [338, 1195],
  [108, 296, 1787, 1821],
  [436, 1015, 1633],
  [262, 407, 592, 1414],
  [420, 797],
  [1393],
  [616, 993],
  [168, 175],
  [590, 1103],
  [271],
  [1309, 1496, 1627],
  [569, 1888],
  [1289, 1925],
  [193, 993],
  [500],
  [1069],
  [83, 1518],
  [1465],
  [1614],
  [474, 749, 1286, 1678],
  [160],
  [1026, 1732],
  [317, 422, 917],
  [517, 1362],
  [136],
  [37, 703],
  [1738, 1827],
  [345, 907, 1180],
  [95],
  [406, 1086, 1258],
  [97, 157],
  [1002],
  [109, 198, 654],
  [555],
  [101],
  [939],
  [616, 1266],
  [1526],
  [306, 1276, 1330],
  [1395],
  [60, 288, 1971],
  [48, 68],
  [34, 99, 578, 1042],
  [906, 1567],
  [917, 1347],
  [1291, 1384, 1695, 1988],
  [17, 1173],
  [297, 1576],
  [361],
  [117, 1084],
  [116, 164, 683, 1454],
  [1956],
  [1198],
  [171, 416],
  [1949],
  [233, 770, 1012],
  [801],
  [1406],
  [769],
  [418, 1038, 1273],
  [611, 1060, 1241],
  [576, 665, 1568],
  [862],
  [1607, 1644],
  [23, 812],
  [1097],
  [1403, 1992],
  [232],
  [959],
  [91, 1354, 1868, 1932],
  [766, 1049],
  [138],
  [139, 355],
  [1858],
  [703, 1319],
  [424],
  [869],
  [231, 338],
  [1163, 1345],
  [431, 940, 1389],
  [1282, 1784],
  [218, 1137],
  [378],
  [257, 798],
  [1603],
  [152, 189, 1151],
  [623, 1228],
  [154],
  [376, 808],
  [1726],
  [97],
  [482],
  [5],
  [87, 504, 1775],
  [873, 1047],
  [23],
  [291],
  [117, 229, 371, 1427],
  [487, 1683, 1844],
  [508],
  [278, 1228, 1453],
  [74, 1210],
  [396, 410, 1256],
  [555, 1624],
  [120, 340, 1713],
  [1748],
  [880, 1306],
  [1052, 1697],
  [74, 995],
  [1421],
  [551, 640],
  [1611],
  [1504],
  [310, 1432, 1722],
  [22],
  [1175],
  [1115],
  [184],
  [708],
  [1130],
  [944],
  [451, 593],
  [152],
  [885, 1491],
  [191],
  [1751],
  [80, 931],
  [544, 826],
  [1354],
  [705],
  [1646, 1693],
  [99],
  [1681, 1818],
  [200],
  [678, 691],
  [1084],
  [446, 1232],
  [337, 826, 1919],
  [440, 818],
  [618, 898],
  [3],
  [208],
  [574, 1760, 1774],
  [960, 1315],
  [525, 670],
  [453, 1552],
  [1164],
  [893, 1597],
  [386, 1412, 1752],
  [1800],
  [1103],
  [148, 218],
  [1135, 1216, 1404],
  [1899],
  [987, 1248],
  [706, 1199, 1916],
  [816, 1079, 1703],
  [726],
  [797],
  [396, 1482],
  [844],
  [703, 972, 1275],
  [164, 377, 662, 1048],
  [230, 661],
  [144, 1358],
  [134, 793, 1433, 1730],
  [122],
  [882],
  [3, 489],
  [945, 1346],
  [480],
  [702],
  [1008],
  [1078],
  [1103, 1844],
  [666, 1299],
  [1489],
  [423, 827, 860, 868],
  [1747],
  [659, 1446],
  [679],
  [1467, 1942],
  [1678],
  [284, 1223],
  [1513],
  [1673],
  [1084],
  [747, 1705],
  [255],
  [390],
  [150, 1439, 1804],
  [1302, 1626],
  [259, 1519],
  [449],
  [269, 641],
  [70],
  [1334, 1358],
  [1, 1843],
  [1316],
  [1045, 1053, 1264],
  [364, 1198],
  [501, 594, 732, 1919],
  [261, 681],
  [670, 1283, 1531],
  [76, 1817, 1858],
  [625, 757, 1236, 1793],
  [1255, 1539],
  [442, 1406],
  [706, 1760],
  [841, 1553, 1764],
  [1133],
  [167, 908],
  [1771],
  [280, 1583],
  [702],
  [282, 1712, 1776],
  [820, 981],
  [250],
  [680, 880, 1896],
  [286, 489],
  [608, 1204, 1423],
  [107, 1353, 1729],
  [289, 299],
  [761, 1134],
  [163, 801, 1435],
  [1217, 1525],
  [1206],
  [797, 1124, 1371],
  [335, 704],
  [2, 68, 1516],
  [114, 1036, 1987],
  [298, 588, 1430],
  [289],
  [45, 1965],
  [773, 1591],
  [1122, 1341],
  [450, 1786],
  [304],
  [724],
  [105, 1861],
  [35],
  [308, 1015],
  [930, 1011],
  [180],
  [1513],
  [646],
  [1381],
  [511, 804, 1079],
  [399],
  [948, 1169],
  [89, 725],
  [318],
  [319],
  [787],
  [1132],
  [322],
  [1376],
  [1540],
  [1448, 1944, 1995],
  [1828],
  [1886],
  [639],
  [831, 959],
  [527],
  [1399, 1535],
  [1843],
  [333, 522],
  [1512],
  [295, 885],
  [1651],
  [204, 1164, 1874],
  [67, 144, 584, 621],
  [1887],
  [171, 1861],
  [1555],
  [507],
  [1441],
  [409, 527, 1364, 1756],
  [94],
  [357, 499],
  [795, 1065, 1191],
  [914, 1800, 1982],
  [349],
  [436],
  [1472, 1514],
  [375, 884],
  [499, 567],
  [1033, 1218],
  [139],
  [866],
  [346, 1665],
  [1225],
  [359, 1429],
  [1512],
  [115, 920, 1975],
  [507, 682, 1116, 1762],
  [1583, 1737],
  [267],
  [1878, 1885],
  [1060],
  [421],
  [1362],
  [532, 1140],
  [17, 1065, 1117],
  [164],
  [372],
  [373],
  [1050],
  [352, 1311, 1446],
  [155, 1928],
  [229, 636],
  [149, 1897],
  [936],
  [1193, 1963],
  [1783],
  [1900],
  [383],
  [1630],
  [441],
  [215],
  [795, 946],
  [1457],
  [731, 1973],
  [256, 1706, 1900],
  [391],
  [1400],
  [818, 1244],
  [394, 1881],
  [395, 1656],
  [169, 226],
  [1790],
  [1260],
  [315, 399],
  [1204],
  [1606],
  [1191, 1726, 1853],
  [403],
  [1470],
  [1924],
  [96, 413, 1201],
  [70],
  [1063, 1216, 1586],
  [344, 409, 1625, 1803],
  [169, 1732],
  [1599],
  [889, 1460],
  [406, 761, 1918],
  [661],
  [442, 962, 1200],
  [120, 503],
  [446, 612, 1007],
  [126, 797, 1478, 1857],
  [1060, 1350, 1459, 1736],
  [71, 978, 1215],
  [367, 665, 1385, 1415],
  [89, 679, 1418],
  [244],
  [142, 1813],
  [627, 981],
  [33],
  [1172, 1495, 1740],
  [1869],
  [966, 986, 1162, 1658],
  [1866],
  [146, 1523, 1934],
  [558, 811, 944],
  [693, 1291],
  [766],
  [1784],
  [69, 350, 1064],
  [766, 817, 882, 1481],
  [742, 1159],
  [724, 1518],
  [205],
  [385, 1206],
  [274, 415, 442, 821],
  [1088, 1533],
  [666, 1260],
  [591, 1030, 1395, 1722],
  [203, 417, 1278, 1494, 1507],
  [447],
  [1599, 1882],
  [260, 1758],
  [17, 303, 1970],
  [188],
  [658, 763, 769],
  [212],
  [605],
  [478],
  [720, 1139, 1546],
  [598, 1127, 1496, 1518],
  [635],
  [1068],
  [1080, 1088, 1857],
  [739],
  [1344],
  [1775],
  [593, 1957],
  [703, 745, 1145],
  [1550, 1980],
  [467],
  [28],
  [1278],
  [470],
  [38, 996, 1626],
  [1933],
  [799],
  [86, 696, 1228],
  [491, 1250, 1739],
  [726],
  [1687],
  [455, 834, 835, 1389, 1983],
  [479],
  [237, 576],
  [791, 1370],
  [158, 1365],
  [761, 893],
  [1192],
  [1301],
  [1431],
  [165, 1119],
  [789],
  [235, 286],
  [490],
  [475, 1775],
  [1280, 1758],
  [1007, 1152],
  [1747],
  [495, 879],
  [1219],
  [643, 1118],
  [1010, 1529],
  [346, 353, 697, 1303],
  [81, 1700],
  [268],
  [502],
  [37, 416, 1121, 1740],
  [160, 909],
  [525, 1686, 1940],
  [1292, 1380],
  [342, 362, 969, 1674],
  [166, 1233],
  [1069],
  [636],
  [314, 1759],
  [1218, 1726],
  [1008, 1361, 1679],
  [1280],
  [1789],
  [619, 1835],
  [90, 1362, 1537],
  [880],
  [1329],
  [1248, 1441],
  [743, 1141, 1534, 1743],
  [333, 689],
  [1233],
  [860],
  [211, 505],
  [24, 984, 1503],
  [330, 344, 771, 1243],
  [898],
  [597],
  [1220, 1282],
  [2],
  [369, 821, 1806, 1937],
  [27, 1102],
  [1643, 1870],
  [569, 772],
  [536],
  [13],
  [1060, 1710],
  [65, 1002],
  [833, 1021, 1301],
  [1677],
  [542],
  [1242],
  [194, 698, 716, 1895],
  [1348, 1584],
  [797, 1622],
  [871, 1761],
  [1666],
  [1485],
  [1363, 1587],
  [25, 177, 645, 1311],
  [1208],
  [840],
  [4, 1454],
  [100, 170, 898, 1075, 1828, 1989],
  [924, 1614],
  [557],
  [432, 558],
  [1680],
  [1667],
  [760],
  [1668, 1799],
  [738],
  [1062, 1142, 1313],
  [750],
  [1104, 1614],
  [353, 744],
  [5, 568, 1338],
  [78, 535, 881],
  [600, 1516],
  [18, 1312, 1414, 1669],
  [572, 1958],
  [967, 1419],
  [209],
  [1013, 1087],
  [128, 480],
  [35, 577, 580],
  [36, 109],
  [1417],
  [577, 601, 700],
  [815, 1327, 1749],
  [891, 1263],
  [1652],
  [40, 338],
  [585],
  [640, 688, 1258, 1331],
  [1472],
  [298],
  [1170],
  [75, 1054],
  [41, 445],
  [47, 70],
  [188, 464, 1259, 1579],
  [268, 1194],
  [1, 1367, 1501],
  [45],
  [529, 626, 1237],
  [457, 648, 699],
  [1108, 1592],
  [570, 789, 1672],
  [580, 1298],
  [861, 1394],
  [1297, 1994],
  [1136],
  [454, 605],
  [832, 1109],
  [954, 1138],
  [287, 1971],
  [888],
  [55, 1580],
  [127, 710, 1087],
  [417, 950, 1428, 1464],
  [672, 1426],
  [794, 1724],
  [39, 848],
  [73, 103, 616],
  [726, 1026],
  [206, 1676],
  [516, 1204],
  [925],
  [338],
  [989],
  [153],
  [824, 1566, 1966],
  [272, 1326],
  [597, 750],
  [425],
  [1181, 1541, 1704],
  [1370, 1805],
  [630, 763],
  [1709],
  [1315, 1848],
  [1501],
  [674, 871],
  [458, 811],
  [377, 510, 1488],
  [1337],
  [781],
  [328, 1399],
  [177, 586, 1202, 1332, 1847],
  [261, 1942],
  [819],
  [497, 1089],
  [1661],
  [551],
  [312, 938, 1642, 1764],
  [1437],
  [598],
  [784, 1154, 1746],
  [1207, 1268],
  [1240, 1797],
  [1254],
  [10, 739, 764],
  [99, 1759],
  [895, 1784],
  [656, 701, 738],
  [1170],
  [452],
  [246],
  [809],
  [230, 414],
  [229],
  [1133, 1231],
  [745, 820],
  [128, 421],
  [242, 444, 926],
  [955, 1762],
  [1843],
  [1384, 1849],
  [211, 270, 1836],
  [1415],
  [63, 613, 1864],
  [964, 1973],
  [634, 1479, 1554],
  [1390],
  [1468, 1855],
  [1632],
  [201, 1445],
  [247, 422, 1401, 1484],
  [285],
  [269, 1115],
  [362, 682],
  [117, 1826],
  [977, 1458],
  [812],
  [1214, 1690, 1886],
  [1752],
  [586],
  [522],
  [1077, 1454],
  [62, 201, 815, 1019],
  [1454],
  [433, 941],
  [852],
  [695],
  [474],
  [499],
  [544],
  [598, 1448],
  [580],
  [656],
  [53, 238, 281],
  [92, 141, 228, 465, 1326],
  [8, 295, 1939],
  [196, 1099],
  [222, 275, 885, 905, 1531],
  [707, 1981],
  [185, 708, 1182, 1891, 1999],
  [1911],
  [611],
  [711, 1150],
  [1833],
  [713],
  [62, 1011, 1096, 1666],
  [1094],
  [544, 992],
  [1297],
  [718, 1727],
  [996],
  [456, 1388, 1748],
  [1331, 1458],
  [1535],
  [723],
  [305, 439],
  [317, 1854],
  [224, 476, 617, 1123],
  [35, 1249],
  [1369],
  [1537],
  [730, 1212],
  [389, 1815],
  [268],
  [1199],
  [919],
  [1627, 1694],
  [1036, 1319],
  [1345],
  [563, 656],
  [461, 653],
  [1069],
  [1436],
  [438, 1879, 1895],
  [521, 1657],
  [567],
  [465, 664],
  [873, 998],
  [254, 1380],
  [1089, 1329],
  [30, 86],
  [565, 626],
  [1362],
  [752],
  [840, 1066, 1424, 1745],
  [854, 1534, 1964],
  [1516, 1907],
  [41, 1069],
  [272],
  [1792],
  [1068],
  [561, 1048, 1377],
  [290, 413, 483, 1457],
  [1170],
  [452, 630],
  [653, 1521],
  [1928, 1986],
  [137, 434, 437],
  [1664],
  [924, 1562, 1923],
  [125, 452],
  [122, 851],
  [527, 1046, 1767],
  [535, 1056],
  [301, 1613, 1751],
  [903, 1110, 1318, 1849],
  [1640],
  [776],
  [777, 1593, 1880],
  [1194, 1524],
  [1299],
  [0],
  [638, 1434, 1448],
  [1540, 1554],
  [9],
  [649, 1017],
  [840, 915, 1325],
  [1424],
  [320, 1049],
  [1273],
  [488, 600],
  [924, 1085, 1775],
  [481],
  [1796],
  [232, 1860],
  [614, 1309],
  [347, 387],
  [796, 1059],
  [71, 225, 294, 418, 546],
  [150, 1818],
  [473, 1224],
  [1864],
  [123, 291, 1546],
  [802, 1648],
  [20, 803],
  [314],
  [1721],
  [1520],
  [1476],
  [155, 808],
  [660, 1880],
  [1816],
  [432, 635, 847],
  [131, 685, 1411],
  [1083],
  [1348],
  [581, 691],
  [223],
  [437, 1702],
  [205, 393, 1751],
  [642, 1161],
  [283, 664, 839, 1157],
  [442, 532, 1310, 1618, 1992],
  [1743],
  [1174],
  [624, 1051],
  [64, 1838],
  [194, 204, 1149],
  [244],
  [1791, 1930, 1936],
  [829, 1398],
  [1816],
  [329, 943, 1612],
  [606, 1223],
  [540, 833],
  [478],
  [478, 835, 1160],
  [906, 1558, 1905],
  [837, 1544],
  [883],
  [820],
  [553, 753, 785],
  [276],
  [1639],
  [843],
  [227, 1436],
  [845],
  [1266],
  [811, 1268, 1386, 1766],
  [615, 949],
  [1616],
  [1334, 1567, 1698],
  [770, 1807],
  [694, 1293, 1946],
  [967],
  [754],
  [1655],
  [959, 1706, 1733],
  [51],
  [866, 1949],
  [859],
  [244, 524, 999],
  [602, 1369, 1568],
  [129, 863, 1179],
  [862, 912, 1688, 1707, 1884],
  [916],
  [865, 1808],
  [356, 858],
  [1624],
  [244],
  [143, 916],
  [1030],
  [547, 634, 1638],
  [901, 1155, 1300],
  [161, 746, 1413],
  [874, 1985],
  [900, 1212, 1616],
  [876],
  [1197],
  [1732],
  [495, 1090],
  [173, 285, 518, 1400],
  [569, 1109],
  [234, 437, 1829],
  [838, 1416, 1492],
  [352, 1108],
  [190, 335, 706, 1802],
  [1930],
  [986],
  [42, 609, 1710],
  [412, 1242],
  [1116, 1335],
  [582],
  [1072, 1378, 1510],
  [214, 483, 1421],
  [1329],
  [655, 1480],
  [907],
  [897, 1191, 1753],
  [206, 528, 555, 1572, 1783],
  [1885],
  [875],
  [872, 1322],
  [28, 1490],
  [774, 1839],
  [904, 1392],
  [706, 1984],
  [110, 836, 1000, 1232],
  [94, 896, 907],
  [278, 1136],
  [504],
  [1938],
  [1507],
  [863, 1581, 1849],
  [1694],
  [348],
  [785],
  [864, 869, 1771],
  [89, 111],
  [1146, 1397],
  [734, 1647, 1936],
  [361, 1287],
  [977],
  [922],
  [1669],
  [556, 768, 790],
  [620, 1207, 1765],
  [666, 1801],
  [1083, 1151],
  [1265],
  [1082],
  [309, 1663],
  [193],
  [932, 1018],
  [991],
  [1554],
  [1826],
  [379, 988, 1011, 1871],
  [1585, 1694],
  [646, 1935],
  [102, 1355],
  [13, 146, 1337],
  [693, 1789],
  [1083, 1723],
  [831, 1471],
  [187, 432],
  [236],
  [387],
  [1579],
  [316, 1044, 1574],
  [848, 1914],
  [612],
  [1012, 1271],
  [43, 1535, 1574],
  [1986],
  [607, 1055, 1452],
  [667],
  [21, 1869],
  [957],
  [10],
  [135, 329, 856],
  [210, 1885],
  [1904],
  [415, 1658],
  [1156],
  [673],
  [52, 981],
  [429, 1734],
  [23, 573, 853],
  [1975],
  [507, 1865],
  [1870],
  [1175],
  [228],
  [1068],
  [1421],
  [975],
  [1401],
  [684, 921, 1798],
  [420],
  [1485],
  [1867, 1893],
  [283, 425, 965],
  [17, 1638],
  [1542],
  [526],
  [985],
  [429, 887],
  [221, 1784],
  [936],
  [622, 1114, 1154],
  [1023, 1027],
  [933, 991],
  [716],
  [73, 80],
  [1221, 1905],
  [175],
  [471, 719, 1379],
  [1790],
  [746],
  [860, 999, 1346],
  [906],
  [1171, 1649, 1850],
  [98, 539, 1998],
  [1244],
  [1473],
  [1706],
  [1685],
  [417, 493, 1845, 1980],
  [239, 513, 1536],
  [1202, 1442],
  [60, 498, 1641],
  [309, 714, 936, 1958],
  [122, 951],
  [575, 1239],
  [1014, 1555, 1961],
  [69, 308, 1559],
  [64],
  [784, 1586, 1643],
  [932],
  [691],
  [1877],
  [540, 1743, 1798],
  [1900],
  [990],
  [1024],
  [1444],
  [88, 617],
  [990, 1027, 1345],
  [1228],
  [44, 1264],
  [445, 870, 1130],
  [1158, 1610],
  [1400],
  [354],
  [1802, 1849],
  [1474],
  [297, 736],
  [1473, 1949],
  [3, 126],
  [1046],
  [1082, 1100],
  [1043],
  [109],
  [1041, 1520],
  [948, 1977],
  [266, 1189, 1972],
  [771, 1039],
  [161, 1168],
  [229, 760],
  [137, 787, 1738],
  [374, 1925],
  [824, 1631, 1989],
  [174],
  [266],
  [590],
  [65, 954, 1235],
  [772, 1368],
  [25, 1098],
  [1792, 1819],
  [796],
  [127, 366, 419, 538],
  [1665, 1887, 1983],
  [564],
  [408],
  [436, 1073],
  [347, 370],
  [14, 753],
  [1622],
  [459, 759, 973, 1844],
  [82, 509, 740, 756, 1099, 1259, 1351],
  [1498],
  [1935],
  [892, 1072],
  [1064, 1908],
  [1609],
  [555],
  [1076],
  [690],
  [240, 1433],
  [30, 223, 314, 1112],
  [460],
  [1574],
  [9, 929, 1040, 1382],
  [813, 927, 942],
  [116, 202, 253, 1084, 1465],
  [790],
  [96, 1190],
  [575, 611, 1412],
  [443, 460],
  [643, 748],
  [879, 1208, 1288],
  [1091, 1716],
  [1456, 1606, 1925],
  [1158, 1997],
  [715, 1297, 1313, 1412, 1508],
  [1095],
  [714],
  [58, 132, 1587],
  [1057, 1254],
  [705, 1069],
  [1040, 1813],
  [1101],
  [533],
  [75, 217, 241, 1188],
  [566, 1792],
  [1646],
  [1107, 1574],
  [1106],
  [599, 884, 1144, 1476],
  [606, 881],
  [774],
  [1475, 1560, 1663],
  [1079],
  [1113, 1715],
  [989, 1910],
  [183, 681, 1476, 1866],
  [362, 890, 1271],
  [370, 1757],
  [497, 1977],
  [487],
  [1164],
  [503],
  [302, 1655],
  [726, 1856],
  [294],
  [27, 1570],
  [22],
  [457, 1587],
  [1320],
  [1129, 1230],
  [186, 1030, 1145, 1628],
  [1151],
  [321, 1902],
  [277, 663, 1577],
  [6, 290, 1976],
  [219],
  [604, 908],
  [148, 1383],
  [607],
  [456, 1654],
  [369],
  [521],
  [564, 1143],
  [1142],
  [1108],
  [465, 1130, 1842],
  [918],
  [1282],
  [1148],
  [826],
  [711],
  [152, 927, 1131],
  [493, 1720],
  [1865],
  [649, 989],
  [872],
  [963, 1668],
  [820],
  [1031, 1093, 1790],
  [28, 438],
  [835],
  [819, 1789],
  [26, 429, 1374],
  [145],
  [213, 337, 1120, 1366],
  [1843],
  [1884],
  [1494, 1799],
  [1047],
  [316],
  [589, 657, 762, 1685],
  [1001],
  [427, 1226],
  [113, 1621],
  [823, 1174],
  [182, 971, 1405],
  [1462],
  [1177],
  [1858, 1920],
  [862, 1664],
  [94],
  [628, 1321],
  [708],
  [1693],
  [1879],
  [1674],
  [1186, 1575],
  [1341, 1718],
  [1103],
  [1045, 1433],
  [1086],
  [347, 402, 897],
  [484, 1603, 1615],
  [380, 1193],
  [594, 778],
  [67],
  [1747],
  [877, 1197],
  [119, 267, 1380],
  [222, 733],
  [50, 415],
  [406],
  [640, 1009],
  [37],
  [287, 400, 619],
  [1294],
  [293, 441, 1444, 1899],
  [650, 925],
  [552, 1090],
  [1797],
  [168, 1264],
  [1784],
  [730, 875, 1515, 1636],
  [1989],
  [686, 1214],
  [420],
  [219, 408, 1651],
  [292],
  [354, 512],
  [496, 1905],
  [530],
  [994],
  [1222],
  [250, 832],
  [799, 1224],
  [358, 1527],
  [1172, 1619, 1721],
  [1509],
  [153, 167, 474, 1028],
  [1538, 1959],
  [1129],
  [663],
  [203, 906],
  [508, 523, 1638],
  [1693],
  [1055],
  [272],
  [597, 1729],
  [1656, 1933],
  [1013],
  [651],
  [127, 1689, 1741],
  [543, 889],
  [527],
  [393, 1003],
  [1245],
  [1733],
  [1357, 1543],
  [221, 520, 1810],
  [727],
  [475, 1372, 1444],
  [1313],
  [1364],
  [1274],
  [652, 1098],
  [37, 273],
  [169, 1671],
  [1257],
  [96, 586, 1474, 1513],
  [593, 1069],
  [398, 444, 1937],
  [1684],
  [1328, 1631],
  [63, 582, 1284, 1637],
  [266, 1029, 1210],
  [928, 1376, 1629],
  [103, 846],
  [1733],
  [650, 847, 1902],
  [1269],
  [1754],
  [951, 1116, 1772],
  [1453],
  [126, 788],
  [1253, 1420, 1503],
  [228],
  [105],
  [1979],
  [446, 469],
  [1334],
  [492, 514, 1405, 1941],
  [1399],
  [147, 530, 1147],
  [270],
  [1263],
  [1976],
  [86],
  [66, 920],
  [1090, 1588],
  [79, 1619],
  [65, 1368],
  [112, 433],
  [506],
  [852],
  [1205, 1813],
  [4, 1542],
  [1767],
  [603, 717, 1094, 1340],
  [601, 1387],
  [242, 779, 1677],
  [872],
  [485, 540],
  [258],
  [499],
  [1382, 1906],
  [1305],
  [173],
  [1389, 1589],
  [1308],
  [77, 794, 1477],
  [821, 1317],
  [375, 551],
  [571, 1843],
  [564, 1094, 1251],
  [1590],
  [210, 632],
  [59, 265, 1436, 1872],
  [1310],
  [774, 1511],
  [141, 736],
  [1128, 1799],
  [1181, 1833],
  [901, 1558],
  [1846, 1906],
  [1981],
  [785],
  [625, 703],
  [581],
  [1262],
  [519, 748, 894],
  [0, 105, 1851, 1979],
  [586, 721],
  [640],
  [1544],
  [263, 850, 1279],
  [890],
  [1336],
  [637, 940],
  [568],
  [1383, 1449],
  [1297],
  [302, 1187, 1686, 1830],
  [1553, 1658, 1725, 1822],
  [1821],
  [462, 1508],
  [145, 737, 1027, 1947],
  [236, 999],
  [111],
  [545, 814],
  [1349, 1773, 1969],
  [419],
  [1069, 1384, 1946],
  [1410],
  [288, 1862, 1919],
  [136, 195, 1739],
  [939, 1366],
  [1623],
  [1247, 1650, 1949],
  [231, 263],
  [1422],
  [1676],
  [513, 1361, 1852],
  [90, 368, 517, 751],
  [550],
  [344, 1252],
  [482, 1968],
  [1164, 1355],
  [595],
  [1056, 1290, 1634],
  [728, 861, 1884],
  [64, 481, 629],
  [294, 1825],
  [1250],
  [1373, 1732],
  [1162],
  [1572, 1615],
  [323, 1265],
  [760],
  [892],
  [996],
  [506, 747, 1198, 1545],
  [5, 313],
  [1082, 1304],
  [1137, 1339],
  [112, 669, 1351],
  [421],
  [847],
  [1298, 1463],
  [720],
  [146, 478, 1307],
  [675, 1390],
  [1475, 1950],
  [904],
  [45, 72, 1815, 1954],
  [602, 1594],
  [106, 445, 1863, 1952],
  [1495],
  [918, 1925],
  [829],
  [331, 639, 1281],
  [392, 880, 1032, 1422, 1673],
  [679, 976],
  [1830],
  [133],
  [219],
  [1175, 1280],
  [124, 274],
  [1980],
  [1624, 1717],
  [1560],
  [1352, 1410],
  [14, 812, 1968],
  [215, 1087, 1094],
  [873, 1413],
  [70, 571, 1701, 1943],
  [421, 671],
  [883, 1416],
  [579, 1870],
  [422, 1460],
  [573],
  [1274, 1864],
  [176, 893, 974],
  [1359, 1400],
  [287],
  [753, 786],
  [1685],
  [613, 1514],
  [164],
  [53, 612],
  [359, 1556],
  [298, 1927, 1955],
  [22, 486],
  [180],
  [232, 1078, 1189, 1869],
  [781],
  [291, 1599],
  [741, 844, 1316, 1577],
  [647, 1722],
  [1438],
  [1, 257],
  [2],
  [343, 520],
  [1009],
  [1443, 1869],
  [1025, 1206, 1250],
  [678],
  [246, 375],
  [1981],
  [325, 699, 781],
  [57, 1339],
  [1668],
  [1692, 1802, 1911, 1951],
  [954],
  [167, 1272],
  [117, 554, 690, 692],
  [1581],
  [1092, 1696],
  [388, 761],
  [684, 721],
  [419, 1608],
  [412, 1418, 1460],
  [59],
  [1176, 1571, 1979],
  [1387, 1771],
  [612],
  [84, 1084],
  [1553],
  [248, 1709],
  [676],
  [1603],
  [404, 1647],
  [943, 1471],
  [7, 351, 587, 1903],
  [1004, 1037],
  [1035, 1258],
  [1111, 1391],
  [807, 1108, 1115],
  [1309],
  [418],
  [674],
  [895, 1559],
  [437],
  [226],
  [1510],
  [679],
  [549, 979, 1650],
  [45, 1675, 1684],
  [1632],
  [636, 1590],
  [243, 1489],
  [902],
  [190],
  [883, 1661],
  [1636],
  [446, 1167],
  [427, 1396],
  [77, 457],
  [1497],
  [1070, 1498],
  [1499],
  [1781],
  [595, 633],
  [1502, 1782],
  [526, 1274],
  [60, 179],
  [1646],
  [1506],
  [446, 911, 1978],
  [1094, 1344, 1805],
  [1227, 1979],
  [892, 1483],
  [1318],
  [334, 360, 1642],
  [251, 311, 1258],
  [351, 1426],
  [1212, 1580],
  [296, 570, 755],
  [1901],
  [83, 439, 457],
  [259],
  [806, 1043, 1566],
  [764],
  [1912],
  [431],
  [778],
  [54, 292, 1525],
  [104, 1526],
  [1225, 1527],
  [15, 1683, 1794],
  [498],
  [62],
  [270, 706],
  [1942],
  [443],
  [521, 754],
  [331, 722, 952, 1551],
  [1008],
  [517, 729, 1667],
  [1229],
  [273, 1582],
  [324, 782],
  [628],
  [983, 1295, 1755],
  [1247],
  [837, 1333],
  [1380, 1704],
  [456, 801, 1717, 1993],
  [1555],
  [1745],
  [1634],
  [466, 1982],
  [1535],
  [212, 1594, 1613],
  [276, 1342, 1466],
  [674, 782, 934],
  [341, 1014, 1547],
  [1429],
  [1787],
  [836, 1322],
  [1015, 1480],
  [1111, 1409],
  [1561],
  [768],
  [1563, 1567],
  [1847],
  [1743],
  [624, 1520],
  [110, 850, 1563],
  [128, 861],
  [1569],
  [1125, 1769],
  [1462],
  [898, 1375],
  [1846],
  [948, 952, 1081, 1106, 1927],
  [1186],
  [114],
  [1133, 1436],
  [1821],
  [593, 947],
  [610, 1515],
  [912, 1455],
  [1539],
  [49, 280, 363, 1779],
  [545, 1902],
  [937],
  [408, 1017, 1605],
  [550, 1097, 1127],
  [1288],
  [1307, 1823],
  [1314, 1488],
  [301],
  [599],
  [777],
  [1394, 1552],
  [1665],
  [1909],
  [214],
  [1703],
  [411, 448, 1435],
  [1600],
  [1822],
  [1816],
  [151, 1192, 1469, 1797, 1967],
  [1688],
  [1586],
  [19, 401, 1092],
  [130, 1770],
  [1459, 1654],
  [1074, 1728],
  [1031],
  [178, 1724],
  [831],
  [773, 1552],
  [85, 556, 566],
  [1192, 1375],
  [849, 875, 1917],
  [1791],
  [821],
  [1226, 1289],
  [1620, 1832],
  [1173],
  [546, 1067, 1754],
  [1356, 1652],
  [170, 867, 1408, 1868],
  [409, 1629],
  [258, 471],
  [77, 735],
  [1130],
  [1265, 1625],
  [384, 1808],
  [1051, 1262, 1784, 1833],
  [677, 1487, 1709],
  [69],
  [1368, 1549],
  [1635],
  [1212, 1493],
  [1263, 1990],
  [871, 982, 1233],
  [842, 1639],
  [775, 1843],
  [1010],
  [646, 1512, 1816],
  [534, 1017, 1929],
  [130, 1820],
  [1863],
  [197, 1105, 1505, 1719],
  [919, 1470, 1975],
  [802],
  [1001, 1676],
  [1357, 1485, 1984],
  [336, 1216, 1888],
  [583, 1623, 1652],
  [1745],
  [1139, 1608],
  [855, 1122],
  [395, 1238],
  [743, 1812],
  [429, 962, 1342],
  [1792],
  [1764],
  [644, 1492],
  [33, 1726],
  [930, 1111],
  [767, 1179, 1913],
  [357, 1061, 1595],
  [32, 548, 714],
  [560, 1537],
  [562, 1156, 1450],
  [571, 923],
  [1674],
  [1256],
  [600],
  [252, 1400, 1673, 1901],
  [507, 1185, 1670],
  [1486],
  [618, 1360, 1649],
  [61, 541, 1299],
  [86, 249],
  [513, 1700],
  [559, 1920],
  [199],
  [1895],
  [165, 1528, 1988],
  [30, 1261, 1486],
  [1006, 1170, 1425, 1980],
  [505, 1341, 1720],
  [477, 1977],
  [863, 1604],
  [1241],
  [686],
  [1785, 1890],
  [1451],
  [197, 1183, 1234],
  [735, 913, 937],
  [112],
  [1456, 1921],
  [174, 1768],
  [850],
  [1699],
  [500, 1679],
  [1414],
  [817],
  [56, 223, 1598],
  [628, 1545],
  [254],
  [390, 856, 1005],
  [863],
  [1815],
  [631, 1467, 1632],
  [538, 888],
  [1742],
  [282],
  [171],
  [1714],
  [1113],
  [1091, 1729],
  [1408, 1546],
  [1187],
  [1646, 1719, 1735],
  [1152, 1686],
  [805, 1226],
  [180, 445, 1437],
  [942],
  [614, 1611],
  [1342],
  [156, 402, 512, 1662],
  [718],
  [1609, 1827, 1881],
  [288, 1237, 1716],
  [232],
  [1863],
  [88, 410, 878, 1373],
  [856, 1246, 1267],
  [966],
  [1719],
  [419],
  [22, 363],
  [93, 1049],
  [475, 1354],
  [427, 503],
  [1241],
  [1711, 1853],
  [521, 822, 1021, 1565],
  [1989],
  [753, 1548, 1653],
  [649],
  [245, 494, 1196, 1810],
  [172, 720],
  [581],
  [1768],
  [192, 773, 818],
  [215, 687],
  [897],
  [1270, 1622, 1945],
  [1542],
  [344],
  [1117],
  [449, 492],
  [511, 654, 1938],
  [209, 275],
  [547],
  [362, 667],
  [35],
  [276, 646, 1660],
  [925],
  [847, 1875],
  [771, 1296],
  [1697, 1750, 1768, 1780],
  [1570, 1896],
  [1607, 1770],
  [279, 916, 1463],
  [1271],
  [1349, 1894],
  [209],
  [160, 463, 491, 790],
  [282],
  [1952],
  [1952],
  [1583],
  [1768],
  [1500, 1800],
  [1502],
  [381, 898],
  [147, 435, 655, 987, 1211, 1631],
  [1691, 1792],
  [303],
  [40, 68, 1557],
  [1788],
  [515, 941, 1161],
  [397, 997, 1158],
  [828, 1617],
  [758, 1058, 1104, 1659, 1785],
  [272],
  [1528],
  [9],
  [792, 1933],
  [651, 1209, 1603],
  [977, 1021],
  [562, 1167, 1320],
  [216, 348, 1781],
  [926, 1859],
  [885, 1034, 1451],
  [409],
  [257],
  [629, 1508],
  [532],
  [851],
  [865, 1630],
  [1809],
  [1248, 1747],
  [1911],
  [1657],
  [424, 1100, 1294],
  [1906, 1937],
  [731, 1393, 1708],
  [810, 830, 1602, 1642],
  [271, 1817],
  [199, 798, 1818],
  [1058],
  [1644],
  [68, 1343, 1578, 1904],
  [1342, 1601],
  [1589],
  [60],
  [1371],
  [683, 935],
  [93, 1728],
  [326, 555],
  [882],
  [1341, 1402],
  [1831],
  [1620],
  [712, 1321, 1631],
  [1834],
  [516],
  [670],
  [1837],
  [825],
  [903],
  [1840],
  [1841],
  [1145],
  [264, 332, 668, 1165, 1312, 1640],
  [165, 241, 1068],
  [1007],
  [1323, 1573],
  [640, 1564],
  [632],
  [669, 774, 912, 1034],
  [1001, 1873],
  [1330],
  [1361],
  [402, 1742],
  [725],
  [676, 1908],
  [1123],
  [418, 460],
  [140, 271, 1178],
  [1801],
  [793],
  [306, 340],
  [1353],
  [1395, 1645, 1731],
  [672, 800, 1420],
  [969, 1153],
  [430, 1115],
  [980],
  [136, 1624],
  [428, 956, 1433, 1443],
  [534, 970, 1417],
  [936],
  [1316],
  [1850],
  [337],
  [1766],
  [1876],
  [1020, 1877],
  [365, 1878],
  [742, 1184],
  [777, 809],
  [394, 1728],
  [448],
  [33],
  [863, 1166, 1369],
  [365, 899, 960],
  [327, 686],
  [46, 339, 1061],
  [78, 1651],
  [1889],
  [1691],
  [708],
  [1892],
  [980, 1941, 1947],
  [1773],
  [544, 742, 1682],
  [285, 1769],
  [378, 1993],
  [1981],
  [220, 1206],
  [382, 390, 1022],
  [1517, 1673],
  [1132, 1268, 1584, 1959],
  [1472],
  [961, 1821],
  [836, 994, 1219],
  [1304, 1323, 1814],
  [755],
  [1073, 1855],
  [31, 1596],
  [1114, 1915],
  [709, 1451, 1811],
  [60, 1522],
  [1664],
  [24, 949],
  [1910],
  [222],
  [1616],
  [413],
  [204, 268, 1353],
  [1178, 1680],
  [1696],
  [26],
  [768],
  [405, 1924],
  [79, 1050, 1092, 1397],
  [1926],
  [1430, 1574],
  [376, 765],
  [1643, 1947],
  [828, 886],
  [11, 1960],
  [59, 136],
  [472, 1238, 1796],
  [431],
  [938, 1071],
  [828, 919],
  [532, 1260, 1814],
  [910, 1759],
  [704],
  [505],
  [1280, 1893],
  [248, 641, 1532],
  [1414],
  [325],
  [1754],
  [852, 1351],
  [1345, 1893, 1929],
  [35],
  [121, 858, 1037, 1357],
  [1391],
  [1451],
  [1395, 1777, 1778],
  [1953],
  [1393],
  [1430],
  [63, 118],
  [464],
  [572, 1011],
  [1229, 1902],
  [1931],
  [1014],
  [1962],
  [380],
  [754],
  [300],
  [624],
  [1603],
  [1365, 1411],
  [1349],
  [450],
  [107, 608],
  [1045],
  [23, 389, 673],
  [1974],
  [361, 968, 1647, 1994],
  [1134, 1285],
  [7, 1044, 1118, 1687],
  [1507],
  [1277, 1330, 1462, 1509],
  [466, 1007, 1407, 1685],
  [707, 1324, 1447, 1898],
  [348, 1550],
  [478, 1061],
  [905, 1650],
  [874],
  [765, 953],
  [297],
  [112, 1683],
  [555, 1051, 1213, 1744],
  [1637],
  [1991],
  [31, 133, 821],
  [1546, 1897],
  [603, 1975],
  [325],
  [1996],
  [14, 1093],
  [1002],
  [708],
]

// let input = [
//   [2], // 0 - true
//   [1], // 1 - false
//   [0, 3, 4], // 2 - true
//   [2, 4], // 3 - true
//   [2, 3, 6], // 4 - true
//   [6], // 5 - false
//   [5], // 6 - false
// ]

input = [
  [2], // 0 - true
  [1], // 1 - false
  [0, 3, 4], // 2 - true
  [2, 4], // 3 - true
  [2, 3, 6], // 4 - true
  [6], // 5 - true
  [4, 5], // 6 - true
]
let mergedWith = []

function mergeArraysWithoutDuplicates(i1, i2) {
  mergedWith[i1].push(i2)
  input[i2].forEach(element => {
    if(input[i1].indexOf(element) === -1) {
      input[i1].push(element)
    }
  })
  if(i1 !== i2) {
    input[i2] = []
  }
  input[i1].sort()
}

function mergePrograms() {
  input.forEach((program, key) => {
    program.forEach(group => {
      if(mergedWith[key] === undefined) {
        mergedWith[key] = []
      }
      if(key !== group && mergedWith[key].indexOf(group) === -1) {
        mergeArraysWithoutDuplicates(key, group)
      }
    })
  })
}

function countZeros() {
  let containsZero = 0
  input.forEach((program, key) => {
    if(key === 0 || program.indexOf(0) !== -1) {
      containsZero++
    }
  })
  console.log("containsZero", containsZero)
  return containsZero
}

function removeDuplicates() {
  let newInput = []
  input.forEach((program, key) => {
    let programString = program.join("-")
    if(newInput.indexOf(programString) === -1) {
      newInput.push(programString)
    } else {
      input[key] = []
    }
  })
}

let containsZero = 1
let prevContainsZero = 0
let i = 0
// while(prevContainsZero < containsZero) {
while(i < 15) {
  mergePrograms()
  // removeDuplicates()
  // prevContainsZero = containsZero
  // containsZero = countZeros()
  i++
}

console.log('input', input)

let groups = []
input.forEach(program => {
  let programString = program.join("-")
  if(groups.indexOf(programString) === -1) {
    groups.push(programString)
  }
})

console.log("groups", groups.sort())
console.log("groups.length", groups.length)

// 187 too high
// 182 too high