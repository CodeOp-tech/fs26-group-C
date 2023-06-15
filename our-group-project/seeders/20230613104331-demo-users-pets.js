"use strict";
var bcrypt = require("bcrypt");
const saltRounds = 10;


const makePassword = (pw) => {
  return new Promise(async rs => {
    let hash;
    hash = await bcrypt.hash(pw, saltRounds);
    return rs(hash);
  })
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {



    const seededUsers = [
      {
        username: "testerUsername",
        email: "tester@email.com",
        password: await makePassword("tester"),
        name: "testerName",
        surname: "testerSurname",
        date_of_birth: "2023-06-13",
        location: "CodeOp Country",
        avatar: "https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-funny-smiling-cartoon-monster-face-avatar-png-image_5584251.png"
      },
      {
        username: "loginUsername",
        email: "login@email.com",
        password: await makePassword("loginPassword"),
        name: "loginName",
        surname: "loginSurname",
        date_of_birth: "2023-06-13",
        location: "CodeOp Country",
        avatar: "https://w7.pngwing.com/pngs/816/721/png-transparent-chick-avatar-funny-thumbnail.png"
      },
      {
        username: "ihavesomanypets",
        email: "pets@email.com",
        password: await makePassword("pets"),
        name: "Petty",
        surname: "Mc Pettison",
        date_of_birth: "2007-02-23",
        location: "Pettyville",
        avatar: "https://i.fbcd.co/products/original/s221128-cat-head-e05-mainpreview-739cdff1e43d362f66989d28e978dcdf400fd71172d53447cb4e0a250debac6b.jpg"
      },
      {
        username: "adoptthemall",
        email: "adopt@email.com",
        password: await makePassword("adopt"),
        name: "A Dop",
        surname: "T",
        date_of_birth: "2007-02-23",
        location: "woofchesire",
        avatar:"https://www.shutterstock.com/image-vector/funky-old-gay-beard-summer-260nw-1998371867.jpg"
      },
    ]
    

    await queryInterface.bulkInsert("users", seededUsers);


    const users = await queryInterface.sequelize.query(
      `SELECT id from USERS;`
    );

    const userRows = users[0];

    const breeds = await queryInterface.sequelize.query(
      `SELECT id from BREEDS;`
    );

    const breedRows = breeds[0];

    return await queryInterface.bulkInsert("pets", [
      {
        name: "bot",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 4,
        gender: "male",
        neutered: true,
        vaccination_status: true,
        chip: true,
        passport: true,
        bio: "i am not giving him away just advertising his AWESOMENESS",
        diet: "anything but his own kibble please.",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZVY0VtDzX96_MyUz0THoiDaHWkLCcr7KzsA&usqp=CAU"
      },
      {
        name: "fluff",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 1,
        gender: "male",
        neutered: false,
        vaccination_status: true,
        chip: false,
        passport: true,
        bio: "not bot but..okay",
        diet: "only strawberries and champagne.",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LiBDfyDcPsjf09nP8IfvcKymds1q1kLNdQ&usqp=CAU"
      },
      {
        name: "sugarpuff",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 10,
        gender: "female",
        neutered: false,
        vaccination_status: true,
        chip: true,
        passport: false,
        bio: "strong independent pet with sugary barks and many fluffs",
        diet: "gluten-free kibble sprinkled with gold.",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
        avatar: "https://storage.googleapis.com/download/storage/v1/b/shiba-world.appspot.com/o/species-thumbnails%2FOCUc5E53r___image_2023-04-04_182112960.webp?generation=1680596489977003&alt=media"
      },
      {
        name: "avocado",
        breed_id: breedRows[0].id,
        user_id: userRows[0].id,
        age: 2,
        gender: "male",
        neutered: false,
        vaccination_status: true,
        chip: false,
        passport: true,
        bio: "from a seed to a wooffy fruit",
        diet: "just NOT avocadoes",
        location: "London, UK",
        latitude: 51.5072178,
        longitude: -0.1275862,
        avatar:"https://t3.ftcdn.net/jpg/05/76/94/70/360_F_576947051_DFT5rJEsF8yturr1DOlB3rxhtxswGSmP.jpg"
      },
    ]);
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null);
    await queryInterface.bulkDelete("pets", null);
  },
};
