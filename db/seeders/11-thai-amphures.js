'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert
      ('Thai_amphures',
      [
        {
          "id": 1,
          "province_id": 1,
          "name_en": "Khet Phra Nakhon",
          "name_th": "เขตพระนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 2,
          "province_id": 1,
          "name_en": "Khet Dusit",
          "name_th": "เขตดุสิต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 3,
          "province_id": 1,
          "name_en": "Khet Nong Chok",
          "name_th": "เขตหนองจอก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 4,
          "province_id": 1,
          "name_en": "Khet Bang Rak",
          "name_th": "เขตบางรัก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 5,
          "province_id": 1,
          "name_en": "Khet Bang Khen",
          "name_th": "เขตบางเขน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 6,
          "province_id": 1,
          "name_en": "Khet Bang Kapi",
          "name_th": "เขตบางกะปิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 7,
          "province_id": 1,
          "name_en": "Khet Pathum Wan",
          "name_th": "เขตปทุมวัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 8,
          "province_id": 1,
          "name_en": "Khet Pom Prap Sattru Phai",
          "name_th": "เขตป้อมปราบศัตรูพ่าย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 9,
          "province_id": 1,
          "name_en": "Khet Phra Khanong",
          "name_th": "เขตพระโขนง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 10,
          "province_id": 1,
          "name_en": "Khet Min Buri",
          "name_th": "เขตมีนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 11,
          "province_id": 1,
          "name_en": "Khet Lat Krabang",
          "name_th": "เขตลาดกระบัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 12,
          "province_id": 1,
          "name_en": "Khet Yan Nawa",
          "name_th": "เขตยานนาวา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 13,
          "province_id": 1,
          "name_en": "Khet Samphanthawong",
          "name_th": "เขตสัมพันธวงศ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 14,
          "province_id": 1,
          "name_en": "Khet Phaya Thai",
          "name_th": "เขตพญาไท",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 15,
          "province_id": 1,
          "name_en": "Khet Thon Buri",
          "name_th": "เขตธนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 16,
          "province_id": 1,
          "name_en": "Khet Bangkok Yai",
          "name_th": "เขตบางกอกใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 17,
          "province_id": 1,
          "name_en": "Khet Huai Khwang",
          "name_th": "เขตห้วยขวาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 18,
          "province_id": 1,
          "name_en": "Khet Khlong San",
          "name_th": "เขตคลองสาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 19,
          "province_id": 1,
          "name_en": "Khet Taling Chan",
          "name_th": "เขตตลิ่งชัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 20,
          "province_id": 1,
          "name_en": "Khet Bangkok Noi",
          "name_th": "เขตบางกอกน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 21,
          "province_id": 1,
          "name_en": "Khet Bang Khun Thian",
          "name_th": "เขตบางขุนเทียน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 22,
          "province_id": 1,
          "name_en": "Khet Phasi Charoen",
          "name_th": "เขตภาษีเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 23,
          "province_id": 1,
          "name_en": "Khet Nong Khaem",
          "name_th": "เขตหนองแขม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 24,
          "province_id": 1,
          "name_en": "Khet Rat Burana",
          "name_th": "เขตราษฎร์บูรณะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 25,
          "province_id": 1,
          "name_en": "Khet Bang Phlat",
          "name_th": "เขตบางพลัด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 26,
          "province_id": 1,
          "name_en": "Khet Din Daeng",
          "name_th": "เขตดินแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 27,
          "province_id": 1,
          "name_en": "Khet Bueng Kum",
          "name_th": "เขตบึงกุ่ม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 28,
          "province_id": 1,
          "name_en": "Khet Sathon",
          "name_th": "เขตสาทร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 29,
          "province_id": 1,
          "name_en": "Khet Bang Sue",
          "name_th": "เขตบางซื่อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 30,
          "province_id": 1,
          "name_en": "Khet Chatuchak",
          "name_th": "เขตจตุจักร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 31,
          "province_id": 1,
          "name_en": "Khet Bang Kho Laem",
          "name_th": "เขตบางคอแหลม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 32,
          "province_id": 1,
          "name_en": "Khet Prawet",
          "name_th": "เขตประเวศ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 33,
          "province_id": 1,
          "name_en": "Khet Khlong Toei",
          "name_th": "เขตคลองเตย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 34,
          "province_id": 1,
          "name_en": "Khet Suan Luang",
          "name_th": "เขตสวนหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 35,
          "province_id": 1,
          "name_en": "Khet Chom Thong",
          "name_th": "เขตจอมทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 36,
          "province_id": 1,
          "name_en": "Khet Don Mueang",
          "name_th": "เขตดอนเมือง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 37,
          "province_id": 1,
          "name_en": "Khet Ratchathewi",
          "name_th": "เขตราชเทวี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 38,
          "province_id": 1,
          "name_en": "Khet Lat Phrao",
          "name_th": "เขตลาดพร้าว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 39,
          "province_id": 1,
          "name_en": "Khet Watthana",
          "name_th": "เขตวัฒนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 40,
          "province_id": 1,
          "name_en": "Khet Bang Khae",
          "name_th": "เขตบางแค",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 41,
          "province_id": 1,
          "name_en": "Khet Lak Si",
          "name_th": "เขตหลักสี่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 42,
          "province_id": 1,
          "name_en": "Khet Sai Mai",
          "name_th": "เขตสายไหม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 43,
          "province_id": 1,
          "name_en": "Khet Khan Na Yao",
          "name_th": "เขตคันนายาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 44,
          "province_id": 1,
          "name_en": "Khet Saphan Sung",
          "name_th": "เขตสะพานสูง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 45,
          "province_id": 1,
          "name_en": "Khet Wang Thonglang",
          "name_th": "เขตวังทองหลาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 46,
          "province_id": 1,
          "name_en": "Khet Khlong Sam Wa",
          "name_th": "เขตคลองสามวา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 47,
          "province_id": 1,
          "name_en": "Khet Bang Na",
          "name_th": "เขตบางนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 48,
          "province_id": 1,
          "name_en": "Khet Thawi Watthana",
          "name_th": "เขตทวีวัฒนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 49,
          "province_id": 1,
          "name_en": "Khet Thung Khru",
          "name_th": "เขตทุ่งครุ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 50,
          "province_id": 1,
          "name_en": "Khet Bang Bon",
          "name_th": "เขตบางบอน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 51,
          "province_id": 1,
          "name_en": "*Bantawai",
          "name_th": "*บ้านทะวาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 52,
          "province_id": 2,
          "name_en": "Mueang Samut Prakan",
          "name_th": "เมืองสมุทรปราการ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 53,
          "province_id": 2,
          "name_en": "Bang Bo",
          "name_th": "บางบ่อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 54,
          "province_id": 2,
          "name_en": "Bang Phli",
          "name_th": "บางพลี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 55,
          "province_id": 2,
          "name_en": "Phra Pradaeng",
          "name_th": "พระประแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 56,
          "province_id": 2,
          "name_en": "Phra Samut Chedi",
          "name_th": "พระสมุทรเจดีย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 57,
          "province_id": 2,
          "name_en": "Bang Sao Thong",
          "name_th": "บางเสาธง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 58,
          "province_id": 3,
          "name_en": "Mueang Nonthaburi",
          "name_th": "เมืองนนทบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 59,
          "province_id": 3,
          "name_en": "Bang Kruai",
          "name_th": "บางกรวย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 60,
          "province_id": 3,
          "name_en": "Bang Yai",
          "name_th": "บางใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 61,
          "province_id": 3,
          "name_en": "Bang Bua Thong",
          "name_th": "บางบัวทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 62,
          "province_id": 3,
          "name_en": "Sai Noi",
          "name_th": "ไทรน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 63,
          "province_id": 3,
          "name_en": "Pak Kret",
          "name_th": "ปากเกร็ด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 64,
          "province_id": 3,
          "name_en": "Tetsaban Nonthaburi",
          "name_th": "เทศบาลนครนนทบุรี (สาขาแขวงท่าทราย)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 65,
          "province_id": 3,
          "name_en": "Tetsaban Pak Kret",
          "name_th": "เทศบาลเมืองปากเกร็ด*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 66,
          "province_id": 4,
          "name_en": "Mueang Pathum Thani",
          "name_th": "เมืองปทุมธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 67,
          "province_id": 4,
          "name_en": "Khlong Luang",
          "name_th": "คลองหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 68,
          "province_id": 4,
          "name_en": "Thanyaburi",
          "name_th": "ธัญบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 69,
          "province_id": 4,
          "name_en": "Nong Suea",
          "name_th": "หนองเสือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 70,
          "province_id": 4,
          "name_en": "Lat Lum Kaeo",
          "name_th": "ลาดหลุมแก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 71,
          "province_id": 4,
          "name_en": "Lam Luk Ka",
          "name_th": "ลำลูกกา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 72,
          "province_id": 4,
          "name_en": "Sam Khok",
          "name_th": "สามโคก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 73,
          "province_id": 4,
          "name_en": "Khlong Luang(Kukod)",
          "name_th": "ลำลูกกา (สาขาตำบลคูคต)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 74,
          "province_id": 5,
          "name_en": "Phra Nakhon Si Ayutthaya",
          "name_th": "พระนครศรีอยุธยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 75,
          "province_id": 5,
          "name_en": "Tha Ruea",
          "name_th": "ท่าเรือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 76,
          "province_id": 5,
          "name_en": "Nakhon Luang",
          "name_th": "นครหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 77,
          "province_id": 5,
          "name_en": "Bang Sai",
          "name_th": "บางไทร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 78,
          "province_id": 5,
          "name_en": "Bang Ban",
          "name_th": "บางบาล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 79,
          "province_id": 5,
          "name_en": "Bang Pa-in",
          "name_th": "บางปะอิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 80,
          "province_id": 5,
          "name_en": "Bang Pahan",
          "name_th": "บางปะหัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 81,
          "province_id": 5,
          "name_en": "Phak Hai",
          "name_th": "ผักไห่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 82,
          "province_id": 5,
          "name_en": "Phachi",
          "name_th": "ภาชี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 83,
          "province_id": 5,
          "name_en": "Lat Bua Luang",
          "name_th": "ลาดบัวหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 84,
          "province_id": 5,
          "name_en": "Wang Noi",
          "name_th": "วังน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 85,
          "province_id": 5,
          "name_en": "Sena",
          "name_th": "เสนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 86,
          "province_id": 5,
          "name_en": "Bang Sai",
          "name_th": "บางซ้าย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 87,
          "province_id": 5,
          "name_en": "Uthai",
          "name_th": "อุทัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 88,
          "province_id": 5,
          "name_en": "Maha Rat",
          "name_th": "มหาราช",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 89,
          "province_id": 5,
          "name_en": "Ban Phraek",
          "name_th": "บ้านแพรก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 90,
          "province_id": 6,
          "name_en": "Mueang Ang Thong",
          "name_th": "เมืองอ่างทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 91,
          "province_id": 6,
          "name_en": "Chaiyo",
          "name_th": "ไชโย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 92,
          "province_id": 6,
          "name_en": "Pa Mok",
          "name_th": "ป่าโมก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 93,
          "province_id": 6,
          "name_en": "Pho Thong",
          "name_th": "โพธิ์ทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 94,
          "province_id": 6,
          "name_en": "Sawaeng Ha",
          "name_th": "แสวงหา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 95,
          "province_id": 6,
          "name_en": "Wiset Chai Chan",
          "name_th": "วิเศษชัยชาญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 96,
          "province_id": 6,
          "name_en": "Samko",
          "name_th": "สามโก้",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 97,
          "province_id": 7,
          "name_en": "Mueang Lop Buri",
          "name_th": "เมืองลพบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 98,
          "province_id": 7,
          "name_en": "Phatthana Nikhom",
          "name_th": "พัฒนานิคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 99,
          "province_id": 7,
          "name_en": "Khok Samrong",
          "name_th": "โคกสำโรง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 100,
          "province_id": 7,
          "name_en": "Chai Badan",
          "name_th": "ชัยบาดาล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 101,
          "province_id": 7,
          "name_en": "Tha Wung",
          "name_th": "ท่าวุ้ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 102,
          "province_id": 7,
          "name_en": "Ban Mi",
          "name_th": "บ้านหมี่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 103,
          "province_id": 7,
          "name_en": "Tha Luang",
          "name_th": "ท่าหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 104,
          "province_id": 7,
          "name_en": "Sa Bot",
          "name_th": "สระโบสถ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 105,
          "province_id": 7,
          "name_en": "Khok Charoen",
          "name_th": "โคกเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 106,
          "province_id": 7,
          "name_en": "Lam Sonthi",
          "name_th": "ลำสนธิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 107,
          "province_id": 7,
          "name_en": "Nong Muang",
          "name_th": "หนองม่วง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 108,
          "province_id": 7,
          "name_en": "*Amphoe Ban Chao",
          "name_th": "*อ.บ้านเช่า จ.ลพบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 109,
          "province_id": 8,
          "name_en": "Mueang Sing Buri",
          "name_th": "เมืองสิงห์บุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 110,
          "province_id": 8,
          "name_en": "Bang Rachan",
          "name_th": "บางระจัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 111,
          "province_id": 8,
          "name_en": "Khai Bang Rachan",
          "name_th": "ค่ายบางระจัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 112,
          "province_id": 8,
          "name_en": "Phrom Buri",
          "name_th": "พรหมบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 113,
          "province_id": 8,
          "name_en": "Tha Chang",
          "name_th": "ท่าช้าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 114,
          "province_id": 8,
          "name_en": "In Buri",
          "name_th": "อินทร์บุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 115,
          "province_id": 9,
          "name_en": "Mueang Chai Nat",
          "name_th": "เมืองชัยนาท",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 116,
          "province_id": 9,
          "name_en": "Manorom",
          "name_th": "มโนรมย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 117,
          "province_id": 9,
          "name_en": "Wat Sing",
          "name_th": "วัดสิงห์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 118,
          "province_id": 9,
          "name_en": "Sapphaya",
          "name_th": "สรรพยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 119,
          "province_id": 9,
          "name_en": "Sankhaburi",
          "name_th": "สรรคบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 120,
          "province_id": 9,
          "name_en": "Hankha",
          "name_th": "หันคา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 121,
          "province_id": 9,
          "name_en": "Nong Mamong",
          "name_th": "หนองมะโมง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 122,
          "province_id": 9,
          "name_en": "Noen Kham",
          "name_th": "เนินขาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 123,
          "province_id": 10,
          "name_en": "Mueang Saraburi",
          "name_th": "เมืองสระบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 124,
          "province_id": 10,
          "name_en": "Kaeng Khoi",
          "name_th": "แก่งคอย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 125,
          "province_id": 10,
          "name_en": "Nong Khae",
          "name_th": "หนองแค",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 126,
          "province_id": 10,
          "name_en": "Wihan Daeng",
          "name_th": "วิหารแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 127,
          "province_id": 10,
          "name_en": "Nong Saeng",
          "name_th": "หนองแซง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 128,
          "province_id": 10,
          "name_en": "Ban Mo",
          "name_th": "บ้านหมอ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 129,
          "province_id": 10,
          "name_en": "Don Phut",
          "name_th": "ดอนพุด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 130,
          "province_id": 10,
          "name_en": "Nong Don",
          "name_th": "หนองโดน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 131,
          "province_id": 10,
          "name_en": "Phra Phutthabat",
          "name_th": "พระพุทธบาท",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 132,
          "province_id": 10,
          "name_en": "Sao Hai",
          "name_th": "เสาไห้",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 133,
          "province_id": 10,
          "name_en": "Muak Lek",
          "name_th": "มวกเหล็ก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 134,
          "province_id": 10,
          "name_en": "Wang Muang",
          "name_th": "วังม่วง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 135,
          "province_id": 10,
          "name_en": "Chaloem Phra Kiat",
          "name_th": "เฉลิมพระเกียรติ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 136,
          "province_id": 11,
          "name_en": "Mueang Chon Buri",
          "name_th": "เมืองชลบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 137,
          "province_id": 11,
          "name_en": "Ban Bueng",
          "name_th": "บ้านบึง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 138,
          "province_id": 11,
          "name_en": "Nong Yai",
          "name_th": "หนองใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 139,
          "province_id": 11,
          "name_en": "Bang Lamung",
          "name_th": "บางละมุง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 140,
          "province_id": 11,
          "name_en": "Phan Thong",
          "name_th": "พานทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 141,
          "province_id": 11,
          "name_en": "Phanat Nikhom",
          "name_th": "พนัสนิคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 142,
          "province_id": 11,
          "name_en": "Si Racha",
          "name_th": "ศรีราชา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 143,
          "province_id": 11,
          "name_en": "Ko Sichang",
          "name_th": "เกาะสีชัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 144,
          "province_id": 11,
          "name_en": "Sattahip",
          "name_th": "สัตหีบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 145,
          "province_id": 11,
          "name_en": "Bo Thong",
          "name_th": "บ่อทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 146,
          "province_id": 11,
          "name_en": "Ko Chan",
          "name_th": "เกาะจันทร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 147,
          "province_id": 11,
          "name_en": "Sattahip(Bang Sre)*",
          "name_th": "สัตหีบ (สาขาตำบลบางเสร่)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 148,
          "province_id": 11,
          "name_en": "Tong Tin Tetsaban Mueang Nong Prue*",
          "name_th": "ท้องถิ่นเทศบาลเมืองหนองปรือ*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 149,
          "province_id": 11,
          "name_en": "Tetsaban Tambon Lamsabang*",
          "name_th": "เทศบาลตำบลแหลมฉบัง*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 150,
          "province_id": 11,
          "name_en": "Mueang Chon Buri",
          "name_th": "เทศบาลเมืองชลบุรี*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 151,
          "province_id": 12,
          "name_en": "Mueang Rayong",
          "name_th": "เมืองระยอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 152,
          "province_id": 12,
          "name_en": "Ban Chang",
          "name_th": "บ้านฉาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 153,
          "province_id": 12,
          "name_en": "Klaeng",
          "name_th": "แกลง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 154,
          "province_id": 12,
          "name_en": "Wang Chan",
          "name_th": "วังจันทร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 155,
          "province_id": 12,
          "name_en": "Ban Khai",
          "name_th": "บ้านค่าย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 156,
          "province_id": 12,
          "name_en": "Pluak Daeng",
          "name_th": "ปลวกแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 157,
          "province_id": 12,
          "name_en": "Khao Chamao",
          "name_th": "เขาชะเมา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 158,
          "province_id": 12,
          "name_en": "Nikhom Phatthana",
          "name_th": "นิคมพัฒนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 159,
          "province_id": 12,
          "name_en": "Saka Tambon Mabka",
          "name_th": "สาขาตำบลมาบข่า*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 160,
          "province_id": 13,
          "name_en": "Mueang Chanthaburi",
          "name_th": "เมืองจันทบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 161,
          "province_id": 13,
          "name_en": "Khlung",
          "name_th": "ขลุง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 162,
          "province_id": 13,
          "name_en": "Tha Mai",
          "name_th": "ท่าใหม่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 163,
          "province_id": 13,
          "name_en": "Pong Nam Ron",
          "name_th": "โป่งน้ำร้อน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 164,
          "province_id": 13,
          "name_en": "Makham",
          "name_th": "มะขาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 165,
          "province_id": 13,
          "name_en": "Laem Sing",
          "name_th": "แหลมสิงห์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 166,
          "province_id": 13,
          "name_en": "Soi Dao",
          "name_th": "สอยดาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 167,
          "province_id": 13,
          "name_en": "Kaeng Hang Maeo",
          "name_th": "แก่งหางแมว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 168,
          "province_id": 13,
          "name_en": "Na Yai Am",
          "name_th": "นายายอาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 169,
          "province_id": 13,
          "name_en": "Khoa Khitchakut",
          "name_th": "เขาคิชฌกูฏ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 170,
          "province_id": 13,
          "name_en": "*King Amphoe Kampud",
          "name_th": "*กิ่ง อ.กำพุธ จ.จันทบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 171,
          "province_id": 14,
          "name_en": "Mueang Trat",
          "name_th": "เมืองตราด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 172,
          "province_id": 14,
          "name_en": "Khlong Yai",
          "name_th": "คลองใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 173,
          "province_id": 14,
          "name_en": "Khao Saming",
          "name_th": "เขาสมิง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 174,
          "province_id": 14,
          "name_en": "Bo Rai",
          "name_th": "บ่อไร่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 175,
          "province_id": 14,
          "name_en": "Laem Ngop",
          "name_th": "แหลมงอบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 176,
          "province_id": 14,
          "name_en": "Ko Kut",
          "name_th": "เกาะกูด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 177,
          "province_id": 14,
          "name_en": "Ko Chang",
          "name_th": "เกาะช้าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 178,
          "province_id": 15,
          "name_en": "Mueang Chachoengsao",
          "name_th": "เมืองฉะเชิงเทรา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 179,
          "province_id": 15,
          "name_en": "Bang Khla",
          "name_th": "บางคล้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 180,
          "province_id": 15,
          "name_en": "Bang Nam Priao",
          "name_th": "บางน้ำเปรี้ยว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 181,
          "province_id": 15,
          "name_en": "Bang Pakong",
          "name_th": "บางปะกง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 182,
          "province_id": 15,
          "name_en": "Ban Pho",
          "name_th": "บ้านโพธิ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 183,
          "province_id": 15,
          "name_en": "Phanom Sarakham",
          "name_th": "พนมสารคาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 184,
          "province_id": 15,
          "name_en": "Ratchasan",
          "name_th": "ราชสาส์น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 185,
          "province_id": 15,
          "name_en": "Sanam Chai Khet",
          "name_th": "สนามชัยเขต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 186,
          "province_id": 15,
          "name_en": "Plaeng Yao",
          "name_th": "แปลงยาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 187,
          "province_id": 15,
          "name_en": "Tha Takiap",
          "name_th": "ท่าตะเกียบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 188,
          "province_id": 15,
          "name_en": "Khlong Khuean",
          "name_th": "คลองเขื่อน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 189,
          "province_id": 16,
          "name_en": "Mueang Prachin Buri",
          "name_th": "เมืองปราจีนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 190,
          "province_id": 16,
          "name_en": "Kabin Buri",
          "name_th": "กบินทร์บุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 191,
          "province_id": 16,
          "name_en": "Na Di",
          "name_th": "นาดี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 192,
          "province_id": 16,
          "name_en": "Sa Kaeo",
          "name_th": "*สระแก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 193,
          "province_id": 16,
          "name_en": "Wang Nam Yen",
          "name_th": "*วังน้ำเย็น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 194,
          "province_id": 16,
          "name_en": "Ban Sang",
          "name_th": "บ้านสร้าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 195,
          "province_id": 16,
          "name_en": "Prachantakham",
          "name_th": "ประจันตคาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 196,
          "province_id": 16,
          "name_en": "Si Maha Phot",
          "name_th": "ศรีมหาโพธิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 197,
          "province_id": 16,
          "name_en": "Si Mahosot",
          "name_th": "ศรีมโหสถ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 198,
          "province_id": 16,
          "name_en": "Aranyaprathet",
          "name_th": "*อรัญประเทศ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 199,
          "province_id": 16,
          "name_en": "Ta Phraya",
          "name_th": "*ตาพระยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 200,
          "province_id": 16,
          "name_en": "Watthana Nakhon",
          "name_th": "*วัฒนานคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 201,
          "province_id": 16,
          "name_en": "Khlong Hat",
          "name_th": "*คลองหาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 202,
          "province_id": 17,
          "name_en": "Mueang Nakhon Nayok",
          "name_th": "เมืองนครนายก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 203,
          "province_id": 17,
          "name_en": "Pak Phli",
          "name_th": "ปากพลี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 204,
          "province_id": 17,
          "name_en": "Ban Na",
          "name_th": "บ้านนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 205,
          "province_id": 17,
          "name_en": "Ongkharak",
          "name_th": "องครักษ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 206,
          "province_id": 18,
          "name_en": "Mueang Sa Kaeo",
          "name_th": "เมืองสระแก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 207,
          "province_id": 18,
          "name_en": "Khlong Hat",
          "name_th": "คลองหาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 208,
          "province_id": 18,
          "name_en": "Ta Phraya",
          "name_th": "ตาพระยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 209,
          "province_id": 18,
          "name_en": "Wang Nam Yen",
          "name_th": "วังน้ำเย็น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 210,
          "province_id": 18,
          "name_en": "Watthana Nakhon",
          "name_th": "วัฒนานคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 211,
          "province_id": 18,
          "name_en": "Aranyaprathet",
          "name_th": "อรัญประเทศ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 212,
          "province_id": 18,
          "name_en": "Khao Chakan",
          "name_th": "เขาฉกรรจ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 213,
          "province_id": 18,
          "name_en": "Khok Sung",
          "name_th": "โคกสูง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 214,
          "province_id": 18,
          "name_en": "Wang Sombun",
          "name_th": "วังสมบูรณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 215,
          "province_id": 19,
          "name_en": "Mueang Nakhon Ratchasima",
          "name_th": "เมืองนครราชสีมา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 216,
          "province_id": 19,
          "name_en": "Khon Buri",
          "name_th": "ครบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 217,
          "province_id": 19,
          "name_en": "Soeng Sang",
          "name_th": "เสิงสาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 218,
          "province_id": 19,
          "name_en": "Khong",
          "name_th": "คง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 219,
          "province_id": 19,
          "name_en": "Ban Lueam",
          "name_th": "บ้านเหลื่อม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 220,
          "province_id": 19,
          "name_en": "Chakkarat",
          "name_th": "จักราช",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 221,
          "province_id": 19,
          "name_en": "Chok Chai",
          "name_th": "โชคชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 222,
          "province_id": 19,
          "name_en": "Dan Khun Thot",
          "name_th": "ด่านขุนทด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 223,
          "province_id": 19,
          "name_en": "Non Thai",
          "name_th": "โนนไทย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 224,
          "province_id": 19,
          "name_en": "Non Sung",
          "name_th": "โนนสูง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 225,
          "province_id": 19,
          "name_en": "Kham Sakaesaeng",
          "name_th": "ขามสะแกแสง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 226,
          "province_id": 19,
          "name_en": "Bua Yai",
          "name_th": "บัวใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 227,
          "province_id": 19,
          "name_en": "Prathai",
          "name_th": "ประทาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 228,
          "province_id": 19,
          "name_en": "Pak Thong Chai",
          "name_th": "ปักธงชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 229,
          "province_id": 19,
          "name_en": "Phimai",
          "name_th": "พิมาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 230,
          "province_id": 19,
          "name_en": "Huai Thalaeng",
          "name_th": "ห้วยแถลง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 231,
          "province_id": 19,
          "name_en": "Chum Phuang",
          "name_th": "ชุมพวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 232,
          "province_id": 19,
          "name_en": "Sung Noen",
          "name_th": "สูงเนิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 233,
          "province_id": 19,
          "name_en": "Kham Thale So",
          "name_th": "ขามทะเลสอ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 234,
          "province_id": 19,
          "name_en": "Sikhio",
          "name_th": "สีคิ้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 235,
          "province_id": 19,
          "name_en": "Pak Chong",
          "name_th": "ปากช่อง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 236,
          "province_id": 19,
          "name_en": "Nong Bunnak",
          "name_th": "หนองบุญมาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 237,
          "province_id": 19,
          "name_en": "Kaeng Sanam Nang",
          "name_th": "แก้งสนามนาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 238,
          "province_id": 19,
          "name_en": "Non Daeng",
          "name_th": "โนนแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 239,
          "province_id": 19,
          "name_en": "Wang Nam Khiao",
          "name_th": "วังน้ำเขียว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 240,
          "province_id": 19,
          "name_en": "Thepharak",
          "name_th": "เทพารักษ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 241,
          "province_id": 19,
          "name_en": "Mueang Yang",
          "name_th": "เมืองยาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 242,
          "province_id": 19,
          "name_en": "Phra Thong Kham",
          "name_th": "พระทองคำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 243,
          "province_id": 19,
          "name_en": "Lam Thamenchai",
          "name_th": "ลำทะเมนชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 244,
          "province_id": 19,
          "name_en": "Bua Lai",
          "name_th": "บัวลาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 245,
          "province_id": 19,
          "name_en": "Sida",
          "name_th": "สีดา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 246,
          "province_id": 19,
          "name_en": "Chaloem Phra Kiat",
          "name_th": "เฉลิมพระเกียรติ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 247,
          "province_id": 19,
          "name_en": "Pho Krang",
          "name_th": "ท้องถิ่นเทศบาลตำบลโพธิ์กลาง*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 248,
          "province_id": 19,
          "name_en": "Ma Ka-Pon Songkram*",
          "name_th": "สาขาตำบลมะค่า-พลสงคราม*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 249,
          "province_id": 19,
          "name_en": "*Non Lao",
          "name_th": "*โนนลาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 250,
          "province_id": 20,
          "name_en": "Mueang Buri Ram",
          "name_th": "เมืองบุรีรัมย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 251,
          "province_id": 20,
          "name_en": "Khu Mueang",
          "name_th": "คูเมือง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 252,
          "province_id": 20,
          "name_en": "Krasang",
          "name_th": "กระสัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 253,
          "province_id": 20,
          "name_en": "Nang Rong",
          "name_th": "นางรอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 254,
          "province_id": 20,
          "name_en": "Nong Ki",
          "name_th": "หนองกี่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 255,
          "province_id": 20,
          "name_en": "Lahan Sai",
          "name_th": "ละหานทราย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 256,
          "province_id": 20,
          "name_en": "Prakhon Chai",
          "name_th": "ประโคนชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 257,
          "province_id": 20,
          "name_en": "Ban Kruat",
          "name_th": "บ้านกรวด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 258,
          "province_id": 20,
          "name_en": "Phutthaisong",
          "name_th": "พุทไธสง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 259,
          "province_id": 20,
          "name_en": "Lam Plai Mat",
          "name_th": "ลำปลายมาศ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 260,
          "province_id": 20,
          "name_en": "Satuek",
          "name_th": "สตึก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 261,
          "province_id": 20,
          "name_en": "Pakham",
          "name_th": "ปะคำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 262,
          "province_id": 20,
          "name_en": "Na Pho",
          "name_th": "นาโพธิ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 263,
          "province_id": 20,
          "name_en": "Nong Hong",
          "name_th": "หนองหงส์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 264,
          "province_id": 20,
          "name_en": "Phlapphla Chai",
          "name_th": "พลับพลาชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 265,
          "province_id": 20,
          "name_en": "Huai Rat",
          "name_th": "ห้วยราช",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 266,
          "province_id": 20,
          "name_en": "Non Suwan",
          "name_th": "โนนสุวรรณ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 267,
          "province_id": 20,
          "name_en": "Chamni",
          "name_th": "ชำนิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 268,
          "province_id": 20,
          "name_en": "Ban Mai Chaiyaphot",
          "name_th": "บ้านใหม่ไชยพจน์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 269,
          "province_id": 20,
          "name_en": "Din Daeng",
          "name_th": "โนนดินแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 270,
          "province_id": 20,
          "name_en": "Ban Dan",
          "name_th": "บ้านด่าน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 271,
          "province_id": 20,
          "name_en": "Khaen Dong",
          "name_th": "แคนดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 272,
          "province_id": 20,
          "name_en": "Chaloem Phra Kiat",
          "name_th": "เฉลิมพระเกียรติ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 273,
          "province_id": 21,
          "name_en": "Mueang Surin",
          "name_th": "เมืองสุรินทร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 274,
          "province_id": 21,
          "name_en": "Chumphon Buri",
          "name_th": "ชุมพลบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 275,
          "province_id": 21,
          "name_en": "Tha Tum",
          "name_th": "ท่าตูม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 276,
          "province_id": 21,
          "name_en": "Chom Phra",
          "name_th": "จอมพระ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 277,
          "province_id": 21,
          "name_en": "Prasat",
          "name_th": "ปราสาท",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 278,
          "province_id": 21,
          "name_en": "Kap Choeng",
          "name_th": "กาบเชิง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 279,
          "province_id": 21,
          "name_en": "Rattanaburi",
          "name_th": "รัตนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 280,
          "province_id": 21,
          "name_en": "Sanom",
          "name_th": "สนม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 281,
          "province_id": 21,
          "name_en": "Sikhoraphum",
          "name_th": "ศีขรภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 282,
          "province_id": 21,
          "name_en": "Sangkha",
          "name_th": "สังขะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 283,
          "province_id": 21,
          "name_en": "Lamduan",
          "name_th": "ลำดวน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 284,
          "province_id": 21,
          "name_en": "Samrong Thap",
          "name_th": "สำโรงทาบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 285,
          "province_id": 21,
          "name_en": "Buachet",
          "name_th": "บัวเชด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 286,
          "province_id": 21,
          "name_en": "Phanom Dong Rak",
          "name_th": "พนมดงรัก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 287,
          "province_id": 21,
          "name_en": "Si Narong",
          "name_th": "ศรีณรงค์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 288,
          "province_id": 21,
          "name_en": "Khwao Sinarin",
          "name_th": "เขวาสินรินทร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 289,
          "province_id": 21,
          "name_en": "Non Narai",
          "name_th": "โนนนารายณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 290,
          "province_id": 22,
          "name_en": "Mueang Si Sa Ket",
          "name_th": "เมืองศรีสะเกษ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 291,
          "province_id": 22,
          "name_en": "Yang Chum Noi",
          "name_th": "ยางชุมน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 292,
          "province_id": 22,
          "name_en": "Kanthararom",
          "name_th": "กันทรารมย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 293,
          "province_id": 22,
          "name_en": "Kantharalak",
          "name_th": "กันทรลักษ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 294,
          "province_id": 22,
          "name_en": "Khukhan",
          "name_th": "ขุขันธ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 295,
          "province_id": 22,
          "name_en": "Phrai Bueng",
          "name_th": "ไพรบึง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 296,
          "province_id": 22,
          "name_en": "Prang Ku",
          "name_th": "ปรางค์กู่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 297,
          "province_id": 22,
          "name_en": "Khun Han",
          "name_th": "ขุนหาญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 298,
          "province_id": 22,
          "name_en": "Rasi Salai",
          "name_th": "ราษีไศล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 299,
          "province_id": 22,
          "name_en": "Uthumphon Phisai",
          "name_th": "อุทุมพรพิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 300,
          "province_id": 22,
          "name_en": "Bueng Bun",
          "name_th": "บึงบูรพ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 301,
          "province_id": 22,
          "name_en": "Huai Thap Than",
          "name_th": "ห้วยทับทัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 302,
          "province_id": 22,
          "name_en": "Non Khun",
          "name_th": "โนนคูณ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 303,
          "province_id": 22,
          "name_en": "Si Rattana",
          "name_th": "ศรีรัตนะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 304,
          "province_id": 22,
          "name_en": "Si Rattana",
          "name_th": "น้ำเกลี้ยง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 305,
          "province_id": 22,
          "name_en": "Wang Hin",
          "name_th": "วังหิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 306,
          "province_id": 22,
          "name_en": "Phu Sing",
          "name_th": "ภูสิงห์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 307,
          "province_id": 22,
          "name_en": "Mueang Chan",
          "name_th": "เมืองจันทร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 308,
          "province_id": 22,
          "name_en": "Benchalak",
          "name_th": "เบญจลักษ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 309,
          "province_id": 22,
          "name_en": "Phayu",
          "name_th": "พยุห์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 310,
          "province_id": 22,
          "name_en": "Pho Si Suwan",
          "name_th": "โพธิ์ศรีสุวรรณ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 311,
          "province_id": 22,
          "name_en": "Sila Lat",
          "name_th": "ศิลาลาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 312,
          "province_id": 23,
          "name_en": "Mueang Ubon Ratchathani",
          "name_th": "เมืองอุบลราชธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 313,
          "province_id": 23,
          "name_en": "Si Mueang Mai",
          "name_th": "ศรีเมืองใหม่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 314,
          "province_id": 23,
          "name_en": "Khong Chiam",
          "name_th": "โขงเจียม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 315,
          "province_id": 23,
          "name_en": "Khueang Nai",
          "name_th": "เขื่องใน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 316,
          "province_id": 23,
          "name_en": "Khemarat",
          "name_th": "เขมราฐ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 317,
          "province_id": 23,
          "name_en": "*Shanuman",
          "name_th": "*ชานุมาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 318,
          "province_id": 23,
          "name_en": "Det Udom",
          "name_th": "เดชอุดม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 319,
          "province_id": 23,
          "name_en": "Na Chaluai",
          "name_th": "นาจะหลวย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 320,
          "province_id": 23,
          "name_en": "Nam Yuen",
          "name_th": "น้ำยืน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 321,
          "province_id": 23,
          "name_en": "Buntharik",
          "name_th": "บุณฑริก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 322,
          "province_id": 23,
          "name_en": "Trakan Phuet Phon",
          "name_th": "ตระการพืชผล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 323,
          "province_id": 23,
          "name_en": "Kut Khaopun",
          "name_th": "กุดข้าวปุ้น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 324,
          "province_id": 23,
          "name_en": "*Phana",
          "name_th": "*พนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 325,
          "province_id": 23,
          "name_en": "Muang Sam Sip",
          "name_th": "ม่วงสามสิบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 326,
          "province_id": 23,
          "name_en": "Warin Chamrap",
          "name_th": "วารินชำราบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 327,
          "province_id": 23,
          "name_en": "*Amnat Charoen",
          "name_th": "*อำนาจเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 328,
          "province_id": 23,
          "name_en": "*Senangkhanikhom",
          "name_th": "*เสนางคนิคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 329,
          "province_id": 23,
          "name_en": "*Hua Taphan",
          "name_th": "*หัวตะพาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 330,
          "province_id": 23,
          "name_en": "Phibun Mangsahan",
          "name_th": "พิบูลมังสาหาร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 331,
          "province_id": 23,
          "name_en": "Tan Sum",
          "name_th": "ตาลสุม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 332,
          "province_id": 23,
          "name_en": "Pho Sai",
          "name_th": "โพธิ์ไทร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 333,
          "province_id": 23,
          "name_en": "Samrong",
          "name_th": "สำโรง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 334,
          "province_id": 23,
          "name_en": "*King Amphoe Lue Amnat",
          "name_th": "*กิ่งอำเภอลืออำนาจ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 335,
          "province_id": 23,
          "name_en": "Don Mot Daeng",
          "name_th": "ดอนมดแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 336,
          "province_id": 23,
          "name_en": "Sirindhorn",
          "name_th": "สิรินธร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 337,
          "province_id": 23,
          "name_en": "Thung Si Udom",
          "name_th": "ทุ่งศรีอุดม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 338,
          "province_id": 23,
          "name_en": "*Pathum Ratchawongsa",
          "name_th": "*ปทุมราชวงศา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 339,
          "province_id": 23,
          "name_en": "*King Amphoe Sri Lunk Chai",
          "name_th": "*กิ่งอำเภอศรีหลักชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 340,
          "province_id": 23,
          "name_en": "Na Yia",
          "name_th": "นาเยีย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 341,
          "province_id": 23,
          "name_en": "Na Tan",
          "name_th": "นาตาล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 342,
          "province_id": 23,
          "name_en": "Lao Suea Kok",
          "name_th": "เหล่าเสือโก้ก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 343,
          "province_id": 23,
          "name_en": "Sawang Wirawong",
          "name_th": "สว่างวีระวงศ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 344,
          "province_id": 23,
          "name_en": "Nam Khun",
          "name_th": "น้ำขุ่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 345,
          "province_id": 23,
          "name_en": "*Suwan Wari",
          "name_th": "*อ.สุวรรณวารี จ.อุบลราชธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 346,
          "province_id": 24,
          "name_en": "Mueang Yasothon",
          "name_th": "เมืองยโสธร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 347,
          "province_id": 24,
          "name_en": "Sai Mun",
          "name_th": "ทรายมูล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 348,
          "province_id": 24,
          "name_en": "Kut Chum",
          "name_th": "กุดชุม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 349,
          "province_id": 24,
          "name_en": "Kham Khuean Kaeo",
          "name_th": "คำเขื่อนแก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 350,
          "province_id": 24,
          "name_en": "Pa Tio",
          "name_th": "ป่าติ้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 351,
          "province_id": 24,
          "name_en": "Maha Chana Chai",
          "name_th": "มหาชนะชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 352,
          "province_id": 24,
          "name_en": "Kho Wang",
          "name_th": "ค้อวัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 353,
          "province_id": 24,
          "name_en": "Loeng Nok Tha",
          "name_th": "เลิงนกทา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 354,
          "province_id": 24,
          "name_en": "Thai Charoen",
          "name_th": "ไทยเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 355,
          "province_id": 25,
          "name_en": "Mueang Chaiyaphum",
          "name_th": "เมืองชัยภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 356,
          "province_id": 25,
          "name_en": "Ban Khwao",
          "name_th": "บ้านเขว้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 357,
          "province_id": 25,
          "name_en": "Khon Sawan",
          "name_th": "คอนสวรรค์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 358,
          "province_id": 25,
          "name_en": "Kaset Sombun",
          "name_th": "เกษตรสมบูรณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 359,
          "province_id": 25,
          "name_en": "Nong Bua Daeng",
          "name_th": "หนองบัวแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 360,
          "province_id": 25,
          "name_en": "Chatturat",
          "name_th": "จัตุรัส",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 361,
          "province_id": 25,
          "name_en": "Bamnet Narong",
          "name_th": "บำเหน็จณรงค์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 362,
          "province_id": 25,
          "name_en": "Nong Bua Rawe",
          "name_th": "หนองบัวระเหว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 363,
          "province_id": 25,
          "name_en": "Thep Sathit",
          "name_th": "เทพสถิต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 364,
          "province_id": 25,
          "name_en": "Phu Khiao",
          "name_th": "ภูเขียว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 365,
          "province_id": 25,
          "name_en": "Ban Thaen",
          "name_th": "บ้านแท่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 366,
          "province_id": 25,
          "name_en": "Kaeng Khro",
          "name_th": "แก้งคร้อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 367,
          "province_id": 25,
          "name_en": "Khon San",
          "name_th": "คอนสาร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 368,
          "province_id": 25,
          "name_en": "Phakdi Chumphon",
          "name_th": "ภักดีชุมพล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 369,
          "province_id": 25,
          "name_en": "Noen Sa-nga",
          "name_th": "เนินสง่า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 370,
          "province_id": 25,
          "name_en": "Sap Yai",
          "name_th": "ซับใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 371,
          "province_id": 25,
          "name_en": "Mueang Chaiyaphum(Non Sumran)*",
          "name_th": "เมืองชัยภูมิ (สาขาตำบลโนนสำราญ)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 372,
          "province_id": 25,
          "name_en": "Ban Wha Tao*",
          "name_th": "สาขาตำบลบ้านหว่าเฒ่า*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 373,
          "province_id": 25,
          "name_en": "Nong Bua Daeng",
          "name_th": "หนองบัวแดง (สาขาตำบลวังชมภู)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 374,
          "province_id": 25,
          "name_en": "King Amphoe Sap Yai*",
          "name_th": "กิ่งอำเภอซับใหญ่ (สาขาตำบลซับใหญ่)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 375,
          "province_id": 25,
          "name_en": "Coke Phet*",
          "name_th": "สาขาตำบลโคกเพชร*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 376,
          "province_id": 25,
          "name_en": "Thep Sathit*",
          "name_th": "เทพสถิต (สาขาตำบลนายางกลัก)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 377,
          "province_id": 25,
          "name_en": "Ban Thaen",
          "name_th": "บ้านแท่น (สาขาตำบลบ้านเต่า)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 378,
          "province_id": 25,
          "name_en": "Kaeng Khro*",
          "name_th": "แก้งคร้อ (สาขาตำบลท่ามะไฟหวาน)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 379,
          "province_id": 25,
          "name_en": "Khon San*",
          "name_th": "คอนสาร (สาขาตำบลโนนคูณ)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 380,
          "province_id": 26,
          "name_en": "Mueang Amnat Charoen",
          "name_th": "เมืองอำนาจเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 381,
          "province_id": 26,
          "name_en": "Chanuman",
          "name_th": "ชานุมาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 382,
          "province_id": 26,
          "name_en": "Pathum Ratchawongsa",
          "name_th": "ปทุมราชวงศา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 383,
          "province_id": 26,
          "name_en": "Phana",
          "name_th": "พนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 384,
          "province_id": 26,
          "name_en": "Senangkhanikhom",
          "name_th": "เสนางคนิคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 385,
          "province_id": 26,
          "name_en": "Hua Taphan",
          "name_th": "หัวตะพาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 386,
          "province_id": 26,
          "name_en": "Lue Amnat",
          "name_th": "ลืออำนาจ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 387,
          "province_id": 27,
          "name_en": "Mueang Nong Bua Lam Phu",
          "name_th": "เมืองหนองบัวลำภู",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 388,
          "province_id": 27,
          "name_en": "Na Klang",
          "name_th": "นากลาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 389,
          "province_id": 27,
          "name_en": "Non Sang",
          "name_th": "โนนสัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 390,
          "province_id": 27,
          "name_en": "Si Bun Rueang",
          "name_th": "ศรีบุญเรือง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 391,
          "province_id": 27,
          "name_en": "Suwannakhuha",
          "name_th": "สุวรรณคูหา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 392,
          "province_id": 27,
          "name_en": "Na Wang",
          "name_th": "นาวัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 393,
          "province_id": 28,
          "name_en": "Mueang Khon Kaen",
          "name_th": "เมืองขอนแก่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 394,
          "province_id": 28,
          "name_en": "Ban Fang",
          "name_th": "บ้านฝาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 395,
          "province_id": 28,
          "name_en": "Phra Yuen",
          "name_th": "พระยืน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 396,
          "province_id": 28,
          "name_en": "Nong Ruea",
          "name_th": "หนองเรือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 397,
          "province_id": 28,
          "name_en": "Chum Phae",
          "name_th": "ชุมแพ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 398,
          "province_id": 28,
          "name_en": "Si Chomphu",
          "name_th": "สีชมพู",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 399,
          "province_id": 28,
          "name_en": "Nam Phong",
          "name_th": "น้ำพอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 400,
          "province_id": 28,
          "name_en": "Ubolratana",
          "name_th": "อุบลรัตน์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 401,
          "province_id": 28,
          "name_en": "Kranuan",
          "name_th": "กระนวน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 402,
          "province_id": 28,
          "name_en": "Ban Phai",
          "name_th": "บ้านไผ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 403,
          "province_id": 28,
          "name_en": "Pueai Noi",
          "name_th": "เปือยน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 404,
          "province_id": 28,
          "name_en": "Phon",
          "name_th": "พล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 405,
          "province_id": 28,
          "name_en": "Waeng Yai",
          "name_th": "แวงใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 406,
          "province_id": 28,
          "name_en": "Waeng Noi",
          "name_th": "แวงน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 407,
          "province_id": 28,
          "name_en": "Nong Song Hong",
          "name_th": "หนองสองห้อง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 408,
          "province_id": 28,
          "name_en": "Phu Wiang",
          "name_th": "ภูเวียง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 409,
          "province_id": 28,
          "name_en": "Mancha Khiri",
          "name_th": "มัญจาคีรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 410,
          "province_id": 28,
          "name_en": "Chonnabot",
          "name_th": "ชนบท",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 411,
          "province_id": 28,
          "name_en": "Khao Suan Kwang",
          "name_th": "เขาสวนกวาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 412,
          "province_id": 28,
          "name_en": "Phu Pha Man",
          "name_th": "ภูผาม่าน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 413,
          "province_id": 28,
          "name_en": "Sam Sung",
          "name_th": "ซำสูง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 414,
          "province_id": 28,
          "name_en": "Khok Pho Chai",
          "name_th": "โคกโพธิ์ไชย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 415,
          "province_id": 28,
          "name_en": "Nong Na Kham",
          "name_th": "หนองนาคำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 416,
          "province_id": 28,
          "name_en": "Ban Haet",
          "name_th": "บ้านแฮด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 417,
          "province_id": 28,
          "name_en": "Non Sila",
          "name_th": "โนนศิลา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 418,
          "province_id": 28,
          "name_en": "Wiang Kao",
          "name_th": "เวียงเก่า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 419,
          "province_id": 28,
          "name_en": "Ban Pet*",
          "name_th": "ท้องถิ่นเทศบาลตำบลบ้านเป็ด*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 420,
          "province_id": 28,
          "name_en": "Tet Saban Tambon Muang Phon*",
          "name_th": "เทศบาลตำบลเมืองพล*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 421,
          "province_id": 29,
          "name_en": "Mueang Udon Thani",
          "name_th": "เมืองอุดรธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 422,
          "province_id": 29,
          "name_en": "Kut Chap",
          "name_th": "กุดจับ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 423,
          "province_id": 29,
          "name_en": "Nong Wua So",
          "name_th": "หนองวัวซอ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 424,
          "province_id": 29,
          "name_en": "Kumphawapi",
          "name_th": "กุมภวาปี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 425,
          "province_id": 29,
          "name_en": "Non Sa-at",
          "name_th": "โนนสะอาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 426,
          "province_id": 29,
          "name_en": "Nong Han",
          "name_th": "หนองหาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 427,
          "province_id": 29,
          "name_en": "Thung Fon",
          "name_th": "ทุ่งฝน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 428,
          "province_id": 29,
          "name_en": "Chai Wan",
          "name_th": "ไชยวาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 429,
          "province_id": 29,
          "name_en": "Si That",
          "name_th": "ศรีธาตุ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 430,
          "province_id": 29,
          "name_en": "Wang Sam Mo",
          "name_th": "วังสามหมอ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 431,
          "province_id": 29,
          "name_en": "Ban Dung",
          "name_th": "บ้านดุง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 432,
          "province_id": 29,
          "name_en": "*Nong Bua Lam Phu",
          "name_th": "*หนองบัวลำภู",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 433,
          "province_id": 29,
          "name_en": "*Si Bun Rueang",
          "name_th": "*ศรีบุญเรือง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 434,
          "province_id": 29,
          "name_en": "*Na Klang",
          "name_th": "*นากลาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 435,
          "province_id": 29,
          "name_en": "*Suwannakhuha",
          "name_th": "*สุวรรณคูหา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 436,
          "province_id": 29,
          "name_en": "*Non Sang",
          "name_th": "*โนนสัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 437,
          "province_id": 29,
          "name_en": "Ban Phue",
          "name_th": "บ้านผือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 438,
          "province_id": 29,
          "name_en": "Nam Som",
          "name_th": "น้ำโสม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 439,
          "province_id": 29,
          "name_en": "Phen",
          "name_th": "เพ็ญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 440,
          "province_id": 29,
          "name_en": "Sang Khom",
          "name_th": "สร้างคอม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 441,
          "province_id": 29,
          "name_en": "Nong Saeng",
          "name_th": "หนองแสง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 442,
          "province_id": 29,
          "name_en": "Na Yung",
          "name_th": "นายูง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 443,
          "province_id": 29,
          "name_en": "Phibun Rak",
          "name_th": "พิบูลย์รักษ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 444,
          "province_id": 29,
          "name_en": "Ku Kaeo",
          "name_th": "กู่แก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 445,
          "province_id": 29,
          "name_en": "rachak-sinlapakhom",
          "name_th": "ประจักษ์ศิลปาคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 446,
          "province_id": 30,
          "name_en": "Mueang Loei",
          "name_th": "เมืองเลย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 447,
          "province_id": 30,
          "name_en": "Na Duang",
          "name_th": "นาด้วง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 448,
          "province_id": 30,
          "name_en": "Chiang Khan",
          "name_th": "เชียงคาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 449,
          "province_id": 30,
          "name_en": "Pak Chom",
          "name_th": "ปากชม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 450,
          "province_id": 30,
          "name_en": "Dan Sai",
          "name_th": "ด่านซ้าย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 451,
          "province_id": 30,
          "name_en": "Na Haeo",
          "name_th": "นาแห้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 452,
          "province_id": 30,
          "name_en": "Phu Ruea",
          "name_th": "ภูเรือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 453,
          "province_id": 30,
          "name_en": "Tha Li",
          "name_th": "ท่าลี่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 454,
          "province_id": 30,
          "name_en": "Wang Saphung",
          "name_th": "วังสะพุง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 455,
          "province_id": 30,
          "name_en": "Phu Kradueng",
          "name_th": "ภูกระดึง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 456,
          "province_id": 30,
          "name_en": "Phu Luang",
          "name_th": "ภูหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 457,
          "province_id": 30,
          "name_en": "Pha Khao",
          "name_th": "ผาขาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 458,
          "province_id": 30,
          "name_en": "Erawan",
          "name_th": "เอราวัณ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 459,
          "province_id": 30,
          "name_en": "Nong Hin",
          "name_th": "หนองหิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 460,
          "province_id": 31,
          "name_en": "Mueang Nong Khai",
          "name_th": "เมืองหนองคาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 461,
          "province_id": 31,
          "name_en": "Tha Bo",
          "name_th": "ท่าบ่อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 462,
          "province_id": 77,
          "name_en": "Mueang Bueng Kan",
          "name_th": "เมืองบึงกาฬ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 463,
          "province_id": 77,
          "name_en": "Phon Charoen",
          "name_th": "พรเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 464,
          "province_id": 31,
          "name_en": "Phon Phisai",
          "name_th": "โพนพิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 465,
          "province_id": 77,
          "name_en": "So Phisai",
          "name_th": "โซ่พิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 466,
          "province_id": 31,
          "name_en": "Si Chiang Mai",
          "name_th": "ศรีเชียงใหม่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 467,
          "province_id": 31,
          "name_en": "Sangkhom",
          "name_th": "สังคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 468,
          "province_id": 77,
          "name_en": "Seka",
          "name_th": "เซกา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 469,
          "province_id": 77,
          "name_en": "Pak Khat",
          "name_th": "ปากคาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 470,
          "province_id": 77,
          "name_en": "Bueng Khong Long",
          "name_th": "บึงโขงหลง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 471,
          "province_id": 77,
          "name_en": "Si Wilai",
          "name_th": "ศรีวิไล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 472,
          "province_id": 77,
          "name_en": "Bung Khla",
          "name_th": "บุ่งคล้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 473,
          "province_id": 31,
          "name_en": "Sakhrai",
          "name_th": "สระใคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 474,
          "province_id": 31,
          "name_en": "Fao Rai",
          "name_th": "เฝ้าไร่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 475,
          "province_id": 31,
          "name_en": "Rattanawapi",
          "name_th": "รัตนวาปี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 476,
          "province_id": 31,
          "name_en": "Pho Tak",
          "name_th": "โพธิ์ตาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 477,
          "province_id": 32,
          "name_en": "Mueang Maha Sarakham",
          "name_th": "เมืองมหาสารคาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 478,
          "province_id": 32,
          "name_en": "Kae Dam",
          "name_th": "แกดำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 479,
          "province_id": 32,
          "name_en": "Kosum Phisai",
          "name_th": "โกสุมพิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 480,
          "province_id": 32,
          "name_en": "Kantharawichai",
          "name_th": "กันทรวิชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 481,
          "province_id": 32,
          "name_en": "Kantharawichai",
          "name_th": "เชียงยืน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 482,
          "province_id": 32,
          "name_en": "Borabue",
          "name_th": "บรบือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 483,
          "province_id": 32,
          "name_en": "Na Chueak",
          "name_th": "นาเชือก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 484,
          "province_id": 32,
          "name_en": "Phayakkhaphum Phisai",
          "name_th": "พยัคฆภูมิพิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 485,
          "province_id": 32,
          "name_en": "Wapi Pathum",
          "name_th": "วาปีปทุม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 486,
          "province_id": 32,
          "name_en": "Na Dun",
          "name_th": "นาดูน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 487,
          "province_id": 32,
          "name_en": "Yang Sisurat",
          "name_th": "ยางสีสุราช",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 488,
          "province_id": 32,
          "name_en": "Kut Rang",
          "name_th": "กุดรัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 489,
          "province_id": 32,
          "name_en": "Chuen Chom",
          "name_th": "ชื่นชม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 490,
          "province_id": 32,
          "name_en": "*Lub",
          "name_th": "*หลุบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 491,
          "province_id": 33,
          "name_en": "Mueang Roi Et",
          "name_th": "เมืองร้อยเอ็ด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 492,
          "province_id": 33,
          "name_en": "Kaset Wisai",
          "name_th": "เกษตรวิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 493,
          "province_id": 33,
          "name_en": "Pathum Rat",
          "name_th": "ปทุมรัตต์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 494,
          "province_id": 33,
          "name_en": "Chaturaphak Phiman",
          "name_th": "จตุรพักตรพิมาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 495,
          "province_id": 33,
          "name_en": "Thawat Buri",
          "name_th": "ธวัชบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 496,
          "province_id": 33,
          "name_en": "Phanom Phrai",
          "name_th": "พนมไพร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 497,
          "province_id": 33,
          "name_en": "Phon Thong",
          "name_th": "โพนทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 498,
          "province_id": 33,
          "name_en": "Pho Chai",
          "name_th": "โพธิ์ชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 499,
          "province_id": 33,
          "name_en": "Nong Phok",
          "name_th": "หนองพอก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 500,
          "province_id": 33,
          "name_en": "Selaphum",
          "name_th": "เสลภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 501,
          "province_id": 33,
          "name_en": "Suwannaphum",
          "name_th": "สุวรรณภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 502,
          "province_id": 33,
          "name_en": "Mueang Suang",
          "name_th": "เมืองสรวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 503,
          "province_id": 33,
          "name_en": "Phon Sai",
          "name_th": "โพนทราย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 504,
          "province_id": 33,
          "name_en": "At Samat",
          "name_th": "อาจสามารถ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 505,
          "province_id": 33,
          "name_en": "Moei Wadi",
          "name_th": "เมยวดี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 506,
          "province_id": 33,
          "name_en": "Si Somdet",
          "name_th": "ศรีสมเด็จ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 507,
          "province_id": 33,
          "name_en": "Changhan",
          "name_th": "จังหาร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 508,
          "province_id": 33,
          "name_en": "Chiang Khwan",
          "name_th": "เชียงขวัญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 509,
          "province_id": 33,
          "name_en": "Nong Hi",
          "name_th": "หนองฮี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 510,
          "province_id": 33,
          "name_en": "Thung Khao Luangกิ่",
          "name_th": "ทุ่งเขาหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 511,
          "province_id": 34,
          "name_en": "Mueang Kalasin",
          "name_th": "เมืองกาฬสินธุ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 512,
          "province_id": 34,
          "name_en": "Na Mon",
          "name_th": "นามน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 513,
          "province_id": 34,
          "name_en": "Kamalasai",
          "name_th": "กมลาไสย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 514,
          "province_id": 34,
          "name_en": "Rong Kham",
          "name_th": "ร่องคำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 515,
          "province_id": 34,
          "name_en": "Kuchinarai",
          "name_th": "กุฉินารายณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 516,
          "province_id": 34,
          "name_en": "Khao Wong",
          "name_th": "เขาวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 517,
          "province_id": 34,
          "name_en": "Yang Talat",
          "name_th": "ยางตลาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 518,
          "province_id": 34,
          "name_en": "Huai Mek",
          "name_th": "ห้วยเม็ก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 519,
          "province_id": 34,
          "name_en": "Sahatsakhan",
          "name_th": "สหัสขันธ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 520,
          "province_id": 34,
          "name_en": "Kham Muang",
          "name_th": "คำม่วง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 521,
          "province_id": 34,
          "name_en": "Tha Khantho",
          "name_th": "ท่าคันโท",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 522,
          "province_id": 34,
          "name_en": "Nong Kung Si",
          "name_th": "หนองกุงศรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 523,
          "province_id": 34,
          "name_en": "Somdet",
          "name_th": "สมเด็จ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 524,
          "province_id": 34,
          "name_en": "Huai Phueng",
          "name_th": "ห้วยผึ้ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 525,
          "province_id": 34,
          "name_en": "Sam Chai",
          "name_th": "สามชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 526,
          "province_id": 34,
          "name_en": "Na Khu",
          "name_th": "นาคู",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 527,
          "province_id": 34,
          "name_en": "Don Chan",
          "name_th": "ดอนจาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 528,
          "province_id": 34,
          "name_en": "Khong Chai",
          "name_th": "ฆ้องชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 529,
          "province_id": 35,
          "name_en": "Mueang Sakon Nakhon",
          "name_th": "เมืองสกลนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 530,
          "province_id": 35,
          "name_en": "Kusuman",
          "name_th": "กุสุมาลย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 531,
          "province_id": 35,
          "name_en": "Kut Bak",
          "name_th": "กุดบาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 532,
          "province_id": 35,
          "name_en": "Phanna Nikhom",
          "name_th": "พรรณานิคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 533,
          "province_id": 35,
          "name_en": "Phang Khon",
          "name_th": "พังโคน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 534,
          "province_id": 35,
          "name_en": "Waritchaphum",
          "name_th": "วาริชภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 535,
          "province_id": 35,
          "name_en": "Nikhom Nam Un",
          "name_th": "นิคมน้ำอูน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 536,
          "province_id": 35,
          "name_en": "Wanon Niwat",
          "name_th": "วานรนิวาส",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 537,
          "province_id": 35,
          "name_en": "Kham Ta Kla",
          "name_th": "คำตากล้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 538,
          "province_id": 35,
          "name_en": "Ban Muang",
          "name_th": "บ้านม่วง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 539,
          "province_id": 35,
          "name_en": "Akat Amnuai",
          "name_th": "อากาศอำนวย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 540,
          "province_id": 35,
          "name_en": "Sawang Daen Din",
          "name_th": "สว่างแดนดิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 541,
          "province_id": 35,
          "name_en": "Song Dao",
          "name_th": "ส่องดาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 542,
          "province_id": 35,
          "name_en": "Tao Ngoi",
          "name_th": "เต่างอย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 543,
          "province_id": 35,
          "name_en": "Khok Si Suphan",
          "name_th": "โคกศรีสุพรรณ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 544,
          "province_id": 35,
          "name_en": "Charoen Sin",
          "name_th": "เจริญศิลป์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 545,
          "province_id": 35,
          "name_en": "Phon Na Kaeo",
          "name_th": "โพนนาแก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 546,
          "province_id": 35,
          "name_en": "Phu Phan",
          "name_th": "ภูพาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 547,
          "province_id": 35,
          "name_en": "Wanon Niwat",
          "name_th": "วานรนิวาส (สาขาตำบลกุดเรือคำ)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 548,
          "province_id": 35,
          "name_en": "*Banhan",
          "name_th": "*อ.บ้านหัน จ.สกลนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 549,
          "province_id": 36,
          "name_en": "Mueang Nakhon Phanom",
          "name_th": "เมืองนครพนม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 550,
          "province_id": 36,
          "name_en": "Pla Pak",
          "name_th": "ปลาปาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 551,
          "province_id": 36,
          "name_en": "Tha Uthen",
          "name_th": "ท่าอุเทน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 552,
          "province_id": 36,
          "name_en": "Ban Phaeng",
          "name_th": "บ้านแพง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 553,
          "province_id": 36,
          "name_en": "That Phanom",
          "name_th": "ธาตุพนม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 554,
          "province_id": 36,
          "name_en": "Renu Nakhon",
          "name_th": "เรณูนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 555,
          "province_id": 36,
          "name_en": "Na Kae",
          "name_th": "นาแก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 556,
          "province_id": 36,
          "name_en": "Si Songkhram",
          "name_th": "ศรีสงคราม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 557,
          "province_id": 36,
          "name_en": "Na Wa",
          "name_th": "นาหว้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 558,
          "province_id": 36,
          "name_en": "Phon Sawan",
          "name_th": "โพนสวรรค์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 559,
          "province_id": 36,
          "name_en": "Na Thom",
          "name_th": "นาทม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 560,
          "province_id": 36,
          "name_en": "Wang Yang",
          "name_th": "วังยาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 561,
          "province_id": 37,
          "name_en": "Mueang Mukdahan",
          "name_th": "เมืองมุกดาหาร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 562,
          "province_id": 37,
          "name_en": "Nikhom Kham Soi",
          "name_th": "นิคมคำสร้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 563,
          "province_id": 37,
          "name_en": "Don Tan",
          "name_th": "ดอนตาล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 564,
          "province_id": 37,
          "name_en": "Dong Luang",
          "name_th": "ดงหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 565,
          "province_id": 37,
          "name_en": "Khamcha-i",
          "name_th": "คำชะอี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 566,
          "province_id": 37,
          "name_en": "Wan Yai",
          "name_th": "หว้านใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 567,
          "province_id": 37,
          "name_en": "Nong Sung",
          "name_th": "หนองสูง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 568,
          "province_id": 38,
          "name_en": "Mueang Chiang Mai",
          "name_th": "เมืองเชียงใหม่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 569,
          "province_id": 38,
          "name_en": "Chom Thong",
          "name_th": "จอมทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 570,
          "province_id": 38,
          "name_en": "Mae Chaem",
          "name_th": "แม่แจ่ม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 571,
          "province_id": 38,
          "name_en": "Chiang Dao",
          "name_th": "เชียงดาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 572,
          "province_id": 38,
          "name_en": "Doi Saket",
          "name_th": "ดอยสะเก็ด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 573,
          "province_id": 38,
          "name_en": "Mae Taeng",
          "name_th": "แม่แตง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 574,
          "province_id": 38,
          "name_en": "Mae Rim",
          "name_th": "แม่ริม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 575,
          "province_id": 38,
          "name_en": "Samoeng",
          "name_th": "สะเมิง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 576,
          "province_id": 38,
          "name_en": "Fang",
          "name_th": "ฝาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 577,
          "province_id": 38,
          "name_en": "Mae Ai",
          "name_th": "แม่อาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 578,
          "province_id": 38,
          "name_en": "Phrao",
          "name_th": "พร้าว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 579,
          "province_id": 38,
          "name_en": "San Pa Tong",
          "name_th": "สันป่าตอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 580,
          "province_id": 38,
          "name_en": "San Kamphaeng",
          "name_th": "สันกำแพง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 581,
          "province_id": 38,
          "name_en": "San Sai",
          "name_th": "สันทราย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 582,
          "province_id": 38,
          "name_en": "Hang Dong",
          "name_th": "หางดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 583,
          "province_id": 38,
          "name_en": "Hot",
          "name_th": "ฮอด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 584,
          "province_id": 38,
          "name_en": "Doi Tao",
          "name_th": "ดอยเต่า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 585,
          "province_id": 38,
          "name_en": "Omkoi",
          "name_th": "อมก๋อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 586,
          "province_id": 38,
          "name_en": "Saraphi",
          "name_th": "สารภี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 587,
          "province_id": 38,
          "name_en": "Wiang Haeng",
          "name_th": "เวียงแหง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 588,
          "province_id": 38,
          "name_en": "Chai Prakan",
          "name_th": "ไชยปราการ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 589,
          "province_id": 38,
          "name_en": "Mae Wang",
          "name_th": "แม่วาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 590,
          "province_id": 38,
          "name_en": "Mae On",
          "name_th": "แม่ออน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 591,
          "province_id": 38,
          "name_en": "Doi Lo",
          "name_th": "ดอยหล่อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 592,
          "province_id": 38,
          "name_en": "Tet Saban Nakorn Chiangmai(Kan lawi la)*",
          "name_th": "เทศบาลนครเชียงใหม่ (สาขาแขวงกาลวิละ)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 593,
          "province_id": 38,
          "name_en": "Tet Saban Nakorn Chiangmai(Sri Wi)*",
          "name_th": "เทศบาลนครเชียงใหม่ (สาขาแขวงศรีวิชั)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 594,
          "province_id": 38,
          "name_en": "Tet Saban Nakorn Chiangmai(Meng Rai)*",
          "name_th": "เทศบาลนครเชียงใหม่ (สาขาเม็งราย)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 595,
          "province_id": 39,
          "name_en": "Mueang Lamphun",
          "name_th": "เมืองลำพูน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 596,
          "province_id": 39,
          "name_en": "Mae Tha",
          "name_th": "แม่ทา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 597,
          "province_id": 39,
          "name_en": "Ban Hong",
          "name_th": "บ้านโฮ่ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 598,
          "province_id": 39,
          "name_en": "Li",
          "name_th": "ลี้",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 599,
          "province_id": 39,
          "name_en": "Thung Hua Chang",
          "name_th": "ทุ่งหัวช้าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 600,
          "province_id": 39,
          "name_en": "Pa Sang",
          "name_th": "ป่าซาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 601,
          "province_id": 39,
          "name_en": "Ban Thi",
          "name_th": "บ้านธิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 602,
          "province_id": 39,
          "name_en": "Wiang Nong Long",
          "name_th": "เวียงหนองล่อง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 603,
          "province_id": 40,
          "name_en": "Mueang Lampang",
          "name_th": "เมืองลำปาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 604,
          "province_id": 40,
          "name_en": "Mae Mo",
          "name_th": "แม่เมาะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 605,
          "province_id": 40,
          "name_en": "Ko Kha",
          "name_th": "เกาะคา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 606,
          "province_id": 40,
          "name_en": "Soem Ngam",
          "name_th": "เสริมงาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 607,
          "province_id": 40,
          "name_en": "Ngao",
          "name_th": "งาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 608,
          "province_id": 40,
          "name_en": "Chae Hom",
          "name_th": "แจ้ห่ม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 609,
          "province_id": 40,
          "name_en": "Wang Nuea",
          "name_th": "วังเหนือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 610,
          "province_id": 40,
          "name_en": "Thoen",
          "name_th": "เถิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 611,
          "province_id": 40,
          "name_en": "Mae Phrik",
          "name_th": "แม่พริก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 612,
          "province_id": 40,
          "name_en": "Mae Tha",
          "name_th": "แม่ทะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 613,
          "province_id": 40,
          "name_en": "Sop Prap",
          "name_th": "สบปราบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 614,
          "province_id": 40,
          "name_en": "Hang Chat",
          "name_th": "ห้างฉัตร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 615,
          "province_id": 40,
          "name_en": "Mueang Pan",
          "name_th": "เมืองปาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 616,
          "province_id": 41,
          "name_en": "Mueang Uttaradit",
          "name_th": "เมืองอุตรดิตถ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 617,
          "province_id": 41,
          "name_en": "Tron",
          "name_th": "ตรอน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 618,
          "province_id": 41,
          "name_en": "Tha Pla",
          "name_th": "ท่าปลา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 619,
          "province_id": 41,
          "name_en": "Nam Pat",
          "name_th": "น้ำปาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 620,
          "province_id": 41,
          "name_en": "Fak Tha",
          "name_th": "ฟากท่า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 621,
          "province_id": 41,
          "name_en": "Ban Khok",
          "name_th": "บ้านโคก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 622,
          "province_id": 41,
          "name_en": "Phichai",
          "name_th": "พิชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 623,
          "province_id": 41,
          "name_en": "Laplae",
          "name_th": "ลับแล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 624,
          "province_id": 41,
          "name_en": "Thong Saen Khan",
          "name_th": "ทองแสนขัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 625,
          "province_id": 42,
          "name_en": "Mueang Phrae",
          "name_th": "เมืองแพร่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 626,
          "province_id": 42,
          "name_en": "Rong Kwang",
          "name_th": "ร้องกวาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 627,
          "province_id": 42,
          "name_en": "Long",
          "name_th": "ลอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 628,
          "province_id": 42,
          "name_en": "Sung Men",
          "name_th": "สูงเม่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 629,
          "province_id": 42,
          "name_en": "Den Chai",
          "name_th": "เด่นชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 630,
          "province_id": 42,
          "name_en": "Song",
          "name_th": "สอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 631,
          "province_id": 42,
          "name_en": "Wang Chin",
          "name_th": "วังชิ้น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 632,
          "province_id": 42,
          "name_en": "Nong Muang Khai",
          "name_th": "หนองม่วงไข่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 633,
          "province_id": 43,
          "name_en": "Mueang Nan",
          "name_th": "เมืองน่าน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 634,
          "province_id": 43,
          "name_en": "Mae Charim",
          "name_th": "แม่จริม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 635,
          "province_id": 43,
          "name_en": "Ban Luang",
          "name_th": "บ้านหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 636,
          "province_id": 43,
          "name_en": "Na Noi",
          "name_th": "นาน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 637,
          "province_id": 43,
          "name_en": "Pua",
          "name_th": "ปัว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 638,
          "province_id": 43,
          "name_en": "Tha Wang Pha",
          "name_th": "ท่าวังผา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 639,
          "province_id": 43,
          "name_en": "Wiang Sa",
          "name_th": "เวียงสา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 640,
          "province_id": 43,
          "name_en": "Thung Chang",
          "name_th": "ทุ่งช้าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 641,
          "province_id": 43,
          "name_en": "Chiang Klang",
          "name_th": "เชียงกลาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 642,
          "province_id": 43,
          "name_en": "Na Muen",
          "name_th": "นาหมื่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 643,
          "province_id": 43,
          "name_en": "Santi Suk",
          "name_th": "สันติสุข",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 644,
          "province_id": 43,
          "name_en": "Bo Kluea",
          "name_th": "บ่อเกลือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 645,
          "province_id": 43,
          "name_en": "Song Khwae",
          "name_th": "สองแคว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 646,
          "province_id": 43,
          "name_en": "Phu Phiang",
          "name_th": "ภูเพียง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 647,
          "province_id": 43,
          "name_en": "Chaloem Phra Kiat",
          "name_th": "เฉลิมพระเกียรติ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 648,
          "province_id": 44,
          "name_en": "Mueang Phayao",
          "name_th": "เมืองพะเยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 649,
          "province_id": 44,
          "name_en": "Chun",
          "name_th": "จุน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 650,
          "province_id": 44,
          "name_en": "Chiang Kham",
          "name_th": "เชียงคำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 651,
          "province_id": 44,
          "name_en": "Chiang Muan",
          "name_th": "เชียงม่วน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 652,
          "province_id": 44,
          "name_en": "Dok Khamtai",
          "name_th": "ดอกคำใต้",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 653,
          "province_id": 44,
          "name_en": "Pong",
          "name_th": "ปง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 654,
          "province_id": 44,
          "name_en": "Mae Chai",
          "name_th": "แม่ใจ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 655,
          "province_id": 44,
          "name_en": "Phu Sang",
          "name_th": "ภูซาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 656,
          "province_id": 44,
          "name_en": "Phu Kamyao",
          "name_th": "ภูกามยาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 657,
          "province_id": 45,
          "name_en": "Mueang Chiang Rai",
          "name_th": "เมืองเชียงราย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 658,
          "province_id": 45,
          "name_en": "Wiang Chai",
          "name_th": "เวียงชัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 659,
          "province_id": 45,
          "name_en": "Chiang Khong",
          "name_th": "เชียงของ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 660,
          "province_id": 45,
          "name_en": "Thoeng",
          "name_th": "เทิง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 661,
          "province_id": 45,
          "name_en": "Phan",
          "name_th": "พาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 662,
          "province_id": 45,
          "name_en": "Pa Daet",
          "name_th": "ป่าแดด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 663,
          "province_id": 45,
          "name_en": "Mae Chan",
          "name_th": "แม่จัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 664,
          "province_id": 45,
          "name_en": "Chiang Saen",
          "name_th": "เชียงแสน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 665,
          "province_id": 45,
          "name_en": "Mae Sai",
          "name_th": "แม่สาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 666,
          "province_id": 45,
          "name_en": "Mae Suai",
          "name_th": "แม่สรวย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 667,
          "province_id": 45,
          "name_en": "Wiang Pa Pao",
          "name_th": "เวียงป่าเป้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 668,
          "province_id": 45,
          "name_en": "Phaya Mengrai",
          "name_th": "พญาเม็งราย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 669,
          "province_id": 45,
          "name_en": "Wiang Kaen",
          "name_th": "เวียงแก่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 670,
          "province_id": 45,
          "name_en": "Khun Tan",
          "name_th": "ขุนตาล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 671,
          "province_id": 45,
          "name_en": "Mae Fa Luang",
          "name_th": "แม่ฟ้าหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 672,
          "province_id": 45,
          "name_en": "Mae Lao",
          "name_th": "แม่ลาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 673,
          "province_id": 45,
          "name_en": "Wiang Chiang Rung",
          "name_th": "เวียงเชียงรุ้ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 674,
          "province_id": 45,
          "name_en": "Doi Luang",
          "name_th": "ดอยหลวง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 675,
          "province_id": 46,
          "name_en": "Mueang Mae Hong Son",
          "name_th": "เมืองแม่ฮ่องสอน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 676,
          "province_id": 46,
          "name_en": "Khun Yuam",
          "name_th": "ขุนยวม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 677,
          "province_id": 46,
          "name_en": "Pai",
          "name_th": "ปาย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 678,
          "province_id": 46,
          "name_en": "Mae Sariang",
          "name_th": "แม่สะเรียง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 679,
          "province_id": 46,
          "name_en": "Mae La Noi",
          "name_th": "แม่ลาน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 680,
          "province_id": 46,
          "name_en": "Sop Moei",
          "name_th": "สบเมย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 681,
          "province_id": 46,
          "name_en": "Pang Mapha",
          "name_th": "ปางมะผ้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 682,
          "province_id": 46,
          "name_en": "Muen Tor",
          "name_th": "*อ.ม่วยต่อ จ.แม่ฮ่องสอน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 683,
          "province_id": 47,
          "name_en": "Mueang Nakhon Sawan",
          "name_th": "เมืองนครสวรรค์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 684,
          "province_id": 47,
          "name_en": "Krok Phra",
          "name_th": "โกรกพระ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 685,
          "province_id": 47,
          "name_en": "Chum Saeng",
          "name_th": "ชุมแสง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 686,
          "province_id": 47,
          "name_en": "Nong Bua",
          "name_th": "หนองบัว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 687,
          "province_id": 47,
          "name_en": "Banphot Phisai",
          "name_th": "บรรพตพิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 688,
          "province_id": 47,
          "name_en": "Kao Liao",
          "name_th": "เก้าเลี้ยว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 689,
          "province_id": 47,
          "name_en": "Takhli",
          "name_th": "ตาคลี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 690,
          "province_id": 47,
          "name_en": "Takhli",
          "name_th": "ท่าตะโก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 691,
          "province_id": 47,
          "name_en": "Phaisali",
          "name_th": "ไพศาลี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 692,
          "province_id": 47,
          "name_en": "Phayuha Khiri",
          "name_th": "พยุหะคีรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 693,
          "province_id": 47,
          "name_en": "Phayuha Khiri",
          "name_th": "ลาดยาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 694,
          "province_id": 47,
          "name_en": "Tak Fa",
          "name_th": "ตากฟ้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 695,
          "province_id": 47,
          "name_en": "Mae Wong",
          "name_th": "แม่วงก์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 696,
          "province_id": 47,
          "name_en": "Mae Poen",
          "name_th": "แม่เปิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 697,
          "province_id": 47,
          "name_en": "Chum Ta Bong",
          "name_th": "ชุมตาบง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 698,
          "province_id": 47,
          "name_en": "Huen Nam Hom",
          "name_th": "สาขาตำบลห้วยน้ำหอม*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 699,
          "province_id": 47,
          "name_en": "Chum Ta Bong",
          "name_th": "กิ่งอำเภอชุมตาบง (สาขาตำบลชุมตาบง)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 700,
          "province_id": 47,
          "name_en": "Mea Ley",
          "name_th": "แม่วงก์ (สาขาตำบลแม่เล่ย์)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 701,
          "province_id": 48,
          "name_en": "Mueang Uthai Thani",
          "name_th": "เมืองอุทัยธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 702,
          "province_id": 48,
          "name_en": "Thap Than",
          "name_th": "ทัพทัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 703,
          "province_id": 48,
          "name_en": "Sawang Arom",
          "name_th": "สว่างอารมณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 704,
          "province_id": 48,
          "name_en": "Nong Chang",
          "name_th": "หนองฉาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 705,
          "province_id": 48,
          "name_en": "Nong Khayang",
          "name_th": "หนองขาหย่าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 706,
          "province_id": 48,
          "name_en": "Ban Rai",
          "name_th": "บ้านไร่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 707,
          "province_id": 48,
          "name_en": "Lan Sak",
          "name_th": "ลานสัก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 708,
          "province_id": 48,
          "name_en": "Huai Khot",
          "name_th": "ห้วยคต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 709,
          "province_id": 49,
          "name_en": "Mueang Kamphaeng Phet",
          "name_th": "เมืองกำแพงเพชร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 710,
          "province_id": 49,
          "name_en": "Sai Ngam",
          "name_th": "ไทรงาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 711,
          "province_id": 49,
          "name_en": "Khlong Lan",
          "name_th": "คลองลาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 712,
          "province_id": 49,
          "name_en": "Khanu Woralaksaburi",
          "name_th": "ขาณุวรลักษบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 713,
          "province_id": 49,
          "name_en": "Khlong Khlung",
          "name_th": "คลองขลุง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 714,
          "province_id": 49,
          "name_en": "Phran Kratai",
          "name_th": "พรานกระต่าย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 715,
          "province_id": 49,
          "name_en": "Lan Krabue",
          "name_th": "ลานกระบือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 716,
          "province_id": 49,
          "name_en": "Sai Thong Watthana",
          "name_th": "ทรายทองวัฒนา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 717,
          "province_id": 49,
          "name_en": "Pang Sila Thong",
          "name_th": "ปางศิลาทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 718,
          "province_id": 49,
          "name_en": "Bueng Samakkhi",
          "name_th": "บึงสามัคคี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 719,
          "province_id": 49,
          "name_en": "Kosamphi Nakhon",
          "name_th": "โกสัมพีนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 720,
          "province_id": 50,
          "name_en": "Mueang Tak",
          "name_th": "เมืองตาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 721,
          "province_id": 50,
          "name_en": "Ban Tak",
          "name_th": "บ้านตาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 722,
          "province_id": 50,
          "name_en": "Sam Ngao",
          "name_th": "สามเงา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 723,
          "province_id": 50,
          "name_en": "Mae Ramat",
          "name_th": "แม่ระมาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 724,
          "province_id": 50,
          "name_en": "Tha Song Yang",
          "name_th": "ท่าสองยาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 725,
          "province_id": 50,
          "name_en": "Mae Sot",
          "name_th": "แม่สอด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 726,
          "province_id": 50,
          "name_en": "Phop Phra",
          "name_th": "พบพระ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 727,
          "province_id": 50,
          "name_en": "Umphang",
          "name_th": "อุ้มผาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 728,
          "province_id": 50,
          "name_en": "Wang Chao",
          "name_th": "วังเจ้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 729,
          "province_id": 50,
          "name_en": "*King Ta Pui",
          "name_th": "*กิ่ง อ.ท่าปุย จ.ตาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 730,
          "province_id": 51,
          "name_en": "Mueang Sukhothai",
          "name_th": "เมืองสุโขทัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 731,
          "province_id": 51,
          "name_en": "Ban Dan Lan Hoi",
          "name_th": "บ้านด่านลานหอย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 732,
          "province_id": 51,
          "name_en": "Khiri Mat",
          "name_th": "คีรีมาศ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 733,
          "province_id": 51,
          "name_en": "Kong Krailat",
          "name_th": "กงไกรลาศ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 734,
          "province_id": 51,
          "name_en": "Si Satchanalai",
          "name_th": "ศรีสัชนาลัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 735,
          "province_id": 51,
          "name_en": "Si Samrong",
          "name_th": "ศรีสำโรง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 736,
          "province_id": 51,
          "name_en": "Sawankhalok",
          "name_th": "สวรรคโลก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 737,
          "province_id": 51,
          "name_en": "Si Nakhon",
          "name_th": "ศรีนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 738,
          "province_id": 51,
          "name_en": "Thung Saliam",
          "name_th": "ทุ่งเสลี่ยม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 739,
          "province_id": 52,
          "name_en": "Mueang Phitsanulok",
          "name_th": "เมืองพิษณุโลก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 740,
          "province_id": 52,
          "name_en": "Nakhon Thai",
          "name_th": "นครไทย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 741,
          "province_id": 52,
          "name_en": "Chat Trakan",
          "name_th": "ชาติตระการ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 742,
          "province_id": 52,
          "name_en": "Bang Rakam",
          "name_th": "บางระกำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 743,
          "province_id": 52,
          "name_en": "Bang Krathum",
          "name_th": "บางกระทุ่ม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 744,
          "province_id": 52,
          "name_en": "Phrom Phiram",
          "name_th": "พรหมพิราม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 745,
          "province_id": 52,
          "name_en": "Wat Bot",
          "name_th": "วัดโบสถ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 746,
          "province_id": 52,
          "name_en": "Wang Thong",
          "name_th": "วังทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 747,
          "province_id": 52,
          "name_en": "Noen Maprang",
          "name_th": "เนินมะปราง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 748,
          "province_id": 53,
          "name_en": "Mueang Phichit",
          "name_th": "เมืองพิจิตร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 749,
          "province_id": 53,
          "name_en": "Wang Sai Phun",
          "name_th": "วังทรายพูน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 750,
          "province_id": 53,
          "name_en": "Pho Prathap Chang",
          "name_th": "โพธิ์ประทับช้าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 751,
          "province_id": 53,
          "name_en": "Taphan Hin",
          "name_th": "ตะพานหิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 752,
          "province_id": 53,
          "name_en": "Bang Mun Nak",
          "name_th": "บางมูลนาก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 753,
          "province_id": 53,
          "name_en": "Pho Thale",
          "name_th": "โพทะเล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 754,
          "province_id": 53,
          "name_en": "Sam Ngam",
          "name_th": "สามง่าม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 755,
          "province_id": 53,
          "name_en": "Tap Khlo",
          "name_th": "ทับคล้อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 756,
          "province_id": 53,
          "name_en": "Sak Lek",
          "name_th": "สากเหล็ก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 757,
          "province_id": 53,
          "name_en": "Bueng Na Rang",
          "name_th": "บึงนาราง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 758,
          "province_id": 53,
          "name_en": "Dong Charoen",
          "name_th": "ดงเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 759,
          "province_id": 53,
          "name_en": "Wachirabarami",
          "name_th": "วชิรบารมี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 760,
          "province_id": 54,
          "name_en": "Mueang Phetchabun",
          "name_th": "เมืองเพชรบูรณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 761,
          "province_id": 54,
          "name_en": "Chon Daen",
          "name_th": "ชนแดน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 762,
          "province_id": 54,
          "name_en": "Lom Sak",
          "name_th": "หล่มสัก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 763,
          "province_id": 54,
          "name_en": "Lom Kao",
          "name_th": "หล่มเก่า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 764,
          "province_id": 54,
          "name_en": "Wichian Buri",
          "name_th": "วิเชียรบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 765,
          "province_id": 54,
          "name_en": "Si Thep",
          "name_th": "ศรีเทพ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 766,
          "province_id": 54,
          "name_en": "Nong Phai",
          "name_th": "หนองไผ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 767,
          "province_id": 54,
          "name_en": "Bueng Sam Phan",
          "name_th": "บึงสามพัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 768,
          "province_id": 54,
          "name_en": "Nam Nao",
          "name_th": "น้ำหนาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 769,
          "province_id": 54,
          "name_en": "Wang Pong",
          "name_th": "วังโป่ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 770,
          "province_id": 54,
          "name_en": "Khao Kho",
          "name_th": "เขาค้อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 771,
          "province_id": 55,
          "name_en": "Mueang Ratchaburi",
          "name_th": "เมืองราชบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 772,
          "province_id": 55,
          "name_en": "Chom Bueng",
          "name_th": "จอมบึง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 773,
          "province_id": 55,
          "name_en": "Suan Phueng",
          "name_th": "สวนผึ้ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 774,
          "province_id": 55,
          "name_en": "Damnoen Saduak",
          "name_th": "ดำเนินสะดวก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 775,
          "province_id": 55,
          "name_en": "Ban Pong",
          "name_th": "บ้านโป่ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 776,
          "province_id": 55,
          "name_en": "Bang Phae",
          "name_th": "บางแพ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 777,
          "province_id": 55,
          "name_en": "Photharam",
          "name_th": "โพธาราม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 778,
          "province_id": 55,
          "name_en": "Pak Tho",
          "name_th": "ปากท่อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 779,
          "province_id": 55,
          "name_en": "Wat Phleng",
          "name_th": "วัดเพลง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 780,
          "province_id": 55,
          "name_en": "Ban Kha",
          "name_th": "บ้านคา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 781,
          "province_id": 55,
          "name_en": "Tet Saban Ban Kong",
          "name_th": "ท้องถิ่นเทศบาลตำบลบ้านฆ้อง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 782,
          "province_id": 56,
          "name_en": "Mueang Kanchanaburi",
          "name_th": "เมืองกาญจนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 783,
          "province_id": 56,
          "name_en": "Sai Yok",
          "name_th": "ไทรโยค",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 784,
          "province_id": 56,
          "name_en": "Bo Phloi",
          "name_th": "บ่อพลอย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 785,
          "province_id": 56,
          "name_en": "Si Sawat",
          "name_th": "ศรีสวัสดิ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 786,
          "province_id": 56,
          "name_en": "Tha Maka",
          "name_th": "ท่ามะกา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 787,
          "province_id": 56,
          "name_en": "Tha Muang",
          "name_th": "ท่าม่วง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 788,
          "province_id": 56,
          "name_en": "Pha Phum",
          "name_th": "ทองผาภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 789,
          "province_id": 56,
          "name_en": "Sangkhla Buri",
          "name_th": "สังขละบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 790,
          "province_id": 56,
          "name_en": "Phanom Thuan",
          "name_th": "พนมทวน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 791,
          "province_id": 56,
          "name_en": "Lao Khwan",
          "name_th": "เลาขวัญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 792,
          "province_id": 56,
          "name_en": "Dan Makham Tia",
          "name_th": "ด่านมะขามเตี้ย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 793,
          "province_id": 56,
          "name_en": "Nong Prue",
          "name_th": "หนองปรือ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 794,
          "province_id": 56,
          "name_en": "Huai Krachao",
          "name_th": "ห้วยกระเจา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 795,
          "province_id": 56,
          "name_en": "Tha Kra Dan",
          "name_th": "สาขาตำบลท่ากระดาน*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 796,
          "province_id": 56,
          "name_en": "*Ban Tuan",
          "name_th": "*บ้านทวน จ.กาญจนบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 797,
          "province_id": 57,
          "name_en": "Mueang Suphan Buri",
          "name_th": "เมืองสุพรรณบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 798,
          "province_id": 57,
          "name_en": "Doem Bang Nang Buat",
          "name_th": "เดิมบางนางบวช",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 799,
          "province_id": 57,
          "name_en": "Dan Chang",
          "name_th": "ด่านช้าง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 800,
          "province_id": 57,
          "name_en": "Bang Pla Ma",
          "name_th": "บางปลาม้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 801,
          "province_id": 57,
          "name_en": "Si Prachan",
          "name_th": "ศรีประจันต์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 802,
          "province_id": 57,
          "name_en": "Don Chedi",
          "name_th": "ดอนเจดีย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 803,
          "province_id": 57,
          "name_en": "Song Phi Nong",
          "name_th": "สองพี่น้อง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 804,
          "province_id": 57,
          "name_en": "Sam Chuk",
          "name_th": "สามชุก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 805,
          "province_id": 57,
          "name_en": "U Thong",
          "name_th": "อู่ทอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 806,
          "province_id": 57,
          "name_en": "Nong Ya Sai",
          "name_th": "หนองหญ้าไซ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 807,
          "province_id": 58,
          "name_en": "Mueang Nakhon Pathom",
          "name_th": "เมืองนครปฐม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 808,
          "province_id": 58,
          "name_en": "Kamphaeng Saen",
          "name_th": "กำแพงแสน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 809,
          "province_id": 58,
          "name_en": "Nakhon Chai Si",
          "name_th": "นครชัยศรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 810,
          "province_id": 58,
          "name_en": "Don Tum",
          "name_th": "ดอนตูม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 811,
          "province_id": 58,
          "name_en": "Bang Len",
          "name_th": "บางเลน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 812,
          "province_id": 58,
          "name_en": "Sam Phran",
          "name_th": "สามพราน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 813,
          "province_id": 58,
          "name_en": "Phutthamonthon",
          "name_th": "พุทธมณฑล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 814,
          "province_id": 59,
          "name_en": "Mueang Samut Sakhon",
          "name_th": "เมืองสมุทรสาคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 815,
          "province_id": 59,
          "name_en": "Krathum Baen",
          "name_th": "กระทุ่มแบน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 816,
          "province_id": 59,
          "name_en": "Ban Phaeo",
          "name_th": "บ้านแพ้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 817,
          "province_id": 60,
          "name_en": "Mueang Samut Songkhram",
          "name_th": "เมืองสมุทรสงคราม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 818,
          "province_id": 60,
          "name_en": "Bang Khonthi",
          "name_th": "บางคนที",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 819,
          "province_id": 60,
          "name_en": "Amphawa",
          "name_th": "อัมพวา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 820,
          "province_id": 61,
          "name_en": "Mueang Phetchaburi",
          "name_th": "เมืองเพชรบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 821,
          "province_id": 61,
          "name_en": "Khao Yoi",
          "name_th": "เขาย้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 822,
          "province_id": 61,
          "name_en": "Nong Ya Plong",
          "name_th": "หนองหญ้าปล้อง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 823,
          "province_id": 61,
          "name_en": "Cha-am",
          "name_th": "ชะอำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 824,
          "province_id": 61,
          "name_en": "Tha Yang",
          "name_th": "ท่ายาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 825,
          "province_id": 61,
          "name_en": "Ban Lat",
          "name_th": "บ้านลาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 826,
          "province_id": 61,
          "name_en": "Ban Laem",
          "name_th": "บ้านแหลม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 827,
          "province_id": 61,
          "name_en": "Kaeng Krachan",
          "name_th": "แก่งกระจาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 828,
          "province_id": 62,
          "name_en": "Mueang Prachuap Khiri Khan",
          "name_th": "เมืองประจวบคีรีขันธ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 829,
          "province_id": 62,
          "name_en": "Kui Buri",
          "name_th": "กุยบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 830,
          "province_id": 62,
          "name_en": "Thap Sakae",
          "name_th": "ทับสะแก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 831,
          "province_id": 62,
          "name_en": "Bang Saphan",
          "name_th": "บางสะพาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 832,
          "province_id": 62,
          "name_en": "Bang Saphan Noi",
          "name_th": "บางสะพานน้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 833,
          "province_id": 62,
          "name_en": "Pran Buri",
          "name_th": "ปราณบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 834,
          "province_id": 62,
          "name_en": "Hua Hin",
          "name_th": "หัวหิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 835,
          "province_id": 62,
          "name_en": "Sam Roi Yot",
          "name_th": "สามร้อยยอด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 836,
          "province_id": 63,
          "name_en": "Mueang Nakhon Si Thammarat",
          "name_th": "เมืองนครศรีธรรมราช",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 837,
          "province_id": 63,
          "name_en": "Phrom Khiri",
          "name_th": "พรหมคีรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 838,
          "province_id": 63,
          "name_en": "Lan Saka",
          "name_th": "ลานสกา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 839,
          "province_id": 63,
          "name_en": "Chawang",
          "name_th": "ฉวาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 840,
          "province_id": 63,
          "name_en": "Phipun",
          "name_th": "พิปูน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 841,
          "province_id": 63,
          "name_en": "Chian Yai",
          "name_th": "เชียรใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 842,
          "province_id": 63,
          "name_en": "Cha-uat",
          "name_th": "ชะอวด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 843,
          "province_id": 63,
          "name_en": "Tha Sala",
          "name_th": "ท่าศาลา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 844,
          "province_id": 63,
          "name_en": "Thung Song",
          "name_th": "ทุ่งสง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 845,
          "province_id": 63,
          "name_en": "Na Bon",
          "name_th": "นาบอน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 846,
          "province_id": 63,
          "name_en": "Thung Yai",
          "name_th": "ทุ่งใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 847,
          "province_id": 63,
          "name_en": "Pak Phanang",
          "name_th": "ปากพนัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 848,
          "province_id": 63,
          "name_en": "Ron Phibun",
          "name_th": "ร่อนพิบูลย์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 849,
          "province_id": 63,
          "name_en": "Sichon",
          "name_th": "สิชล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 850,
          "province_id": 63,
          "name_en": "Khanom",
          "name_th": "ขนอม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 851,
          "province_id": 63,
          "name_en": "Hua Sai",
          "name_th": "หัวไทร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 852,
          "province_id": 63,
          "name_en": "Bang Khan",
          "name_th": "บางขัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 853,
          "province_id": 63,
          "name_en": "Tham Phannara",
          "name_th": "ถ้ำพรรณรา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 854,
          "province_id": 63,
          "name_en": "Chulabhorn",
          "name_th": "จุฬาภรณ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 855,
          "province_id": 63,
          "name_en": "Phra Phrom",
          "name_th": "พระพรหม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 856,
          "province_id": 63,
          "name_en": "Nopphitam",
          "name_th": "นบพิตำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 857,
          "province_id": 63,
          "name_en": "Chang Klang",
          "name_th": "ช้างกลาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 858,
          "province_id": 63,
          "name_en": "Chaloem Phra Kiat",
          "name_th": "เฉลิมพระเกียรติ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 859,
          "province_id": 63,
          "name_en": "Chian Yai*",
          "name_th": "เชียรใหญ่ (สาขาตำบลเสือหึง)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 860,
          "province_id": 63,
          "name_en": "Suan Luang",
          "name_th": "สาขาตำบลสวนหลวง**",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 861,
          "province_id": 63,
          "name_en": "Ron Phibun",
          "name_th": "ร่อนพิบูลย์ (สาขาตำบลหินตก)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 862,
          "province_id": 63,
          "name_en": "Hua Sai",
          "name_th": "หัวไทร (สาขาตำบลควนชะลิก)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 863,
          "province_id": 63,
          "name_en": "Thung Song",
          "name_th": "ทุ่งสง (สาขาตำบลกะปาง)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 864,
          "province_id": 64,
          "name_en": "Mueang Krabi",
          "name_th": "เมืองกระบี่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 865,
          "province_id": 64,
          "name_en": "Khao Phanom",
          "name_th": "เขาพนม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 866,
          "province_id": 64,
          "name_en": "Ko Lanta",
          "name_th": "เกาะลันตา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 867,
          "province_id": 64,
          "name_en": "Khlong Thom",
          "name_th": "คลองท่อม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 868,
          "province_id": 64,
          "name_en": "Ao Luek",
          "name_th": "อ่าวลึก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 869,
          "province_id": 64,
          "name_en": "Plai Phraya",
          "name_th": "ปลายพระยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 870,
          "province_id": 64,
          "name_en": "Lam Thap",
          "name_th": "ลำทับ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 871,
          "province_id": 64,
          "name_en": "Nuea Khlong",
          "name_th": "เหนือคลอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 872,
          "province_id": 65,
          "name_en": "Mueang Phang-nga",
          "name_th": "เมืองพังงา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 873,
          "province_id": 65,
          "name_en": "Ko Yao",
          "name_th": "เกาะยาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 874,
          "province_id": 65,
          "name_en": "Kapong",
          "name_th": "กะปง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 875,
          "province_id": 65,
          "name_en": "Takua Thung",
          "name_th": "ตะกั่วทุ่ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 876,
          "province_id": 65,
          "name_en": "Takua Pa",
          "name_th": "ตะกั่วป่า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 877,
          "province_id": 65,
          "name_en": "Khura Buri",
          "name_th": "คุระบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 878,
          "province_id": 65,
          "name_en": "Thap Put",
          "name_th": "ทับปุด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 879,
          "province_id": 65,
          "name_en": "Thai Mueang",
          "name_th": "ท้ายเหมือง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 880,
          "province_id": 66,
          "name_en": "Mueang Phuket",
          "name_th": "เมืองภูเก็ต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 881,
          "province_id": 66,
          "name_en": "Kathu",
          "name_th": "กะทู้",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 882,
          "province_id": 66,
          "name_en": "Thalang",
          "name_th": "ถลาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 883,
          "province_id": 66,
          "name_en": "*Tung Ka",
          "name_th": "*ทุ่งคา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 884,
          "province_id": 67,
          "name_en": "Mueang Surat Thani",
          "name_th": "เมืองสุราษฎร์ธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 885,
          "province_id": 67,
          "name_en": "Kanchanadit",
          "name_th": "กาญจนดิษฐ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 886,
          "province_id": 67,
          "name_en": "Don Sak",
          "name_th": "ดอนสัก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 887,
          "province_id": 67,
          "name_en": "Ko Samui",
          "name_th": "เกาะสมุย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 888,
          "province_id": 67,
          "name_en": "Ko Pha-ngan",
          "name_th": "เกาะพะงัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 889,
          "province_id": 67,
          "name_en": "Chaiya",
          "name_th": "ไชยา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 890,
          "province_id": 67,
          "name_en": "Tha Chana",
          "name_th": "ท่าชนะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 891,
          "province_id": 67,
          "name_en": "Khiri Rat Nikhom",
          "name_th": "คีรีรัฐนิคม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 892,
          "province_id": 67,
          "name_en": "Ban Ta Khun",
          "name_th": "บ้านตาขุน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 893,
          "province_id": 67,
          "name_en": "Phanom",
          "name_th": "พนม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 894,
          "province_id": 67,
          "name_en": "Tha Chang",
          "name_th": "ท่าฉาง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 895,
          "province_id": 67,
          "name_en": "Ban Na San",
          "name_th": "บ้านนาสาร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 896,
          "province_id": 67,
          "name_en": "Ban Na Doem",
          "name_th": "บ้านนาเดิม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 897,
          "province_id": 67,
          "name_en": "Khian Sa",
          "name_th": "เคียนซา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 898,
          "province_id": 67,
          "name_en": "Wiang Sa",
          "name_th": "เวียงสระ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 899,
          "province_id": 67,
          "name_en": "Phrasaeng",
          "name_th": "พระแสง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 900,
          "province_id": 67,
          "name_en": "Phunphin",
          "name_th": "พุนพิน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 901,
          "province_id": 67,
          "name_en": "Chai Buri",
          "name_th": "ชัยบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 902,
          "province_id": 67,
          "name_en": "Vibhavadi",
          "name_th": "วิภาวดี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 903,
          "province_id": 67,
          "name_en": "Ko Pha-ngan",
          "name_th": "เกาะพงัน (สาขาตำบลเกาะเต่า)*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 904,
          "province_id": 67,
          "name_en": "*Ban Don",
          "name_th": "*อ.บ้านดอน จ.สุราษฎร์ธานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 905,
          "province_id": 68,
          "name_en": "Mueang Ranong",
          "name_th": "เมืองระนอง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 906,
          "province_id": 68,
          "name_en": "La-un",
          "name_th": "ละอุ่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 907,
          "province_id": 68,
          "name_en": "Kapoe",
          "name_th": "กะเปอร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 908,
          "province_id": 68,
          "name_en": "Kra Buri",
          "name_th": "กระบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 909,
          "province_id": 68,
          "name_en": "Suk Samran",
          "name_th": "สุขสำราญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 910,
          "province_id": 69,
          "name_en": "Mueang Chumphon",
          "name_th": "เมืองชุมพร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 911,
          "province_id": 69,
          "name_en": "Tha Sae",
          "name_th": "ท่าแซะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 912,
          "province_id": 69,
          "name_en": "Pathio",
          "name_th": "ปะทิว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 913,
          "province_id": 69,
          "name_en": "Lang Suan",
          "name_th": "หลังสวน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 914,
          "province_id": 69,
          "name_en": "Lamae",
          "name_th": "ละแม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 915,
          "province_id": 69,
          "name_en": "Phato",
          "name_th": "พะโต๊ะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 916,
          "province_id": 69,
          "name_en": "Sawi",
          "name_th": "สวี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 917,
          "province_id": 69,
          "name_en": "Thung Tako",
          "name_th": "ทุ่งตะโก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 918,
          "province_id": 70,
          "name_en": "Mueang Songkhla",
          "name_th": "เมืองสงขลา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 919,
          "province_id": 70,
          "name_en": "Sathing Phra",
          "name_th": "สทิงพระ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 920,
          "province_id": 70,
          "name_en": "Chana",
          "name_th": "จะนะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 921,
          "province_id": 70,
          "name_en": "Na Thawi",
          "name_th": "นาทวี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 922,
          "province_id": 70,
          "name_en": "Thepha",
          "name_th": "เทพา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 923,
          "province_id": 70,
          "name_en": "Saba Yoi",
          "name_th": "สะบ้าย้อย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 924,
          "province_id": 70,
          "name_en": "Ranot",
          "name_th": "ระโนด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 925,
          "province_id": 70,
          "name_en": "Krasae Sin",
          "name_th": "กระแสสินธุ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 926,
          "province_id": 70,
          "name_en": "Rattaphum",
          "name_th": "รัตภูมิ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 927,
          "province_id": 70,
          "name_en": "Sadao",
          "name_th": "สะเดา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 928,
          "province_id": 70,
          "name_en": "Hat Yai",
          "name_th": "หาดใหญ่",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 929,
          "province_id": 70,
          "name_en": "Na Mom",
          "name_th": "นาหม่อม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 930,
          "province_id": 70,
          "name_en": "Khuan Niang",
          "name_th": "ควนเนียง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 931,
          "province_id": 70,
          "name_en": "Bang Klam",
          "name_th": "บางกล่ำ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 932,
          "province_id": 70,
          "name_en": "Singhanakhon",
          "name_th": "สิงหนคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 933,
          "province_id": 70,
          "name_en": "Khlong Hoi Khong",
          "name_th": "คลองหอยโข่ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 934,
          "province_id": 70,
          "name_en": "Sum Nung Kam",
          "name_th": "ท้องถิ่นเทศบาลตำบลสำนักขาม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 935,
          "province_id": 70,
          "name_en": "Ban Pru*",
          "name_th": "เทศบาลตำบลบ้านพรุ*",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 936,
          "province_id": 71,
          "name_en": "Mueang Satun",
          "name_th": "เมืองสตูล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 937,
          "province_id": 71,
          "name_en": "Khuan Don",
          "name_th": "ควนโดน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 938,
          "province_id": 71,
          "name_en": "Khuan Kalong",
          "name_th": "ควนกาหลง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 939,
          "province_id": 71,
          "name_en": "Tha Phae",
          "name_th": "ท่าแพ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 940,
          "province_id": 71,
          "name_en": "La-ngu",
          "name_th": "ละงู",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 941,
          "province_id": 71,
          "name_en": "Thung Wa",
          "name_th": "ทุ่งหว้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 942,
          "province_id": 71,
          "name_en": "Manang",
          "name_th": "มะนัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 943,
          "province_id": 72,
          "name_en": "Mueang Trang",
          "name_th": "เมืองตรัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 944,
          "province_id": 72,
          "name_en": "Kantang",
          "name_th": "กันตัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 945,
          "province_id": 72,
          "name_en": "Yan Ta Khao",
          "name_th": "ย่านตาขาว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 946,
          "province_id": 72,
          "name_en": "Palian",
          "name_th": "ปะเหลียน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 947,
          "province_id": 72,
          "name_en": "Sikao",
          "name_th": "สิเกา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 948,
          "province_id": 72,
          "name_en": "Huai Yot",
          "name_th": "ห้วยยอด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 949,
          "province_id": 72,
          "name_en": "Wang Wiset",
          "name_th": "วังวิเศษ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 950,
          "province_id": 72,
          "name_en": "Na Yong",
          "name_th": "นาโยง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 951,
          "province_id": 72,
          "name_en": "Ratsada",
          "name_th": "รัษฎา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 952,
          "province_id": 72,
          "name_en": "Hat Samran",
          "name_th": "หาดสำราญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 953,
          "province_id": 72,
          "name_en": "Mueang Trang(Krong Teng)**",
          "name_th": "อำเภอเมืองตรัง(สาขาคลองเต็ง)**",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 954,
          "province_id": 73,
          "name_en": "Mueang Phatthalung",
          "name_th": "เมืองพัทลุง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 955,
          "province_id": 73,
          "name_en": "Kong Ra",
          "name_th": "กงหรา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 956,
          "province_id": 73,
          "name_en": "Khao Chaison",
          "name_th": "เขาชัยสน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 957,
          "province_id": 73,
          "name_en": "Tamot",
          "name_th": "ตะโหมด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 958,
          "province_id": 73,
          "name_en": "Khuan Khanun",
          "name_th": "ควนขนุน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 959,
          "province_id": 73,
          "name_en": "Pak Phayun",
          "name_th": "ปากพะยูน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 960,
          "province_id": 73,
          "name_en": "Si Banphot",
          "name_th": "ศรีบรรพต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 961,
          "province_id": 73,
          "name_en": "Pa Bon",
          "name_th": "ป่าบอน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 962,
          "province_id": 73,
          "name_en": "Bang Kaeo",
          "name_th": "บางแก้ว",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 963,
          "province_id": 73,
          "name_en": "Pa Phayom",
          "name_th": "ป่าพะยอม",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 964,
          "province_id": 73,
          "name_en": "Srinagarindra",
          "name_th": "ศรีนครินทร์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 965,
          "province_id": 74,
          "name_en": "Mueang Pattani",
          "name_th": "เมืองปัตตานี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 966,
          "province_id": 74,
          "name_en": "Khok Pho",
          "name_th": "โคกโพธิ์",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 967,
          "province_id": 74,
          "name_en": "Nong Chik",
          "name_th": "หนองจิก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 968,
          "province_id": 74,
          "name_en": "Panare",
          "name_th": "ปะนาเระ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 969,
          "province_id": 74,
          "name_en": "Mayo",
          "name_th": "มายอ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 970,
          "province_id": 74,
          "name_en": "Thung Yang Daeng",
          "name_th": "ทุ่งยางแดง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 971,
          "province_id": 74,
          "name_en": "Sai Buri",
          "name_th": "สายบุรี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 972,
          "province_id": 74,
          "name_en": "Mai Kaen",
          "name_th": "ไม้แก่น",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 973,
          "province_id": 74,
          "name_en": "Yaring",
          "name_th": "ยะหริ่ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 974,
          "province_id": 74,
          "name_en": "Yarang",
          "name_th": "ยะรัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 975,
          "province_id": 74,
          "name_en": "Kapho",
          "name_th": "กะพ้อ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 976,
          "province_id": 74,
          "name_en": "Mae Lan",
          "name_th": "แม่ลาน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 977,
          "province_id": 75,
          "name_en": "Mueang Yala",
          "name_th": "เมืองยะลา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 978,
          "province_id": 75,
          "name_en": "Betong",
          "name_th": "เบตง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 979,
          "province_id": 75,
          "name_en": "Bannang Sata",
          "name_th": "บันนังสตา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 980,
          "province_id": 75,
          "name_en": "Than To",
          "name_th": "ธารโต",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 981,
          "province_id": 75,
          "name_en": "Yaha",
          "name_th": "ยะหา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 982,
          "province_id": 75,
          "name_en": "Raman",
          "name_th": "รามัน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 983,
          "province_id": 75,
          "name_en": "Kabang",
          "name_th": "กาบัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 984,
          "province_id": 75,
          "name_en": "Krong Pinang",
          "name_th": "กรงปินัง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 985,
          "province_id": 76,
          "name_en": "Mueang Narathiwat",
          "name_th": "เมืองนราธิวาส",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 986,
          "province_id": 76,
          "name_en": "Tak Bai",
          "name_th": "ตากใบ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 987,
          "province_id": 76,
          "name_en": "Bacho",
          "name_th": "บาเจาะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 988,
          "province_id": 76,
          "name_en": "Yi-ngo",
          "name_th": "ยี่งอ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 989,
          "province_id": 76,
          "name_en": "Ra-ngae",
          "name_th": "ระแงะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 990,
          "province_id": 76,
          "name_en": "Rueso",
          "name_th": "รือเสาะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 991,
          "province_id": 76,
          "name_en": "Si Sakhon",
          "name_th": "ศรีสาคร",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 992,
          "province_id": 76,
          "name_en": "Waeng",
          "name_th": "แว้ง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 993,
          "province_id": 76,
          "name_en": "Sukhirin",
          "name_th": "สุคิริน",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 994,
          "province_id": 76,
          "name_en": "Su-ngai Kolok",
          "name_th": "สุไหงโก-ลก",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 995,
          "province_id": 76,
          "name_en": "Su-ngai Padi",
          "name_th": "สุไหงปาดี",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 996,
          "province_id": 76,
          "name_en": "Chanae",
          "name_th": "จะแนะ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 997,
          "province_id": 76,
          "name_en": "Cho-airong",
          "name_th": "เจาะไอร้อง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 998,
          "province_id": 76,
          "name_en": "*Bang Nra",
          "name_th": "*อ.บางนรา จ.นราธิวาส",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 1005,
          "province_id": 77,
          "name_en": "Pak Khat",
          "name_th": "ปากคาด",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 1004,
          "province_id": 77,
          "name_en": "Bueng Khong Long",
          "name_th": "บึงโขงหลง",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 1003,
          "province_id": 77,
          "name_en": "Si Wilai",
          "name_th": "ศรีวิไล",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 1002,
          "province_id": 77,
          "name_en": "Phon Charoen",
          "name_th": "พรเจริญ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 1001,
          "province_id": 77,
          "name_en": "So Phisai",
          "name_th": "โซ่พิสัย",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 1000,
          "province_id": 77,
          "name_en": "Seka",
          "name_th": "เซกา",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 999,
          "province_id": 77,
          "name_en": "Mueang Bueng Kan",
          "name_th": "เมืองบึงกาฬ",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        },
        {
          "id": 1006,
          "province_id": 77,
          "name_en": "Bung Khla",
          "name_th": "บุ่งคล้า",
          "createdAt": "2021-11-30 16:47:53.408+07",
          "updatedAt": "2021-11-30 16:47:53.408+07",
          "deletedAt": null
        }
        // ,
        // {
        //   "id": 1007,
        //   "province_id": 38,
        //   "name_en": "Galyani Vadhana",
        //   "name_th": "กัลยาณิวัฒนา",
        //   "createdAt": "2021-11-30 16:47:53.408+07",
        //   "updatedAt": "2021-11-30 16:47:53.408+07",
        //   "deletedAt": null
        // }
      ]
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Thai_amphures', null);
  }
};