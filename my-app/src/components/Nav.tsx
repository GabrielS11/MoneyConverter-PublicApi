import reactlogo from "../assets/react.svg";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <>
      <header className="h-full w-full">
        <nav className="h-full w-full items-center justify-evenly gap-x-64 flex flex-row px-12">
          {/* <ul className="h-full w-full flex items-center justify-around">
            <li>
              <img src={reactlogo} alt="React logo" />
            </li>
            <li>
              <h1 className="text-4xl">Cash Converter</h1>
            </li>
            <li className="w-1/25">
              <Button className="w-full" variant="ghost">
                Footer
              </Button>
            </li>
            <li>
              <ModeToggle></ModeToggle>
            </li>
          </ul> */}

          <div className="w-fit">
            <img src={reactlogo} alt="React Logo" />
          </div>
          <div>
            <h1 className="text-4xl">Money Converter</h1>
          </div>
          <div className="w-1/14">
            <ul className="h-full w-full flex flex-row intems center justify-between">
              <li>
                <Button variant="ghost">Footer</Button>
              </li>
              <li>
                <ModeToggle></ModeToggle>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
