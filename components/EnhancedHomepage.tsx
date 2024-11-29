'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Globe, Gamepad2, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Snowfall from 'react-snowfall'  // Import the snowfall package

const noWrapClass = "whitespace-nowrap text-[clamp(1rem,3vw,3rem)]";
const largeNoWrapClass = "whitespace-nowrap text-[clamp(0.75rem,1.5vw,2rem)]";
const smallNoWrapClass = "whitespace-nowrap text-[clamp(0.75rem,1.5vw,1rem)]";

const greetings = [
    "「嗨，别来无恙啊。」",
    "「有朋自远方来，不亦说乎？」",
    "「山有木兮木有枝，心悦君兮君不知。」",
    "「海内存知己，天涯若比邻。」"
]

const farewells = [
    "「莫愁前路无知己，天下谁人不识君。」",
    "「路漫漫其修远兮，吾将上下而求索。」",
    "「人生若只如初见，何事秋风悲画扇。」"
]

export function EnhancedHomepage() {
    const [currentPage, setCurrentPage] = useState(0)
    const [greeting, setGreeting] = useState('')
    const [farewell, setFarewell] = useState('')
    const [showSecondLine, setShowSecondLine] = useState(false)
    const [showContinuePrompt, setShowContinuePrompt] = useState(false)

    useEffect(() => {
        setGreeting(greetings[Math.floor(Math.random() * greetings.length)])
        setFarewell(farewells[Math.floor(Math.random() * farewells.length)])
    }, [])

    useEffect(() => {
        if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
            const timer = setTimeout(() => setShowSecondLine(true), 1000)
            return () => clearTimeout(timer)
        }
        if (currentPage === 0) {
            const timer = setTimeout(() => setShowContinuePrompt(true), 5000)
            return () => clearTimeout(timer)
        }
    }, [currentPage])

    const nextPage = () => {
        setCurrentPage((prev) => (prev < 4 ? prev + 1 : 0));
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
                                style={{ textShadow: '0 0 20px rgba(255,255,255,0.7)' }}
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
                                style={{ textShadow: '0 0 15px rgba(255,255,255,0.6)' }}
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
                                    <motion.h2
                                        className={`${noWrapClass} font-semibold mb-4`}
                                        initial={{ opacity: 0, scale: 1.5, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ textShadow: '0 0 15px rgba(255,255,255,0.6)' }}
                                    >
                                        「欲识吾乎？」
                                    </motion.h2>
                                    <motion.p
                                        className={`${largeNoWrapClass} mb-4`}
                                        style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
                                    >
                                        尔何不自观之？
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
                                style={{ textShadow: '0 0 15px rgba(255,255,255,0.6)' }}
                            >
                                「欲与吾共游乎？」
                            </motion.h2>
                            {showSecondLine && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <Link href="https://yuxincraft.mitufun.top/" className={`flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 transition-colors ${largeNoWrapClass}`}>
                                        <Gamepad2 size={16} />
                                        <span>我的 Minecraft Server</span>
                                    </Link>
                                </motion.div>
                            )}
                        </>
                    )}

                    {currentPage === 4 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
                        >
                            <h2
                                className={`${noWrapClass} font-semibold mb-8`}
                                style={{ textShadow: '0 0 15px rgba(255,255,255,0.6)' }}
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
