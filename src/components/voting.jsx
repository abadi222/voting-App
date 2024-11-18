import { useState, useEffect } from "react";

function Voting() {
  const [likesShopping, setLikesShopping] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api.json");
        const data = await response.json();
        setLikesShopping(data.likesShopping);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleVote = (vote) => {
    const updatedValue = vote === "yes";
    setLikesShopping(updatedValue);

    localStorage.setItem("likesShopping", JSON.stringify(updatedValue));
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("likesShopping");
    if (storedValue) {
      setLikesShopping(JSON.parse(storedValue));
    }
  }, []);

  return (
    <div>
      <h1>Do you like shopping?</h1>
      <button onClick={() => handleVote("yes")}>Yes</button>
      <button onClick={() => handleVote("no")}>No</button>
    </div>
  );
}
export default Voting;
