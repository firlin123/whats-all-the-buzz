(function () {
  var groups = [
    {
      name: "Cherry Bee",
      subGroups: [
        {
          name: "Cherry Bees",
          items: [
            "2072824.jpg", "2197995.webp", "2731564.webp", "3157553.webp", "3230759.webp", "3483910.webp", "3771284.webp", "3792852.webp", "3868539.webp",
            "57008.webp", "752351.webp", "2112660.webp", "2664648.webp", "273798.webp", "3181531.webp", "3477593.webp", "3692259.webp", "3782830.webp",
            "3821932.webp", "515131.gif", "751297.webp"
          ]
        }
      ],
      chanceMultiplier: 1.5
    },
    {
      name: "Main Cast",
      subGroups: [
        {
          name: "Flutterbees",
          items: [
            "2788348.webp", "3796276.jpg", "568374.webp", "2490042.webp", "564260.gif", "569948.gif", "564228.gif", "2445739.jpg", "1274988.webp",
            "994224.webp", "564928.webp", "2011431.webp", "2961342.webp", "1857258.webp", "2226327.webp", "581896.webp", "3355385.webp", "574103.webp",
            "2986158.webp", "580358.webp", "1866999.webp", "657265.gif", "3818894.webp", "2820671.jpg", "1959185.webp", "566446.webp", "1546506.webp",
            "12983.webp", "3808286.webp", "584188.gif", "566860.webp", "1032514.webp", "2802465.webp", "3854312.webp", "1870948.jpg", "291166.jpg",
            "3441376.webp", "3529429.webp", "1870935.jpg", "43987.webp", "1870934.jpg", "3168608.webp", "2098193.png", "1870932.jpg", "1880441.webp",
            "2803946.jpg", "1869481.webp", "2210775.png", "1145002.webp", "970836.webp",
          ],
          chanceMultiplier: 2.2
        },
        {
          name: "Princesses",
          items: ["2936261.webp", "3807229_1.webp", "3807229_2.webp", "3810383.webp", "525722.webp", "5009.jpg", "1218329.webp", "3556383.jpg"]
        },
        {
          name: "Bee Twilights",
          items: ["2153131.webp", "3522502.jpg", "3594126.webp", "1467675.webp"]
        },
        {
          name: "Beenkie Pies",
          items: ["1181019.webp", "3380.webp", "3516175.webp", "3189176.webp"]
        },
        {
          name: "Raridash bees",
          items: ["1865705.webp", "823279.webp", "2946808.webp"]
        }
      ],
      chanceMultiplier: 1.5
    },
    {
      name: "Secondary/BG ponies",
      subGroups: [
        {
          name: "Derpbees",
          items: ["3562264.webp", "3486421.jpg", "2718749.webp", "8511.webp"]
        },
        {
          name: "Cheeribees",
          items: ["2110822.webp", "3695976.webp", "1350087.jpg"]
        },
        {
          name: "Beelies",
          items: ["391826.webp", "391825.webp", "3721067.webp"]
        },
        {
          name: "Other (Starlight, Trixie, Flitter, IRL pony) bees",
          items: ["1861288.webp", "2507207.webp", "2067934.webp", "3442701.jpg"]
        }
      ]
    },
    {
      name: "OCs",
      subGroups: [
        {
          name: "BeeFilly's (RIP) anonbeelies",
          items: [
            "3858064.webp", "3536229.webp", "3542896.webp", "3566934.webp", "3133147.webp", "3535888.webp", "3221538_1.webp", "3221538_2.webp", "3538358.webp",
            "3296873.webp", "3566906.jpg", "3292482.webp", "3352648.webp", "3292308.webp", "3262334.webp", "3300378.webp", "2998402.webp", "3345426.webp",
            "2910708.webp", "3326991.webp", "3299706.webp", "3298834.webp", "3751259.webp", "3118085.webp", "3274200.webp", "3473640.webp", "3252308.webp",
            "3269640.webp"
          ],
          chanceMultiplier: 0.7
        },
        {
          name: "Other OC bees",
          items: [
            "3399257.webp", "2465040.webp", "303358.jpg", "552055.webp", "1027330.webp", "3485163.webp", "3362066.webp", "2592845.webp", "2907872.webp",
            "3530702.webp", "1552230.webp", "1562384.webp", "2919700.webp", "3698596.webp", "3702670.webp"
          ]
        }
      ],
      chanceMultiplier: 0.5
    }
  ];
  window.groups = groups;

  function getWeightedIndex(list) {
    var totalWeight = 0;
    var weights = [];

    for (var i = 0; i < list.length; i++) {
      var weight = typeof list[i].chanceMultiplier === 'number' ? list[i].chanceMultiplier : 1;
      weights.push(weight);
      totalWeight += weight;
    }

    var randomNum = Math.random() * totalWeight;
    for (var j = 0; j < weights.length; j++) {
      if (randomNum < weights[j]) {
        return j;
      }
      randomNum -= weights[j];
    }
    return list.length - 1;
  }

  var lastGroupIdx = null;
  var lastSubGroupIdx = null;
  var lastItemIdx = null;

  try {
    var storedStrs = (localStorage.getItem('last_image_ids') || '').split(',');
    if (storedStrs[0]) {
      lastGroupIdx = parseInt(storedStrs[0], 10);
    }
    if (storedStrs[1]) {
      lastSubGroupIdx = parseInt(storedStrs[1], 10);
    }
    if (storedStrs[2]) {
      lastItemIdx = parseInt(storedStrs[2], 10);
    }
  } catch (e) { }

  var groupIdx = getWeightedIndex(groups);
  var subGroups = groups[groupIdx].subGroups;
  var subGroupIdx = getWeightedIndex(subGroups);
  var subGroup = subGroups[subGroupIdx];
  var items = subGroup.items;
  var availableItemIndices = [];
  if (lastGroupIdx === groupIdx && lastSubGroupIdx === subGroupIdx) {
    for (var i = 0; i < items.length; i++) {
      if (items.length > 1 && i === lastItemIdx) {
        continue;
      }
      availableItemIndices.push(i);
    }
  } else {
    for (var i = 0; i < items.length; i++) {
      availableItemIndices.push(i);
    }
  }

  var itemIdx = availableItemIndices[Math.floor(Math.random() * availableItemIndices.length)];
  try {
    localStorage.setItem('last_image_ids', [groupIdx, subGroupIdx, itemIdx].join(','));
  } catch (e) { }

  var imgEl = document.getElementById('random-image');
  if (imgEl) {
    imgEl.src = '../img/' + items[itemIdx];
  }
})();