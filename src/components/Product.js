import Link from 'next/link'
import Image from 'next/image'

function Product({ product }) {
    const { productName, slug, price, image } = product.fields
    return (
        <>
            <Link href={`/${slug}`}>
                <a>
                    <div className="card">
                        <div className="top">
                            <Image
                                src={'https:' + image[0].fields.file.url}
                                alt={image[0].fields.title}
                                width={image[0].fields.file.details.image.width}
                                height={image[0].fields.file.details.image.height}
                            />
                        </div>
                        <div className="bottom">
                            <h4>{productName}</h4>
                            <span>Rp {price}</span>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}
export default Product