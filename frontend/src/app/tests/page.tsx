import Image from "next/image";
import styles from "../page.module.css";

import ImagesArray from "@/components/Items/photosArray";
export default async function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<ImagesArray />
			</main>
			<footer className={styles.footer}>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Interested? contact me
				</a>
			</footer>
		</div>
	);
}
