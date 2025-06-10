import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatDate } from "@/lib/utils";
import { StartupWithAuthor } from "@/types";

const StartupCard = ({ post }: { post: StartupWithAuthor }) => {
    const {
        createdAt,
        views,
        author,
        title,
        category,
        id,
        image,
        description,
    } = post;


    return (
        <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-md hover:border-primary-DEFAULT transition-all duration-500 hover:shadow-lg hover:bg-primary-100 group">
            <div className="flex justify-between items-center">
                <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">{formatDate(createdAt)}</p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary-DEFAULT" />
                    <span className="font-medium text-[16px] text-black">{views}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?.id}`}>
                        <p className="font-medium text-[16px] text-black line-clamp-1">{author?.name}</p>
                    </Link>
                    <Link href={`/startup/${id}`}>
                        <h3 className="font-semibold text-[26px] text-black line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?.id}`}>
                    <Image
                        src={author?.image}
                        alt={author?.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </Link>
            </div>

            <Link href={`/startup/${id}`}>
                <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">{description}</p>

                <img src={image} alt="startup" className="w-full h-[164px] rounded-[10px] object-cover" />
            </Link>

            <div className="flex justify-between items-center gap-3 mt-5">
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className="font-medium text-[16px] text-black">{category}</p>
                </Link>
                <Button className="rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3" asChild>
                    <Link href={`/startup/${id}`}>Details</Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCard