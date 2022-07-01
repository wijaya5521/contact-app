const { tulisPertanyaan, simpanContact } = require("./contacts");

// function utama
const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama Anda : ");
  const email = await tulisPertanyaan("Masukkan email Anda : ");
  const noHP = await tulisPertanyaan("Masukkan no HP Anda : ");

  simpanContact(nama, email, noHP);
};

main();
