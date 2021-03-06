import styles from "./styles.module.scss";
import { Image } from "cloudinary-react";

export default function Images({ files, alt, path, handleClick }) {
  return (
    <div className={styles.grid}>
      {files.map((image, key) => (
        <div
          key={key}
          onClick={() => handleClick(image, alt, path, true, key)}
          className={styles.imgContainer}
        >
          <Image
            cloudName="kyambalo"
            publicId={image}
            alt={alt}
            crop="fill"
            gravity="center"
            width={400}
            height={330}
            secure={true}
          />
        </div>
      ))}
    </div>
  );
}
