import Image from "next/image";
import { getRandomGreeting } from './utils'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>
        {getRandomGreeting()}
      </p>
    </div>
  );
}
