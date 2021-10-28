const responseFormatter = async (
  api,
  defaultMessage = 'Opps! something went wrong, Pplease contact to admin.'
) => {
  try {
    const { data: response, status, ...request } = await api;

    if (status === 202 && response.error) {
      throw response;
    }

    return {
      data: response,
      message: response.message,
      error: null
    }
  } catch (error) {
    return {
      data: null,
      message: null,
      error: error.message || defaultMessage
    }
  }
};

export default responseFormatter;