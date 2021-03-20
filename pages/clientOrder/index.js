import { useState } from 'react'
import MyInput from '../../Components/Input'
import { Button, Input, TextField } from '@material-ui/core';

import AccountCircle from '@material-ui/icons/AccountCircle';

// import styles from '../../styles/login.css'
import { useRouter } from 'next/router'
import styles from './login.module.css'
import { motion, AnimatePresence } from "framer-motion"
// import db from '../../myDatabase'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import DateTime from '../../Components/DateTime';
import db from '../../myDatabase'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};


export default function Login() {
    const router = useRouter()
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [date, setDate] = useState(new Date())

    const handleMouseDownPassword = (event, link) => {
        event.preventDefault();

        console.log(product,
            quantity,
            description,
            date
        )
        // db.orders.add({
        //     productName: product,
        //     quantity,
        //     description,
        //     deliveryDate: date
        // })
        router.push(link)
    };
    const productsLabel = [
        {
            value: 'product1',
            label: 'Product 1',
        },
        {
            value: 'product2',
            label: 'Product 2',
        },
        {
            value: 'product3',
            label: 'Product 3',
        },
        {
            value: 'product4',
            label: 'Product 4',
        },
        {
            value: 'product5',
            label: 'Product 5',
        }
    ];

    return (
        <AnimatePresence>

            <div id={styles.loginPage} >
                <div className={styles.pageInner}>
                    <form
                        className={styles.form}
                        onSubmit={e => router.push('/cdashboard')}
                        noValidate autoComplete="off">
                        <div className={styles.accountCircle}>
                            <h2 style={{ color: 'gray' }}>Create Order </h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <FormControl variant="outlined" size="small" style={{ width: '210px' }}>
                                <InputLabel id="d">Products</InputLabel>
                                <Select
                                    labelId="d"
                                    name="Products"
                                    id="outlined-improvements-native-simple"
                                    // label="Age"
                                    // multiple
                                    // type="multicheck"
                                    value={product}
                                    onChange={e => setProduct(e.target.value)}
                                    // input={<Input />}
                                    MenuProps={MenuProps}
                                >
                                    {productsLabel.map((item) => (
                                        <MenuItem key={item.value} value={item.value} >
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <MyInput name='Quantity' value={quantity} onChange={setQuantity} size="small" />
                            <FormControl style={{ marginTop: 10 }}>

                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    size="small"
                                    rows={3}
                                    variant="outlined"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </FormControl>
                            <FormControl style={{ marginTop: 15 }}>
                                <DateTime value={date} onChange={e => setDate(e.target.value)} label="Expected Delivery" />
                            </FormControl>
                        </div>
                        <div className={styles.submitbutton}>
                            <Button variant="contained" color="primary" style={{ color: 'white' }}
                                onClick={e => handleMouseDownPassword(e, '/cdashboard')}
                            // onClick={e => handleClick(e, props.setIsLogin)}
                            >
                                Create
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AnimatePresence>

    )
}


