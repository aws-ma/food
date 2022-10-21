import "./creator.css";
import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";
const Creator = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return show ? (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: 0, transition: { duration: 0 } }}
            className='creator-container'>
            <span className='text'>
                Made With
                <BsHeartFill style={{ color: "red", margin: "0 10px" }} />
                By Aws Maarouf
            </span>
            <hr style={{ margin: "5px 0", color: "var(--secondary-color)" }} />
            <span className='text'>
                Email:
                <br /> awsma9@gmail.com
            </span>
            <button onClick={() => setShow(false)}>OK</button>
        </motion.div>
    ) : (
        <></>
    );
};

export default Creator;
