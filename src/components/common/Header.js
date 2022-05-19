/* eslint-disable no-undef */
import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from './Container'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { url_attendence, url_centerKpi, url_centers, url_contact, url_courses, url_enquires, url_hq, url_inventories, url_issue2Student, url_login, url_packages, url_payByStudent, url_payHq, url_report, url_settings, url_studentInvoicing, url_students } from 'utils/pageUrls';
import { Toggle } from './Toggle';
const links = [
    { url: url_hq, name: 'TCenter' },
    { url: url_centers, name: 'Centers' },
    { url: url_courses, name: 'Courses' },
    { url: url_centerKpi, name: 'Center KPI' },
    { url: url_packages, name: 'Packages' },
    { url: url_inventories, name: 'Inventories' },
    { url: url_studentInvoicing, name: 'Invoice/Billing' },
    { url: url_students, name: 'Students' },
    { url: url_attendence, name: 'Attendance' },
    { url: url_payHq, name: 'PayHQ' },
    { url: url_report, name: 'Report' },
    { url: url_enquires, name: 'Enquiries' },
    { url: url_issue2Student, name: 'Issue Inventory' },
    { url: url_payByStudent, name: 'Received Payment' },
    { url: url_settings, name: 'Setting' },
]
const extraLinks = [
    { url: url_payHq, name: 'PayHQ' },
    { url: url_report, name: 'Report' },
    { url: url_enquires, name: 'Enquiries' },
    { url: url_issue2Student, name: 'Issue Inventory' },
    { url: url_payByStudent, name: 'Received Payment' },
    { url: url_settings, name: 'Setting' },
]
const Header = () => {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <div className='bg-headcolor dark:bg-gray-900 dark:text-white text-black print:hidden py-5'>
            <Container>
                <div className='h-[75px] flex items-center justify-between'>
                    <Link to={links[0].url}><div className='text-xl cursor-pointer'><img src={`${process.env.PUBLIC_URL}/assets/logo_default.png`} width="45" /></div></Link>
                    {(!location.pathname.includes(url_login)) ? <>
                        <div className="lg:hidden ml-auto flex items-center" onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </div>
                        <div className="hidden lg:flex items-center w-[95%] flex-wrap">
                            {links.map((link, index) => (
                                index !== 0 && <Link key={index} to={link.url}>  <div className="cursor-pointer mx-3">{link.name}</div></Link>

                            ))}
                            {/*  <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <div className='cursor-pointer' {...bindTrigger(popupState)}>
                                            More
                                        </div>
                                        <Menu {...bindMenu(popupState)}>
                                            {extraLinks.map(links => (
                                                <MenuItem key={links.name} onClick={() => { popupState.close(); navigate(links.url) }}>{links.name}</MenuItem>
                                            ))}
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState> */}
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
                    {[...links, ...extraLinks].map((link, index) => (
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
