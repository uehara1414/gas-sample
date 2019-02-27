// eslint-disable-next-line import/prefer-default-export
export const GASJsonHTTPService = jest.fn().mockImplementation(() => {
  return {
    request: jest.fn()
  };
})
