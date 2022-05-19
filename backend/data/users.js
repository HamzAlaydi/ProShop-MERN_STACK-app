import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Normal User",
    email: "Normal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: " John",
    email: "John@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
