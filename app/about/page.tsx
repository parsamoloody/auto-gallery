import React, { JSX } from 'react'
import Image from 'next/image'
import team from '@/img/4cbe2048575b86fa507c9697cf10a622f5e36a92-1352x1014.jpg'
import bg from '@/img/42bcfbd4c79b899aea024ef493c949dc0fecdead-1920x1080.jpg'
import p1 from '@/img/31e4aea180780fa79e96237234c18baeb15b8d15-1440x810.jpg'
import p2 from '@/img/3728c752d11f9c1e51f6ac184e32e01aa907274d-1352x760.jpg'
import p3 from '@/img/c9868ee13bdcde89f2e59f60075f4a1d1caa5ad0-5422x3077.jpg'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | Auto Gallery',
    description: 'Learn about Auto Gallery, our passionate team, and our commitment to delivering exceptional automotive experiences. Discover our story and expertise in luxury and performance vehicles.',
    keywords: ['auto gallery', 'luxury cars', 'car dealership', 'automotive excellence', 'car sales', 'about us'],
    openGraph: {
        title: 'About | Auto Gallery',
        description: 'Learn about Auto Gallery, our passionate team, and our commitment to delivering exceptional automotive experiences.',
        images: [
            {
                url: '/og-about.jpg',
                width: 1200,
                height: 630,
                alt: 'Auto Gallery About Page'
            }
        ]
    }
}

const Hero = (): JSX.Element => {
    return (
        <>
            <div className="container mx-auto px-4 py-8 border">
                <div className="flex flex-col lg:flex-row gap-8 items-center">

                    <div className="flex-1 space-y-6 text-lg text-gray-300">
                        <p className='text-lg text-gray-600 dark:text-gray-300 border-b border-red-700 p-1 inline'>
                            Read our story
                        </p>
                        <h1 className="text-4xl font-bold mt-6 text-white">
                            SUCCESS IS A MATTER OF ADJUSTMENT – AND NOT JUST FOR THE ENGINES
                        </h1>
                        <p className="">
                            Mercedes‑AMG GmbH has recorded numerous successes in motorsport and through
                            the development of unique road-going vehicles, thereby repeatedly proving
                            its position as a highly successful sports car and high-performance brand
                            – and today this is truer than ever.
                        </p>
                        <p>
                            Affalterbach is home to AMG’s management, administration, sales, development
                            and design teams as well as AMG hand-crafted engine building. This is where
                            AMG V8 engines and AMG 4-cylinder/in-line engines are produced. Each engine
                            is hand-assembled by a single engine builder in accordance with the "one man,
                            one engine" philosophy and bears a hand-signed plaque from him
                        </p>

                    </div>

                    <div className="w-full lg:w-1/2">
                        <Image
                            src={team}
                            alt="About our shop"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                            priority
                            placeholder='blur'
                        />
                    </div>
                </div>
                {/* Line */}
                <div className='w-full text-center my-14 lg:px-40 lg:my-40'>
                    <div className='text-2xl text-center h-full lg:mx-auto text-white p-1 inline'>
                        AMG – these three letters stand worldwide for supreme automotive
                        performance, exclusiveness, efficiency and highly dynamic driving
                        pleasure. Today, as a wholly owned subsidiary of Mercedes-Benz Group
                        AG, the Affalterbach-based company represents the sporting spearhead of the Group.
                    </div>
                </div>
                {/* Employers */}
                <div className='space-y-26'>
                    {/* 1 */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center">

                        <div className="flex-1 space-y-6 text-lg text-gray-300">
                            <p className='text-lg text-gray-600 dark:text-gray-300 border-b border-red-700 p-1 inline'>
                                Chairman of the board
                            </p>
                            <h1 className="text-4xl font-bold mt-6 text-white">
                                Michael Schiebe
                            </h1>
                            <p className="">
                                Michael Schiebe has been with the company
                                since 2004. Still at Daimler AG at that
                                time, he started his career in the area of
                                Strategic Product Projects, then moved to
                                Controlling and later to Marketing and Sales.
                                Among other things, he also served as President
                                & CEO of Mercedes-Benz Luxembourg S.A. and was
                                subsequently responsible for Mercedes-Benz Passenger
                                Car Sales in Germany. From 2020 to 2023, he reported
                                to Ola Källenius as Chief of Staff and Head of Corporate
                                Office Mercedes-Benz Group AG. Since March 2023, Michael
                                has been CEO of Mercedes-AMG GmbH and Head of the Top End
                                Vehicle (TEV) Group.
                            </p>

                        </div>

                        <div className="w-full lg:w-1/2">
                            <Image
                                src={p2}
                                alt="About our shop"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                                placeholder='blur'
                            />
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={p3}
                                alt="About our shop"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                                placeholder='blur'
                            />
                        </div>
                        <div className="flex-1 space-y-6 text-lg text-gray-300">
                            <p className='text-lg text-gray-600 dark:text-gray-300 border-b border-red-700 p-1 inline'>
                                Chief Financial Officer
                            </p>
                            <h1 className="text-4xl font-bold mt-6 text-white">
                                Stefanie Choritz
                            </h1>
                            <p className="">
                                Stefanie Choritz has been with the company since 2005. After
                                completing her dual studies, she began her career in product
                                controlling and went on to hold leadership roles in material,
                                result, and development controlling before being appointed CFO
                                of Accumotive GmbH & Co. KG in 2020. From 2021, she led Product
                                Controlling, making a key contribution to the development of the
                                product portfolio and the efficient management of financial steering.
                                Since July 2025, Stefanie has been serving as CFO of Mercedes-AMG GmbH
                                and Head of Financie & Controlling of the Top End Vehicle (TEV) Group.
                            </p>

                        </div>
                    </div>
                    {/* 3 */}
                    <div className="flex flex-col lg:flex-row gap-8 items-center">

                        <div className="flex-1 space-y-6 text-lg text-gray-300">
                            <p className='text-lg text-gray-600 dark:text-gray-300 border-b border-red-700 p-1 inline'>
                                Labour Director / Managing Director
                            </p>
                            <h1 className="text-4xl font-bold mt-6 text-white">
                                Dr. Andreas Hertweck
                            </h1>
                            <p className="">
                                Dr. Andreas Hertweck has been with the Mercedes-Benz Group
                                for over 20 years in various management positions in strategy,
                                purchasing and human resources.
                            </p>

                        </div>

                        <div className="w-full lg:w-1/2">
                            <Image
                                src={p1}
                                alt="About our shop"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                                placeholder='blur'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const BgCover = (): JSX.Element => {
    return (
        <div className="">
            <Image
                src={bg}
                alt="Background"
                priority
                placeholder='blur'
                className='-mt-26 lg:h-screen object-cover w-full h-[60vh] lg:w-full lg:object-cover'
            />
        </div>
    )
}
const About = (): JSX.Element => {
    return (
        <section className='w-full h-full bg-black'>
            <BgCover />
            <Hero />
        </section>
    )
}

export default About
