const friends = [
  {
    firstName: "Valentin",
    lastName: "Ryabkou",
    email: "valentin@pcht.com",
    id: 111111,
    avatarUrl: "/img/friend-ava.jpg",
  },
  {
    firstName: "Ruslan",
    lastName: "Gaifullin",
    email: "gaifullin@pcht.com",
    id: 222222,
    avatarUrl: "/img/friend-ava2.jpg",
  },
  {
    firstName: "Sergey",
    lastName: "Zelenuk",
    email: "zeleniy@pcht.com",
    id: 333333,
    avatarUrl: "/img/friend-ava3.jpg",
  },
  {
    firstName: "Anastasia",
    lastName: "Losinets",
    email: "anastasia@pcht.com",
    id: 444444,
    avatarUrl: "/img/friend-ava4.jpg",
  },
  {
    firstName: "Sergey",
    lastName: "Sergeev",
    email: "sergey@pcht.com",
    id: 555555,
    avatarUrl: "/img/friend-ava5.jpg",
  },
  {
    firstName: "Alexandr",
    lastName: "Plekhanov",
    email: "alexandr@pcht.com",
    id: 666666,
    avatarUrl: "/img/friend-ava6.jpg",
  },
  {
    firstName: "Arkadiy",
    lastName: "Ukupnik",
    email: "Ukupnik@pcht.com",
    id: 101010,
    avatarUrl: "/img/friend-ava3.jpg",
  },
  {
    firstName: "Lev",
    lastName: "Koshkins",
    email: "Koshkins@pcht.com",
    id: 121212,
    avatarUrl: "/img/friend-ava4.jpg",
  },
  {
    firstName: "Peter",
    lastName: "Schmeichel",
    email: "Schmeichel@pcht.com",
    id: 131313,
    avatarUrl: "/img/friend-ava5.jpg",
  },
  {
    firstName: "Edwin",
    lastName: "Van der Sar",
    email: "vandersar@pcht.com",
    id: 141414,
    avatarUrl: "/img/friend-ava6.jpg",
  }
];

const onlineFriends = [
  {
    firstName: "Ivan",
    lastName: "Korokhov",
    email: "ivan@core.com",
    id: 777777,
    avatarUrl:
      "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "Stepan",
    lastName: "Orlov",
    email: "step@core.com",
    id: 888888,
    avatarUrl:
      "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "Fedor",
    lastName: "Konyukhov",
    email: "fedor@core.com",
    id: 999999,
    avatarUrl:
      "https://sun9-9.userapi.com/impg/JcRINl6L_LOzCG4jkS8M9yl9Gb2zmTHqYgep_w/-D9IBlVz5VY.jpg?size=956x960&quality=95&sign=7aa75811cb07e8e3fca9edea803d7363&type=album",
  },
  {
    firstName: "Ruslan",
    lastName: "Gaifullin",
    email: "gaifullin@pcht.com",
    id: 222222,
    avatarUrl: "/img/friend-ava2.jpg",
  },
  {
    firstName: "Sergey",
    lastName: "Zeleniuk",
    email: "zeleniy@pcht.com",
    id: 333333,
    avatarUrl: "/img/friend-ava3.jpg",
  },
  {
    firstName: "Anastasia",
    lastName: "Losinets",
    email: "anastasia@pcht.com",
    id: 444444,
    avatarUrl: "/img/friend-ava4.jpg",
  },
  {
    firstName: "Alexandr",
    lastName: "Plekhanov",
    email: "alexandr@pcht.com",
    id: 666666,
    avatarUrl: "/img/friend-ava6.jpg",
  }
];

const posts = [
  {
      "id": 300,
      "author_id": 222222,
      "repost_id": null,
      "time": "9 фев в 17:09",
      "text": ["Вышел!🥳🥳🥳🥳",
          "https://band.link/fz97p (по мере появления на площадках будет редактироваться)",
          "repost",
          "Всем хой!"],
      "media": {
          "audio": "#",
          "photo": "/img/post1-pic1.jpg",
          "link": "#"
      },
      "likes": 103,
      "comments": 22,
      "reposts": 13,
      "views": 123,
      "archived": false
  },
  {
      "id": 100,
      "author_id": 424242,
      "repost_id": null,
      "time": "7 фев в 17:09",
      "text": ["TRIUMPHANT - BREAK UP",
          "by 1994 production and РАМЕНКИ village",
          "https://www.instagram.com/1994product...",
          "",
          "Director: Sasha Nekrasov"],
      "media": {
          "video": "https://www.youtube.com/embed/Azi8ug35L4o?controls=0"
      },
      "likes": 1,
      "comments": 2,
      "reposts": 3,
      "views": 555,
      "archived": false
  },
  {
      "id": 200,
      "author_id": 222222,
      "repost_id": null,
      "time": "8 фев в 17:09",
      "text": ["АРХИВНЫЙ ПОСТ!!!"],
      "media": {
          "audio": "#",
          "photo": "/img/post1-pic1.jpg",
          "link": "#"
      },
      "likes": 3,
      "comments": 2,
      "reposts": 1,
      "views": 666,
      "archived": true
  },
  {
      "id": 201,
      "author_id": 424242,
      "repost_id": null,
      "time": "8 фев в 17:09",
      "text": ["ЕЩЕ ПОСТ!!!"],
      "likes": 0,
      "comments": 0,
      "reposts": 0,
      "views": 1,
      "archived": false
  }
  
]

module.exports = (app) => {
  app.get("/api2/users", (req, res) => {
    console.log("API called!", req.query, req.params);
    setTimeout(() => {
      if (req.query.another === "true") {
        return res.json(onlineFriends);
      }
      return res.json(friends);
    }, 1000);
  });

  app.get("/api2/posts", (req, res) => {
    console.log("API called!", req.query, req.params);
    setTimeout(() => {
      return res.json(posts);
    }, 1000);
  })
};