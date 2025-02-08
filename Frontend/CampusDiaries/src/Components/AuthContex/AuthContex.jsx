import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user details
  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/userDetails", {
        method: "GET",
        credentials: "include", //  Ensures session cookies are sent
      });

      if (!response.ok) {
        throw new Error("User not authenticated");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, fetchUserDetails }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
