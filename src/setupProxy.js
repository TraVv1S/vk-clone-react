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
    firstName: "Sergey",
    lastName: "Sergeev",
    email: "sergey@pcht.com",
    id: 555555,
    avatarUrl: "/img/friend-ava5.jpg",
  },
  {
    firstName: "Alexandr",
    lastName: "Plekhanovбкоу",
    email: "alexandr@pcht.com",
    id: 666666,
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
};