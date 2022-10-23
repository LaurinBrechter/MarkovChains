import { useState } from "react"
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { tokens } from "../../theme"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };


const Sidebar1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false) // wether or not the sidebar is collapsed
    const [selected, setSelected] = useState("Dashboard") // what page we are currently on.


    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                }
            }}
        >
					<Sidebar collapsed={isCollapsed}>
						<Menu iconShape="square">
							{/* LOGO AND MENU ICON */}
							<MenuItem
								onClick={() => setIsCollapsed(!isCollapsed)}
								icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
								style={{
									margin: "10px 0 20px 0",
									color: colors.grey[100],
								}}
							>
								{!isCollapsed && (
									<Box
										display="flex"
										justifyContent="space-between"
										alignItems="center"
										ml="15px"
									>
										<Typography variant="h3" color={colors.grey[100]}>
											ADMINIS
										</Typography>
										<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
											<MenuOutlinedIcon />
										</IconButton>
									</Box>
								)}
							</MenuItem>
							<Box paddingLeft={isCollapsed ? undefined : "10%"}>
								<Item
									title="Dashboard"
									to="/"
									icon={<HomeOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
								/>
								<Item
									title="Display Full"
									to="/display"
									icon={<HomeOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
								/>
								<Item
									title="Settings"
									to="/settings"
									icon={<HomeOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
								/>
								<Item
									title="Create"
									to="/create"
									icon={<HomeOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
								/>
								<Item
									title="theory"
									to="/theory"
									icon={<HomeOutlinedIcon />}
									selected={selected}
									setSelected={setSelected}
								/>
							</ Box>
						</ Menu>
									
					</ Sidebar>
        </Box>
    )
}

export default Sidebar