const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 12);
  console.log(salt);
  console.log(hash);
};

const login = async (password, hashedPw) => {
  const result = await bcrypt.compare(password, hashedPw);
  if (result) {
    console.log("Logged in");
  } else {
    console.log("Incorrect password");
  }
};

hashPassword("fiesta"); // $2b$12$XqU0Ksa7MilgGD6R3.yAn.GkiZ3dQZf/0E1n6OGQ1Nx/88R4Hye22

login("fiesta", "$2b$12$XqU0Ksa7MilgGD6R3.yAn.GkiZ3dQZf/0E1n6OGQ1Nx/88R4Hye22"); // Logged in
