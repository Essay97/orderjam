exports.handler = async () => {
  console.log("function test.js ran");

  const data = { foo: "bar" };

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
