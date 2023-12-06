"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import { RiArrowDropRightFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";



export default function Home() {
  const [documentsDrop, setDocumentsDrop] = useState(false)
  const [downloadsDrop, setDownloadsDrop] = useState(false)
  const [desktopDrop, setDesktopDrop] = useState(false)
  const [driversDrop, setDriversDrop] = useState(false)
  const [appsDrop, setAppsDrop] = useState(false)

  const toggleDocumentsDrop = () => {
    setDocumentsDrop(value => !value)
  }
  const toggleDownloadsDrop = () => {
    setDownloadsDrop(value => !value)
  }
  const toggleDesktopDrop = () => {
    setDesktopDrop(value => !value)
  }
  const toggleDriversDrop = () => {
    setDriversDrop(value => !value)
  }
  const toggleAppsDrop = () => {
    setAppsDrop(value => !value)
  }





  return (
    <>
      <div className='min-h-screen'>
        <div className='bg-pink-600 text-white'>
          <div className='py-2 pl-2'>File Structure is</div>
          <div className='py-4 px-8 bg-black'>
            <div id='documents' onClick={toggleDocumentsDrop} className='py-1 flex items-center'>
              {documentsDrop ? <AiFillCaretDown className='text-md mr-1 cursor-pointer' /> : <AiFillCaretRight className='text-md mr-1 cursor-pointer' />}
              <FaFolder />
              <div className={`pl-2 cursor-pointer font-semibold`}>Documents</div>
            </div>
            <ul className={`${documentsDrop ? '' : 'hidden'} pl-14`}>
              <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Document1.jpg
              </li>
              <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Document2.jpg
              </li>
              <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Document3.jpg
              </li>
            </ul>
            <div id='desktop' onClick={toggleDesktopDrop} className='py-1 flex items-center'>
              {desktopDrop ? <AiFillCaretDown className='text-md mr-1 cursor-pointer' /> : <AiFillCaretRight className='text-md mr-1 cursor-pointer' />}
              <FaFolder />
              <div className={`pl-2 cursor-pointer font-semibold`}>Desktop</div>
            </div>
            <ul className={`${desktopDrop ? '' : 'hidden'} pl-14`}>
              <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Screenshot1.jpg
              </li>
              <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>videopal.mp4
              </li>
            </ul>
            <div id='downloads' onClick={toggleDownloadsDrop} className='py-1 flex items-center'>
              {downloadsDrop ? <AiFillCaretDown className='text-md mr-1 cursor-pointer' /> : <AiFillCaretRight className='text-md mr-1 cursor-pointer' />}
              <FaFolder />
              <div className={`pl-2 cursor-pointer font-semibold`}>Downloads</div>
            </div>
            <ul className={`${downloadsDrop ? '' : 'hidden'} pl-14`}>
              <li id='drivers' onClick={toggleDriversDrop} className='py-1 flex items-center'>
                {driversDrop ? <AiFillCaretDown className='text-md mr-1 cursor-pointer' /> : <AiFillCaretRight className='text-md mr-1 cursor-pointer' />}
                <FaFolder />
                <div className={`pl-2 cursor-pointer font-semibold`}>Drivers</div>
              </li>
              <ul className={`${driversDrop ? '' : 'hidden'} pl-14`}>
                <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Printerdriver.dmg
                </li>
                <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>cameradriver.dmg
                </li>
              </ul>
              <li id='apps' onClick={toggleAppsDrop} className='py-1 flex items-center'>
                {appsDrop ? <AiFillCaretDown className='text-md mr-1 cursor-pointer' /> : <AiFillCaretRight className='text-md mr-1 cursor-pointer' />}
                <FaFolder />
                <div className={`pl-2 cursor-pointer font-semibold`}>Applications</div>
              </li>
              <ul className={`${appsDrop ? '' : 'hidden'} pl-14`}>
                <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Webstorm.dmg
                </li>
                <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Pycharm.dmg
                </li>
                <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>FileZila.dmg
                </li>
                <li className='flex items-center font-mono text-gray-500 text-lg cursor-pointer'>Mattermost.dmg
                </li>
              </ul>
              <li className='pl-10 flex items-center font-mono text-gray-500 text-lg cursor-pointer'>chromedriver.dmg
              </li>
            </ul>

          </div>
        </div>

      </div>
    </>
  )
}
