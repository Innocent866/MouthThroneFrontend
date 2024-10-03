import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [profile, setProfile] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]); // Proper state initialization
  const [allData, setAllData] = useState([]); // Proper state initialization
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleShowProfile = () => {
    setProfile(!profile); // Toggle profile state more cleanly
  };

  const handleFetch = async (id) => {
    try {
      console.log(id);
      setIsLoading(true);
      const res = await axios.get(
        `https://mouththrown.onrender.com/api/item/getproductbyid/${id}`
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://mouththrown.onrender.com/api/item/getallproducts`
      );
      setAllData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    getAllProduct()
  },[])


  
  return (
    <AppContext.Provider
      value={{
        setProfile,
        profile,
        handleShowProfile,
        setOpen,
        open,
        data,
        isLoading, // Pass isLoading if you want to display loading status
        handleFetch,
        allData,
        getAllProduct
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
