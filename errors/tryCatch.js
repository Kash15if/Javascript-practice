// console.log(this.a);

try {
  throw new Error("Error Error Error");
} catch (err) {
  throw err;
} finally {
  console.log(5);
}

const Sum = (a, b) => {
  return a + b;
};

// console.log(this.b);
