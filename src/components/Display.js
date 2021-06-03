import Image from 'next/image'
import { useRef, useState } from 'react'

function Display({ image }) {
    const ref = useRef()
    const [mainImg, setMainImg] = useState(0)

    const handleTab = (index) => {
        setMainImg(index)

        const images = ref.current.children

        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace('active', '')
        }

        images[index].className = 'active'
    }

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset
    }

    return (
        <div className="left">
            <div className="main-img">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src={'https:' + image[mainImg].fields.file.url}
                    alt={image[mainImg].fields.file.title}
                />
            </div>
            <div className="slide-img">
                {image.length > 5 &&
                    <button
                        aria-label="left-scroll"
                        className="scroll-button left-scroll"
                        onClick={() => scroll(-100)}
                    >
                        <Image src="/assets/svg/left-chevron.svg" height={150} width={150} />
                    </button>
                }
                <div className="small-img" ref={ref}>
                    {image.map((img, index) => (
                        <span
                            key={index}
                            onClick={() => handleTab(index)}
                        >
                            <Image
                                src={'https:' + img.fields.file.url}
                                alt={img.fields.file.title}
                                width={img.fields.file.details.image.width}
                                height={img.fields.file.details.image.height}
                                objectFit="cover"
                            />
                        </span>
                    ))}
                </div>
                {image.length > 5 &&
                    <button
                        aria-label="right-scroll"
                        className="scroll-button right-scroll"
                        onClick={() => scroll(100)}
                    >
                        <Image src="/assets/svg/right-chevron.svg" height={150} width={150} />
                    </button>
                }
            </div>
        </div>
    )
}
export default Display