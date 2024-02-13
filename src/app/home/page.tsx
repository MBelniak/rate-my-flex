'use client';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { CustomDrawer } from '@/app/[components]/Drawer';
import { Logo } from '@/app/[components]/Logo';
import MenuIcon from '@mui/icons-material/Menu';
export default function Home() {
  return (
    <>
      <div
        className={
          'w-full grid [grid-template-columns:80px_1fr_80px] items-center place-items-center'
        }
      >
        <CustomDrawer />
        <Logo />
      </div>

      <div className="flex flex-col justify-center items-center p-8">
        <h1>Here will be pretty women and handsome boys </h1>
        <div
          className={
            'bg-card p-4 rounded-xl flex flex-col min-w-[200px] w-[90%] max-w-[600px]'
          }
        >
          <div className={'p-2 flex gap-2 items-center'}>
            <AccountCircleIcon fontSize={'large'} />
            <div className={'flex flex-col'}>
              <span>Arnold Schwarzenegger</span>
              <span className={'text-sm text-gray-200'}>16 min ago</span>
            </div>
          </div>
          <div className={' h-[600px] flex-col flex'}>
            <div
              className={'content h-[90%]'}
              style={{
                backgroundImage: `url(https://imagez.tmz.com/image/75/4by3/2019/10/02/75bcf518ec57412a8d1f9284939b3442_xl.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                borderRadius: '8px',
              }}
            ></div>
            <div className={'mt-[-4rem]'}>
              <div
                className={
                  'footer bg-[linear-gradient(rgba(103,61,219,0),rgba(103,61,219,1))] p-[2rem]'
                }
              ></div>
              <div
                className={
                  'footer bg-secondary p-4 [border-bottom-left-radius:8px] [border-bottom-right-radius:8px] flex flex-col gap-2'
                }
              >
                <div className={'flex gap-2'}>
                  <FavoriteBorderIcon
                    className={'hover:text-primary hover:cursor-pointer'}
                  />
                  <ChatIcon
                    className={'hover:text-primary hover:cursor-pointer'}
                  />
                </div>
                <div>
                  <FormatQuoteIcon
                    className={'text-gray-100'}
                    sx={{ marginTop: '-8px', width: '14px' }}
                  />
                  <span>Casually flexing after lit gym sesh with the boys</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
