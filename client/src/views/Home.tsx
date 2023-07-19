import React from "react";
import styles from "../styles/Home.module.css";

import Servers from '../components/Servers';
import Messages from '../components/Messages';
import Options from '../components/Options';

const Home: React.FC<{}> = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.left}>
                <Servers />
            </div>
            <div className={styles.center}>
                <Messages />
            </div>
            <div className={styles.right}>
                <Options />
            </div>
        </div>
        </>
    );
}

export default Home;