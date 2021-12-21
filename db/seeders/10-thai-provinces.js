
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Thai_provinces',
      [
        {
          "id": 1,
          "name_en": "Bangkok",
          "name_th": "กรุงเทพมหานคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 2,
          "name_en": "Samut Prakan",
          "name_th": "สมุทรปราการ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 3,
          "name_en": "Nonthaburi",
          "name_th": "นนทบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 4,
          "name_en": "Pathum Thani",
          "name_th": "ปทุมธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 5,
          "name_en": "Phra Nakhon Si Ayutthaya",
          "name_th": "พระนครศรีอยุธยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 6,
          "name_en": "Ang Thong",
          "name_th": "อ่างทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 7,
          "name_en": "Loburi",
          "name_th": "ลพบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 8,
          "name_en": "Sing Buri",
          "name_th": "สิงห์บุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 9,
          "name_en": "Chai Nat",
          "name_th": "ชัยนาท",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 10,
          "name_en": "Saraburi",
          "name_th": "สระบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 11,
          "name_en": "Chon Buri",
          "name_th": "ชลบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 12,
          "name_en": "Rayong",
          "name_th": "ระยอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 13,
          "name_en": "Chanthaburi",
          "name_th": "จันทบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 14,
          "name_en": "Trat",
          "name_th": "ตราด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 15,
          "name_en": "Chachoengsao",
          "name_th": "ฉะเชิงเทรา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 16,
          "name_en": "Prachin Buri",
          "name_th": "ปราจีนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 17,
          "name_en": "Nakhon Nayok",
          "name_th": "นครนายก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 18,
          "name_en": "Sa Kaeo",
          "name_th": "สระแก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 19,
          "name_en": "Nakhon Ratchasima",
          "name_th": "นครราชสีมา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 20,
          "name_en": "Buri Ram",
          "name_th": "บุรีรัมย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 21,
          "name_en": "Surin",
          "name_th": "สุรินทร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 22,
          "name_en": "Si Sa Ket",
          "name_th": "ศรีสะเกษ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 23,
          "name_en": "Ubon Ratchathani",
          "name_th": "อุบลราชธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 24,
          "name_en": "Yasothon",
          "name_th": "ยโสธร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 25,
          "name_en": "Chaiyaphum",
          "name_th": "ชัยภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 26,
          "name_en": "Amnat Charoen",
          "name_th": "อำนาจเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 27,
          "name_en": "Nong Bua Lam Phu",
          "name_th": "หนองบัวลำภู",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 28,
          "name_en": "Khon Kaen",
          "name_th": "ขอนแก่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 29,
          "name_en": "Udon Thani",
          "name_th": "อุดรธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 30,
          "name_en": "Loei",
          "name_th": "เลย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 31,
          "name_en": "Nong Khai",
          "name_th": "หนองคาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 32,
          "name_en": "Maha Sarakham",
          "name_th": "มหาสารคาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 33,
          "name_en": "Roi Et",
          "name_th": "ร้อยเอ็ด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 34,
          "name_en": "Kalasin",
          "name_th": "กาฬสินธุ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 35,
          "name_en": "Sakon Nakhon",
          "name_th": "สกลนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 36,
          "name_en": "Nakhon Phanom",
          "name_th": "นครพนม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 37,
          "name_en": "Mukdahan",
          "name_th": "มุกดาหาร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 38,
          "name_en": "Chiang Mai",
          "name_th": "เชียงใหม่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 39,
          "name_en": "Lamphun",
          "name_th": "ลำพูน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 40,
          "name_en": "Lampang",
          "name_th": "ลำปาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 41,
          "name_en": "Uttaradit",
          "name_th": "อุตรดิตถ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 42,
          "name_en": "Phrae",
          "name_th": "แพร่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 43,
          "name_en": "Nan",
          "name_th": "น่าน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 44,
          "name_en": "Phayao",
          "name_th": "พะเยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 45,
          "name_en": "Chiang Rai",
          "name_th": "เชียงราย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 46,
          "name_en": "Mae Hong Son",
          "name_th": "แม่ฮ่องสอน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 47,
          "name_en": "Nakhon Sawan",
          "name_th": "นครสวรรค์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 48,
          "name_en": "Uthai Thani",
          "name_th": "อุทัยธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 49,
          "name_en": "Kamphaeng Phet",
          "name_th": "กำแพงเพชร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 50,
          "name_en": "Tak",
          "name_th": "ตาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 51,
          "name_en": "Sukhothai",
          "name_th": "สุโขทัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 52,
          "name_en": "Phitsanulok",
          "name_th": "พิษณุโลก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 53,
          "name_en": "Phichit",
          "name_th": "พิจิตร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 54,
          "name_en": "Phetchabun",
          "name_th": "เพชรบูรณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 55,
          "name_en": "Ratchaburi",
          "name_th": "ราชบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 56,
          "name_en": "Kanchanaburi",
          "name_th": "กาญจนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 57,
          "name_en": "Suphan Buri",
          "name_th": "สุพรรณบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 58,
          "name_en": "Nakhon Pathom",
          "name_th": "นครปฐม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 59,
          "name_en": "Samut Sakhon",
          "name_th": "สมุทรสาคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 60,
          "name_en": "Samut Songkhram",
          "name_th": "สมุทรสงคราม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 61,
          "name_en": "Phetchaburi",
          "name_th": "เพชรบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 62,
          "name_en": "Prachuap Khiri Khan",
          "name_th": "ประจวบคีรีขันธ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 63,
          "name_en": "Nakhon Si Thammarat",
          "name_th": "นครศรีธรรมราช",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 64,
          "name_en": "Krabi",
          "name_th": "กระบี่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 65,
          "name_en": "Phangnga",
          "name_th": "พังงา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 66,
          "name_en": "Phuket",
          "name_th": "ภูเก็ต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 67,
          "name_en": "Surat Thani",
          "name_th": "สุราษฎร์ธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 68,
          "name_en": "Ranong",
          "name_th": "ระนอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 69,
          "name_en": "Chumphon",
          "name_th": "ชุมพร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 70,
          "name_en": "Songkhla",
          "name_th": "สงขลา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 71,
          "name_en": "Satun",
          "name_th": "สตูล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 72,
          "name_en": "Trang",
          "name_th": "ตรัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 73,
          "name_en": "Phatthalung",
          "name_th": "พัทลุง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 74,
          "name_en": "Pattani",
          "name_th": "ปัตตานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 75,
          "name_en": "Yala",
          "name_th": "ยะลา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 76,
          "name_en": "Narathiwat",
          "name_th": "นราธิวาส",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 77,
          "name_en": "buogkan",
          "name_th": "บึงกาฬ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        }
      ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Thai_provinces', null);
  }
};