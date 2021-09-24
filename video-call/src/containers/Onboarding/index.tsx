import { Button } from "antd";
import { Link } from "react-router-dom";
import { SOnboarding } from "./styles";

export default function Onboarding() {

  return (
    <SOnboarding>
      <img src="/images/video.jpg" alt="video" width={250} />
      <p>Hi three !</p>
      <Link to="/login">
        <Button type="primary">
          Start calling !
        </Button>
      </Link>
    </SOnboarding>
  );
}
