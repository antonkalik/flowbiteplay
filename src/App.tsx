import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export default function App() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group outline>
        <Button color="gray">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button color="gray">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button color="gray">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </Button.Group>
      <Button.Group outline>
        <Button gradientMonochrome="info">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientMonochrome="info">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientMonochrome="info">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </Button.Group>
      <Button.Group outline>
        <Button gradientDuoTone="cyanToBlue">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button gradientDuoTone="cyanToBlue">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </Button.Group>
    </div>
  );
}
