// File System
const fs = require("fs");

// Readline
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
const dataPath = "./data/contacts.json";

// cek apakah folder data ada
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// cek apakah file contacts.json ada
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// function membuat pertanyaan
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) =>
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    })
  );
};

const simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  contacts.push(contact);

  try {
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih data Anda sudah kami simpan");
  } catch (err) {
    console.log(err);
  }
  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
