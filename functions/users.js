exports.handler = async (event, context) => {
  const { url, token } = context.clientContext.user;
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
