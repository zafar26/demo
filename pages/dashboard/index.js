import Chart from "../../Components/chart"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "../../Components/Navbar/Navbar"

export default function Home() {


    let country = [
        ['India', 55],
        ['SriLanka', 10],
        ['China', 35]
    ]
    let state = [
        ['Telangana', 30],
        ['Andhra Pradesh', 10],
        ['Kerla', 20],
        ['Karnataka', 25],
        ['Tamilnadu', 15]
    ]
    let travel = [
        ['Bus', 10],
        ['Train', 20],
        ['Flight', 25],
        ['Private Jet', 27],
        ['Yatch', 18]
    ]
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: '-100vw',
            transition: {
                ease: 'easeInOut',

            }

        }
    }
    return (
        <AnimatePresence>
            <div style={{ width: '100vw', display: 'flex' }}>
                <Navbar userType="Admin" />
            </div>
            <motion.div
                style={{ marginTop: '80px', overflow: 'scroll', width: '100vw', height: '80vh' }}

                varriants={containerVariants}
                initial="hidden"
                animation="visible"
                exit="exit">

                <Chart data={country} title='Country Wise ' />
                <Chart data={state} title='State Wise ' />
                <Chart data={travel} title='Trnsport Wise ' />
            </motion.div>
        </AnimatePresence>
    )
}
