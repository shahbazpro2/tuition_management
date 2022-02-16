/* eslint-disable no-undef */
import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from './Container'
import MenuIcon from '@mui/icons-material/Menu';
import { url_contact, url_hq, url_login } from '../functions/pageUrls';
import { Toggle } from './Toggle';
const links = [
    { url: url_login, name: 'TCenter' },
    { url: url_hq, name: 'HQ' },


]
const Header = () => {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-headcolor dark:bg-gray-900 dark:text-white text-black print:hidden'>
            <Container>
                <div className='h-[75px] flex items-center'>
                    <Link to={links[0].url}><div className='text-xl cursor-pointer'><img src={`${process.env.PUBLIC_URL}/assets/logo_default.png`} width="45" /></div></Link>
                    {(!location.pathname.includes(url_login)) ? <>
                        <div className="md:hidden ml-auto flex items-center" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </div>
                        <div className="ml-auto space-x-7 hidden md:flex items-center">
                            {links.map((link, index) => (
                                index !== 0 && <Link key={index} to={link.url}>  <div className="cursor-pointer">{link.name}</div></Link>

                            ))}
                            <Toggle />
                        </div>
                    </> : <div className="ml-auto space-x-7 hidden md:flex items-center">
                        <Link to={url_contact}>  <div className="cursor-pointer">Contact Us</div></Link>
                        <Toggle />
                    </div>
                    }
                </div>
            </Container>
            <Drawer
                anchor={"left"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <List>
                    {links.map((link, index) => (
                        index !== 0 && <Link key={index} to={link.url}>  <ListItem onClick={() => setOpen(false)} button>
                            <ListItemText primary={link.name} />
                        </ListItem></Link>

                    ))}

                </List>
            </Drawer>

        </div>
    )
}

export default Header
