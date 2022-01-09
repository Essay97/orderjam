exports.handler = async (event, context) => {
  console.log(context);
  let url, token;
  try {
    ({ url, token } = context.clientContext.user);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }

  console.log("url", url);
  console.log("token", token);
  const response = await fetch(`${url}/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
