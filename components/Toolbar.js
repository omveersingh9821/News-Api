import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export default function Toolbar() {
  const router = useRouter();
  return (
    <>
      <div className={styles.main}>
        <div onClick={() => router.push("/")} className="mx-3">
          <h5 className="">Home</h5>
        </div>
        <div onClick={() => router.push("/categories")} className="mx-3">
          <h5 className="">Categories</h5>
        </div>
      </div>
    </>
  );
}
