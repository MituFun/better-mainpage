'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Globe, Boxes, ChevronDown, BookOpenText } from 'lucide-react'
import Link from 'next/link'
import Snowfall from 'react-snowfall'  // Import the snowfall package

const noWrapClass = "whitespace-nowrap text-[clamp(1rem,3vw,3rem)]";
const largeNoWrapClass = "whitespace-nowrap text-[clamp(0.75rem,1.5vw,2rem)]";
const smallNoWrapClass = "whitespace-nowrap text-[clamp(0.75rem,1.5vw,1rem)]";

const greetings = [
    "「嗨，别来无恙啊。」",
    "「山有木兮木有枝，心悦君兮君不知。」",
    "「花径不曾缘客扫，蓬门今始为君开。」"
]

const farewells = [
    "「寄蜉蝣于天地，渺沧海之一粟。」",
    "「路漫漫其修远兮，吾将上下而求索。」",
    "「长风破浪会有时，直挂云帆济沧海。」"
]

const studys = [
    "「学而时习之，不亦说乎？」",
    "「博学之，审问之，慎思之，明辨之，笃行之。」",
    "「学而不思则罔，思而不学则殆。」",
    "「不积跬步，无以至千里；不积小流，无以成江海。」"
]

const tools = [
    "「工欲善其事，必先利其器。」",
    "「得其法者事半功倍，不得其法者事倍功半。」"
]

export function EnhancedHomepage() {
    const [currentPage, setCurrentPage] = useState(0)
    const [greeting, setGreeting] = useState('')
    const [farewell, setFarewell] = useState('')
    const [study, setStudy] = useState('');
    const [tool, setTool] = useState('');
    const [showSecondLine, setShowSecondLine] = useState(false)
    const [showContinuePrompt, setShowContinuePrompt] = useState(false)

    useEffect(() => {
        setGreeting(greetings[Math.floor(Math.random() * greetings.length)])
        setFarewell(farewells[Math.floor(Math.random() * farewells.length)])
        setStudy(studys[Math.floor(Math.random() * studys.length)])
        setTool(tools[Math.floor(Math.random() * tools.length)])
    }, [])

    useEffect(() => {
        if (currentPage === 1 || currentPage === 2 || currentPage === 3 || currentPage === 4) {
            const timer = setTimeout(() => setShowSecondLine(true), 1000)
            return () => clearTimeout(timer)
        }
        if (currentPage === 0) {
            const timer = setTimeout(() => setShowContinuePrompt(true), 5000)
            return () => clearTimeout(timer)
        }
    }, [currentPage])

    const nextPage = () => {
        setCurrentPage((prev) => (prev < 5 ? prev + 1 : 0));
        setShowSecondLine(false);
        setShowContinuePrompt(false);
    };

    const pageVariants = {
        initial: { opacity: 0, scale: 0.8 },
        in: { opacity: 1, scale: 1 },
        out: { opacity: 0, scale: 1.2 }
    }

    const pageTransition = {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.3
    }

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-4 overflow-hidden"
            onClick={nextPage}
        >
            <script defer src="https://admin.mitufun.top/script.js" data-website-id="f936b4d2-049c-4cdd-b7b3-ff77b13de782"></script>
            <script defer src="./click.js"></script>
            {/* Snowfall Component */}
            <Snowfall />
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentPage}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="text-center relative"
                >
                    {currentPage === 0 && (
                        <>
                            <motion.h1
                                className={`${noWrapClass} font-bold mb-4`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                style={{ textShadow: '0 0 30px rgba(255,255,255,0.7)' }}
                            >
                                {greeting}
                            </motion.h1>
                            {showContinuePrompt && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute bottom-[-50px] left-0 right-0 text-center"
                                >
                                    <ChevronDown className="inline-block animate-bounce" />
                                    <p className={`${smallNoWrapClass} text-gray-400`}>点击屏幕继续</p>
                                </motion.div>
                            )}
                        </>
                    )}

                    {currentPage === 1 && (
                        <>
                            <motion.h2
                                className={`${noWrapClass} font-semibold mb-4`}
                                initial={{ opacity: 0, x: -50, rotate: -10 }}
                                animate={{ opacity: 1, x: 0, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ textShadow: '0 0 30px rgba(255,255,255,0.6)' }}
                            >
                                「见字如面，吾念君安。」
                            </motion.h2>
                            {showSecondLine && (
                                <motion.p
                                    className={largeNoWrapClass}
                                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
                                >
                                    你好，我是 MituFun。
                                </motion.p>
                            )}
                        </>
                    )}

                    {currentPage === 2 && (
                        <>
                            {showSecondLine && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <motion.h1
                                        className={`${noWrapClass} font-bold mb-4`}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                        style={{ textShadow: '0 0 30px rgba(255,255,255,0.7)' }}
                                    >
                                        {study}
                                    </motion.h1>
                                    <motion.p
                                        className={`${largeNoWrapClass} mb-4`}
                                        style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
                                    >
                                        一些学习成果
                                    </motion.p>
                                    <motion.div
                                        className="flex flex-col justify-center space-y-4 w-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                                    >
                                        <Link href="https://blog.mitufun.top/" className={`flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors ${largeNoWrapClass}`}>
                                            <Globe size={26} />
                                            <span>My Blog</span>
                                        </Link>
                                        <Link href="https://github.com/MituFun" className={`flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors ${largeNoWrapClass}`}>
                                            <Github size={26} />
                                            <span>My GitHub</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            )}
                        </>
                    )}

                    {currentPage === 3 && (
                        <>
                            <motion.h2
                                className={`${noWrapClass} font-semibold mb-4`}
                                initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ textShadow: '0 0 30px rgba(255,255,255,0.6)' }}
                            >
                                「逍遥于天地之间，而心意自得。」
                            </motion.h2>
                            {showSecondLine && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <Link href="https://yuxincraft.mitufun.top/" className={`flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 transition-colors ${largeNoWrapClass}`}>
                                        <Boxes size={32} />
                                        <span>我的 Minecraft Server</span>
                                    </Link>
                                </motion.div>
                            )}
                        </>
                    )}

                    {currentPage === 4 && (
                        <>
                            {showSecondLine && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <motion.h1
                                        className={`${noWrapClass} font-bold mb-4`}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                        style={{ textShadow: '0 0 30px rgba(255,255,255,0.7)' }}
                                    >
                                        {tool}
                                    </motion.h1>
                                    <motion.p
                                        className={`${largeNoWrapClass} mb-4`}
                                        style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
                                    >
                                        一些工具
                                    </motion.p>
                                    <motion.div
                                        className="flex flex-col justify-center space-y-4 w-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                                    >
                                        <Link href="https://recite.mitufun.top/" className={`flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors ${largeNoWrapClass}`}>
                                            <BookOpenText size={26} />
                                            <span>背诵工具</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            )}
                        </>
                    )}

                    {currentPage === 5 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
                        >
                            <h2
                                className={`${noWrapClass} font-semibold mb-8`}
                                style={{ textShadow: '0 0 30px rgba(255,255,255,0.6)' }}
                            >
                                {farewell}
                            </h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className={`${smallNoWrapClass} text-gray-400`}
                            >
                                这是最后一页了
                            </motion.p>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>

            <motion.div
                className="absolute bottom-4 right-4 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                Developed by MituFun
            </motion.div>
        </div>
    )
}
