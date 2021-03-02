import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import toast from "react-hot-toast";

import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      {/* <Link href="/dverde">
        <a>Dverde profile</a>
      </Link>
      <Loader show /> */}

      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </div>
  );
}
