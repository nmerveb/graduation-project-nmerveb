import React, { createContext, useState, useContext } from 'react';

const FormInfoContext = createContext();

const FormInfoProvider = ({ children }) => {
  const [data, setData] = useState({});
  const values = { data, setData };

  return <FormInfoContext.Provider value={values}>{children}</FormInfoContext.Provider>;
};

export const useFormInfo = () => useContext(FormInfoContext);
export default FormInfoProvider;
