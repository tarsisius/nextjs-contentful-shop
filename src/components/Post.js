import Link from 'next/link'
import Image from 'next/image'

function Post({ slug, coverImage, title }) {
    return (
        <>
            <Link href={`/${slug}`}>
                <a>
                    <div className="card">
                        <div className="top">
                            <Image
                                src={coverImage}
                                alt={coverImage}
                                width={500}
                                height={500}
                            />
                            {/* <img src={coverImage} alt={coverImage} /> */}
                        </div>
                        <div className="bottom">
                            <h3>{title}</h3>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}
export default Post