export const exampleStates = {
  roundEndState: {
    chips: [
      {
        level: 1,
        player: null,
        plundered: false,
      },
      {
        level: 1,
        player: null,
        plundered: true,
      },
      {
        level: 1,
        player: null,
        plundered: false,
      },
      {
        level: 1,
        player: null,
        plundered: true,
      },
      {
        level: 1,
        player: null,
        plundered: false,
      },
      {
        level: 1,
        player: null,
        plundered: false,
      },
      {
        level: 1,
        player: null,
        plundered: true,
      },
      {
        level: 1,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 2,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 3,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
      {
        level: 4,
        player: null,
        plundered: false,
      },
    ],
    players: [
      {
        index: 0,
        name: "Derek",
        position: 1,
        isCurrentTurn: true,
        plunder: [1, 1, 1],
        willTurnBack: true,
        hasTurnedBack: true,
        finished: true,
        money: 0,
        drownedLastRound: false,
      },
      {
        index: 1,
        name: "John",
        position: 1,
        isCurrentTurn: true,
        plunder: [],
        willTurnBack: true,
        hasTurnedBack: true,
        finished: true,
        money: 0,
        drownedLastRound: false,
      },
      {
        index: 2,
        name: "Mike",
        position: 2,
        isCurrentTurn: true,
        plunder: [],
        willTurnBack: true,
        hasTurnedBack: true,
        finished: true,
        money: 0,
        drownedLastRound: true,
      },
    ],
    gameState: "moved",
    currentPlayerId: 0,
    rolled: 2,
    air: {
      max: 25,
      current: 17,
    },
    round: {
      current: 1,
      max: 3,
    },
    availablePlunder: {
      "1": [0, 0, 1, 1, 2, 2, 3, 3],
      "2": [4, 4, 5, 5, 6, 6, 7, 7],
      "3": [8, 8, 9, 9, 10, 10, 11, 11],
      "4": [12, 12, 13, 13, 14, 14, 15, 15],
    },
  },
  lastTurnState: {
    chips: [
      {level: 1, player: null, plundered: false},
      {level: 1, player: null, plundered: false},
      {level: 1, player: null, plundered: false},
      {
        level: 1,
        player: {
          index: 0,
          name: "Derek",
          position: 3,
          isCurrentTurn: true,
          plunder: [1],
          willTurnBack: false,
          hasTurnedBack: false,
          finished: false,
          money: 0,
          drownedLastRound: false,
        },
        plundered: true,
      },
      {level: 1, player: null, plundered: false},
      {level: 1, player: null, plundered: false},
      {level: 1, player: null, plundered: false},
      {level: 1, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
    ],
    players: [
      {
        index: 0,
        name: "Derek",
        position: 3,
        isCurrentTurn: true,
        plunder: [1],
        willTurnBack: false,
        hasTurnedBack: false,
        finished: false,
        money: 0,
        drownedLastRound: false,
      },
    ],
    gameState: "playing",
    currentPlayerId: 0,
    rolled: 4,
    air: {max: 25, current: 0},
    round: {current: 1, max: 3},
    availablePlunder: {
      "1": [0, 0, 1, 1, 2, 2, 3, 3],
      "2": [4, 4, 5, 5, 6, 6, 7, 7],
      "3": [8, 8, 9, 9, 10, 10, 11, 11],
      "4": [12, 12, 13, 13, 14, 14, 15, 15],
    },
  },
  turnBackState: {
    chips: [
      {level: 1, player: null, plundered: false},
      {level: 1, player: null, plundered: false},
      {level: 1, player: null, plundered: true},
      {level: 1, player: null, plundered: true},
      {level: 1, player: null, plundered: false},
      {
        level: 1,
        player: {
          index: 1,
          name: "john",
          position: 5,
          isCurrentTurn: true,
          plunder: [1, 1],
          willTurnBack: true,
          hasTurnedBack: false,
          finished: false,
          money: 0,
          drownedLastRound: false,
        },
        plundered: true,
      },
      {level: 1, player: null, plundered: false},
      {
        level: 1,
        player: {
          index: 0,
          name: "derek",
          position: 7,
          isCurrentTurn: false,
          plunder: [1, 1],
          willTurnBack: true,
          hasTurnedBack: true,
          finished: false,
          money: 0,
          drownedLastRound: false,
        },
        plundered: true,
      },
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 2, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 3, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
      {level: 4, player: null, plundered: false},
    ],
    players: [
      {
        index: 0,
        name: "derek",
        position: 7,
        isCurrentTurn: false,
        plunder: [1, 1],
        willTurnBack: true,
        hasTurnedBack: true,
        finished: false,
        money: 0,
        drownedLastRound: false,
      },
      {
        index: 1,
        name: "john",
        position: 5,
        isCurrentTurn: true,
        plunder: [1, 1],
        willTurnBack: true,
        hasTurnedBack: false,
        finished: false,
        money: 0,
        drownedLastRound: false,
      },
    ],
    gameState: "moved",
    currentPlayerId: 1,
    rolled: {total: 2, reducedBy: 2, actual: 0},
    air: {max: 25, current: 21},
    round: {current: 1, max: 3},
    availablePlunder: {
      "1": [0, 0, 1, 1, 2, 2, 3, 3],
      "2": [4, 4, 5, 5, 6, 6, 7, 7],
      "3": [8, 8, 9, 9, 10, 10, 11, 11],
      "4": [12, 12, 13, 13, 14, 14, 15, 15],
    },
  },
  outOfAirState: {
    chips: [
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: true},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: true},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: true},
      {levels: [2], player: null, plundered: true},
      {
        levels: [2],
        player: {
          index: 0,
          name: "dere",
          position: 9,
          isCurrentTurn: true,
          plunder: [[1], [1], [1], [2], [2]],
          willTurnBack: false,
          hasTurnedBack: false,
          finished: false,
          money: 0,
          drownedLastRound: false,
          performedTurnAction: false,
        },
        plundered: true,
      },
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
    ],
    players: [
      {
        index: 0,
        name: "dere",
        position: 9,
        isCurrentTurn: true,
        plunder: [[1], [1], [1], [2], [2]],
        willTurnBack: false,
        hasTurnedBack: false,
        finished: false,
        money: 0,
        drownedLastRound: false,
        performedTurnAction: false,
      },
    ],
    gameState: "rolled",
    currentPlayerId: 0,
    rolled: {total: 4, reducedBy: 5, actual: 0},
    air: {max: 25, current: -4},
    round: {current: 1, max: 3},
    availablePlunder: {
      "1": [0, 0, 1, 1, 2, 2, 3, 3],
      "2": [4, 4, 5, 5, 6, 6, 7, 7],
      "3": [8, 8, 9, 9, 10, 10, 11, 11],
      "4": [12, 12, 13, 13, 14, 14, 15, 15],
    },
  },
  endOfChipsState: {
    chips: [
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [1], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [2], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [3], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {
        levels: [4],
        player: {
          index: 0,
          name: "asd",
          position: 25,
          isCurrentTurn: false,
          plunder: [],
          willTurnBack: false,
          hasTurnedBack: false,
          finished: false,
          money: 0,
          drownedLastRound: false,
          performedTurnAction: false,
        },
        plundered: false,
      },
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {levels: [4], player: null, plundered: false},
      {
        levels: [4],
        player: {
          index: 1,
          name: "asd",
          position: 30,
          isCurrentTurn: true,
          plunder: [],
          willTurnBack: false,
          hasTurnedBack: false,
          finished: false,
          money: 0,
          drownedLastRound: false,
          performedTurnAction: false,
        },
        plundered: false,
      },
      {levels: [4], player: null, plundered: false},
    ],
    players: [
      {
        index: 0,
        name: "asd",
        position: 25,
        isCurrentTurn: false,
        plunder: [],
        willTurnBack: false,
        hasTurnedBack: false,
        finished: false,
        money: 0,
        drownedLastRound: false,
        performedTurnAction: false,
      },
      {
        index: 1,
        name: "asd",
        position: 30,
        isCurrentTurn: true,
        plunder: [],
        willTurnBack: false,
        hasTurnedBack: false,
        finished: false,
        money: 0,
        drownedLastRound: false,
        performedTurnAction: false,
      },
    ],
    gameState: "moved",
    currentPlayerId: 1,
    rolled: {total: 6, reducedBy: 0, actual: 6},
    air: {max: 25, current: 25},
    round: {current: 1, max: 3},
    availablePlunder: {
      "1": [0, 0, 1, 1, 2, 2, 3, 3],
      "2": [4, 4, 5, 5, 6, 6, 7, 7],
      "3": [8, 8, 9, 9, 10, 10, 11, 11],
      "4": [12, 12, 13, 13, 14, 14, 15, 15],
    },
  },
  endGameState: {
    "chips": [{"levels": [1], "player": null, "plundered": false}, {
      "levels": [1],
      "player": {
        "index": 1,
        "name": "Johnathon",
        "position": 1,
        "isCurrentTurn": true,
        "plunder": [[1]],
        "willTurnBack": false,
        "hasTurnedBack": false,
        "finished": false,
        "money": 100,
        "drownedLastRound": false,
        "performedTurnAction": false
      },
      "plundered": true
    }, {"levels": [1], "player": null, "plundered": true}, {
      "levels": [1],
      "player": {
        "index": 0,
        "name": "Derek",
        "position": 3,
        "isCurrentTurn": false,
        "plunder": [[1], [1]],
        "willTurnBack": false,
        "hasTurnedBack": false,
        "finished": false,
        "money": 10,
        "drownedLastRound": false,
        "performedTurnAction": false
      },
      "plundered": true
    }, {"levels": [1], "player": null, "plundered": false}, {
      "levels": [1],
      "player": null,
      "plundered": false
    }, {"levels": [1], "player": null, "plundered": false}, {
      "levels": [1],
      "player": null,
      "plundered": false
    }, {"levels": [2], "player": null, "plundered": false}, {
      "levels": [2],
      "player": null,
      "plundered": false
    }, {"levels": [2], "player": null, "plundered": false}, {
      "levels": [2],
      "player": null,
      "plundered": false
    }, {"levels": [2], "player": null, "plundered": false}, {
      "levels": [2],
      "player": null,
      "plundered": false
    }, {"levels": [2], "player": null, "plundered": false}, {
      "levels": [2],
      "player": null,
      "plundered": false
    }, {"levels": [3], "player": null, "plundered": false}, {
      "levels": [3],
      "player": null,
      "plundered": false
    }, {"levels": [3], "player": null, "plundered": false}, {
      "levels": [3],
      "player": null,
      "plundered": false
    }, {"levels": [3], "player": null, "plundered": false}, {
      "levels": [3],
      "player": null,
      "plundered": false
    }, {"levels": [3], "player": null, "plundered": false}, {
      "levels": [3],
      "player": null,
      "plundered": false
    }, {"levels": [4], "player": null, "plundered": false}, {
      "levels": [4],
      "player": null,
      "plundered": false
    }, {"levels": [4], "player": null, "plundered": false}, {
      "levels": [4],
      "player": null,
      "plundered": false
    }, {"levels": [4], "player": null, "plundered": false}, {
      "levels": [4],
      "player": null,
      "plundered": false
    }, {"levels": [4], "player": null, "plundered": false}, {"levels": [4], "player": null, "plundered": false}],
    "players": [{
      "index": 0,
      "name": "Derek",
      "position": 3,
      "isCurrentTurn": false,
      "plunder": [[1], [1]],
      "willTurnBack": false,
      "hasTurnedBack": false,
      "finished": false,
      "money": 100,
      "drownedLastRound": false,
      "performedTurnAction": false
    },
    {
      "index": 1,
      "name": "Johnathon",
      "position": 1,
      "isCurrentTurn": true,
      "plunder": [[1]],
      "willTurnBack": false,
      "hasTurnedBack": false,
      "finished": false,
      "money": 50,
      "drownedLastRound": false,
      "performedTurnAction": false
    },
    {
      "index": 2,
      "name": "Peter Parker",
      "position": 4,
      "isCurrentTurn": true,
      "plunder": [[1]],
      "willTurnBack": false,
      "hasTurnedBack": false,
      "finished": false,
      "money": 50,
      "drownedLastRound": false,
      "performedTurnAction": false
    },
      {
        "index": 3,
        "name": "Peter Porker",
        "position": 4,
        "isCurrentTurn": true,
        "plunder": [[1]],
        "willTurnBack": false,
        "hasTurnedBack": false,
        "finished": false,
        "money": 110,
        "drownedLastRound": false,
        "performedTurnAction": false
      }
    ],
    "gameState": "playing",
    "currentPlayerId": 1,
    "rolled": {"total": 2, "reducedBy": 1, "actual": 1},
    "air": {"max": 23, "current": 0},
    "round": {"current": 3, "max": 3},
    "availablePlunder": {
      "1": [0, 0, 1, 1, 2, 2, 3, 3],
      "2": [4, 4, 5, 5, 6, 6, 7, 7],
      "3": [8, 8, 9, 9, 10, 10, 11, 11],
      "4": [12, 12, 13, 13, 14, 14, 15, 15]
    }
  }
};
