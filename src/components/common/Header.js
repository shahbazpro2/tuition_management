import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from './Container'
import MenuIcon from '@mui/icons-material/Menu';
import { url_hq, url_login } from '../functions/pageUrls';
const links = [
    { url: url_login, name: 'TCenter' },
    { url: url_hq, name: 'HQ' },


]
const Header = () => {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    return (
        <div className='shadow-md shadow-gray-400 bg-gray-800 text-white'>
            <Container>
                <div className='h-[72px] flex items-center'>
                    <Link to={links[0].url}><div className='text-xl cursor-pointer'>{links[0].name}</div></Link>
                    {(!location.pathname.includes(url_login)) && <>
                        <div className="md:hidden ml-auto flex items-center" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </div>
                        <div className="ml-auto space-x-7 hidden md:flex">
                            {links.map((link, index) => (
                                index !== 0 && <Link key={index} to={link.url}>  <div className="cursor-pointer">{link.name}</div></Link>

                            ))}
                        </div>
                    </>
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
