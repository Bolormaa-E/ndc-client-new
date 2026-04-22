"use client";

import React from "react";
import NewsDetail from "@/components/NewsDetail";

const page = () => {
  // const params = useParams();
  // const [posts, setPosts] = useState(null);

  // let id = params.id;
  // // const { slug } = router.query;

  // // console.log("=================", id);

  // useEffect(() => {
  //   axios
  //     .get(`https://ndc.energy.mn/wp-admin/api/blogs/${id}?populate=*`, {
  //       headers: {
  //         Authorization:
  //           "Bearer 7bdcdb1370cbf3e4291f8c0b2d1c0a2237df812e1e96a99544d5561bd83f822c6f5fd2dac1fbcc56725c03790f663986a6e706db428be46c93313e1499c7be9af7ef343a9f081f71289dbf19147cb44aa2622dcc590e3ef6fbc939a5fe083f5fbb582e549c7d64c4f7161de855967834537faebe9ac7208d85272ddbf0f4e6b2",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setPosts(res.data.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);
 

  return (
    <NewsDetail />
  );
};

export default page;
