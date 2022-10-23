import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import InputBase from "@mui/material/InputBase"
import { ColorModeContext, tokens } from "../../theme"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsIcon from "@mui/icons-material/SettingsOutlined"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
				<InputBase sx={{ ml:2, flex:1}} placeholder="Search" />
				<IconButton type="button" sx={{ p:1 }}>
					{/*<SearchIcon />*/}
					<SearchOutlinedIcon />
				</IconButton>
			</Box>
			<Box>
				
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<LightModeOutlinedIcon />
					) : (
						<DarkModeOutlinedIcon />
					)}
					
				</IconButton>
				<IconButton>
					<SettingsIcon />
				</IconButton>
			</Box>
    </Box>
  )
}

export default Topbar