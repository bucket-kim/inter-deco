import { Hanko, register } from "@teamhanko/hanko-elements";
import { useEffect, useState } from "react";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

const LogOut = () => {
  // const navigate = useNavigate();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? "")),
    );
  }, []);

  const handleLogOut = async () => {
    try {
      await hanko?.user.logout();
      // navigate("/login");
    } catch (error) {
      console.log("Error during logout", error);
    }
  };

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <div style={{ cursor: "pointer" }}>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default LogOut;
