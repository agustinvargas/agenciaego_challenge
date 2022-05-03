import axios from 'axios';

const baseULR = process.env.NEXT_PUBLIC_BASE_URL;

export const getModels = async () => {
  const req = await axios(baseULR);
  return req;
};

export const getModel = async modelID => {
  const req = await axios(`${baseULR}/${modelID}`);
  return req;
};
