const PORT = process.env.PORT || 8080;

const generateEnv = () => {
  return {
    PORT: PORT
  };
};

export default generateEnv;