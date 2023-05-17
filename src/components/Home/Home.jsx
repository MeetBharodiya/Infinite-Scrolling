import React, { useEffect, useState } from "react";
import Postscomponent from "../PostComp/Postscomponent";
import Loading from "../Loading/Loading";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page,setPage] = useState(1);
  const [loading,setLoading]=useState(true);

  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    const data = await res.json();
    setCard((prev)=>[...prev,...data]);
    setLoading(false);
  };

  const handleInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return ()=> window.removeEventListener("scroll",handleInfiniteScroll)
  }, []);

  return (
    <>
      <Postscomponent postInfo={card} />
      {loading && <Loading/>}
    </>
  );
};

export default Home;
