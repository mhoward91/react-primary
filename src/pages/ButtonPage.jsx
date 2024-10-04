import { IoCarSport } from "react-icons/io5";
import "../App.css";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5">
          <IoCarSport />
          Lando
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <IoCarSport />
          Max
        </Button>
      </div>
      <div>
        <Button success>
          <IoCarSport />
          Oscar
        </Button>
      </div>
      <div>
        <Button warning>George</Button>
      </div>
      <div>
        <Button danger>Lewis</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
