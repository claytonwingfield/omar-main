import Image from "next/image";
import { CldImage } from "next-cloudinary";

import Link from "next/link";

export default function Gallery({ thumbnailUrl, title, id, height, width }) {
  return (
    <div style={{}}>
      <Link as={`/preview/${id}`} href="/preview/[id]">
        <a>
          <CldImage
            height={height}
            width={width}
            src={thumbnailUrl}
            unoptimized={true}
            loading="eager"
            layout="fixed"
            objectfit="cover"
          />
          <div className="photoid"> {title}</div>
        </a>
      </Link>
    </div>
  );
}
