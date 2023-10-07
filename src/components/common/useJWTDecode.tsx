import { useState, useEffect } from "react";
import jwt, { JwtPayload } from "jsonwebtoken";

function useJWTDecode(token: string) {
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);

  useEffect(() => {
    if (token) {
      const decoded = jwt.decode(token);
      if (typeof decoded === "object" && decoded !== null) {
        setDecodedToken(decoded as JwtPayload);
      }
    }
  }, [token]);

  return decodedToken;
}

export default useJWTDecode;
