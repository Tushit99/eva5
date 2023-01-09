import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineFolder } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [proj, setProject] = useState([]);

  const fetchmydata = async () => {
    let res = await fetch("https://api.github.com/users/tushit99");
    let da = await res.json();
    setData(da);
  };

  const fetchProjectData = async () => {
    let num = await fetch(
      "https://api.github.com/search/repositories?q=user:tushit99+fork:true&sort=updated&per_page=10&type=Repositories&limit=10"
    );
    let na = await num.json();
    setProject(na.items);
  };

  console.log(proj);

  useEffect(() => {
    fetchmydata();
    fetchProjectData();
  }, []);

  const handleresume = () => {
    window.open(
      "https://drive.google.com/file/d/1QDtKhJGLNZtCdd9Ia-8mJ1tMNs5fm-hg/view?usp=sharing",
      "_blank"
    );
  };

  const handlefollow = () => {
    window.open("https://github.com/Tushit99", "_blank");
  };

  return (
    <div className="portHead">
      <div className="portbox1">
        <div
          className="profileinfo"
          style={{ width: "500px", padding: "40px" }}
        >
          <Avatar src={data.avatar_url} width="50%" h="50%" />
          <h1 style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            {" "}
            <AiOutlineFolder /> {data.name}{" "}
          </h1>
          <h4> @{data.login} </h4>
          <h3> {data.bio} </h3>
          <Button onClick={handleresume}> Resume </Button>
          <Button onClick={handlefollow}> Follow </Button>
        </div>
        <div
          className="teckdetail"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button> TYPESCRIPT</button>
          <button> REACT.JS</button>
          <button> NODE.JS</button>
          <button> DENO</button>
          <button> MONGODB</button>
          <button> POSTGRESQL</button>
          <button> GIT</button>
          <button> REACTNATIVE</button>
          <button> CHAKRA-UI</button>
          <button> CSS</button>
          <button> ANTD</button>
          <button> TAILWIND</button>
          <button> MUI</button>
        </div>
        <div className="userDetail">
          Currently: {data.company}
          Location : {data.location}
          Followers : {data.followers}
        </div>
      </div>
      <div
        className="portbox2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {proj.map((e) => (
          <Box bg="blue.800" style={{ padding: "10px" }} key={e.id}>
            <h2> Project: {e.name} </h2>
            <h4> Language: {e.language} </h4>
            <div>
              <AiOutlineStar size="20px" />
              <h4>Forks: {e.forks}</h4>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
}
