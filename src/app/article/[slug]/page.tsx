'use client'
import { Avatar, Divider } from "@mui/material";
import { FiBookmark, FiCommand, FiHeart, FiShare } from 'react-icons/fi'
import { FaPlayCircle, FaRegComment } from 'react-icons/fa'
import BookmarkIcon from '@mui/icons-material/BookmarkAddOutlined';

export default function ArticlePage() {
   return (
      <div className="container mx-auto mt-10">
         <div className="grid grid-cols-12">
            <div className="col-span-3"></div>

            <div className="col-span-6">
               <h1 style={{ fontSize: '38px', fontWeight: '600', lineHeight: '1.2em' }}>Eco-Friendly Fast Lane: Go, Rust & Swift Are Leaving PHP, Node.js And Python In The Dust</h1>

               <section className="author flex items-center gap-3 mt-5">
                  <Avatar alt="avatar" src="https://cdn.idntimes.com/content-images/community/2022/02/shingeki-no-kyojin-celebra-el-cumpleanos-de-levi-ackerman-f8730297ff07a53c9fb6d86d37909c1a-31ec125068e41667266d86873a5dc9e0_600x400.png" />
                  <div className="published">
                     <p className="font-medium">Author</p>
                     <p style={{ fontSize: '12px' }}>Kamis, 23 Desember 2023 . 7 min read</p>
                  </div>
               </section>

               <Divider light className="mt-5" />
               <section className="flex items-center pt-2 pb-2 px-2">
                  <div className="flex items-center gap-5" style={{ flexGrow: 1 }}>
                     <FiHeart className="cursor-pointer" />
                     <FaRegComment className="cursor-pointer" />
                  </div>
                  <div className="flex items-center gap-5">
                     <FaPlayCircle className="cursor-pointer" />
                     <BookmarkIcon className="cursor-pointer" />
                     <FiShare className="cursor-pointer" />
                  </div>
               </section>
               <Divider light />
            </div>

            <div className="col-span-3"></div>
         </div>
      </div>
   )
}