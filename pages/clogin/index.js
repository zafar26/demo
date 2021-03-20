import { useState } from 'react'
import MyInput from '../../Components/Input'
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuAppBar from '../../Components/Appbar';
// import styles from '../../styles/login.css'
import { useRouter } from 'next/router'
import styles from './login.module.css'
import { motion, AnimatePresence } from "framer-motion"
import db from '../../myDatabase'


export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleMouseDownPassword = (event, link) => {
        event.preventDefault();

        // db.login.add({
        //     userType: "Admin",
        //     email: email,
        //     password: password
        // })
        router.push(link)
    };
    // const handleClick = (e, setIsLogin) => {
    //     setIsLogin(true)

    //     db.login.add({
    //         host: host,
    //         email: email,
    //         password: password
    //     })

    // }
    // const inputs = [
    //     {
    //         name: 'Host',
    //         value: host,
    //         onChange: setHost
    //     },
    //     {
    //         name: 'Email',
    //         value: email,
    //         onChange: setEmail
    //     }
    // ]
    const [login, setLogin] = useState({})

    return (
        <AnimatePresence>

            <div id={styles.loginPage} >
                <div className={styles.pageInner}>
                    <form
                        className={styles.form}
                        onSubmit={e => router.push('/cdashboard')}
                        noValidate autoComplete="off">
                        <div className={styles.accountCircle}>
                            <AccountCircle style={{ fontSize: "60", color: 'gray' }} />
                            <h2 style={{ color: 'gray' }}>User Login </h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* {inputs.map((item) =>
                            <MyInput key={item.name} name={item.name} value={item.value} onChange={item.onChange} />
                        )} */}
                            <MyInput name='Email' value={email} onChange={setEmail} />

                            <MyInput name='Password' type='password' value={password} onChange={setPassword} showPassword={showPassword}
                                setShowPassword={setShowPassword} />
                        </div>
                        <div className={styles.submitbutton}>
                            <Button variant="contained" color="primary" style={{ color: 'white' }}
                                onClick={e => handleMouseDownPassword(e, '/cdashboard')}
                            // onClick={e => handleClick(e, props.setIsLogin)}
                            >
                                Validate
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AnimatePresence>

    )
}


// Login.getInitialProps = async (props) => {
//     return props
// }
